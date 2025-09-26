const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets setup
let authClient = null;
let sheetsClient = null;

async function getSheetClient() {
  if (sheetsClient) {
    return sheetsClient;
  }
  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    if (!privateKey) {
      throw new Error("Google Private Key is missing in environment variables");
    }
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    authClient = await auth.getClient();
    sheetsClient = google.sheets({ version: "v4", auth: authClient });
    return sheetsClient;
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    authClient = null;
    sheetsClient = null;
    throw error;
  }
}

// Validation helpers
const validateMobileNumber = (mobileNumber) => /^[6-9]\d{9}$/.test(String(mobileNumber));
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));

// Corporate form submission endpoint
app.post('/api/corporate-registration', async (req, res) => {
  try {
    const body = req.body;
    
    // Server-side validation
    if (!body.companyName || !body.contactPerson || !body.employeeCount) {
      return res.status(400).json({
        success: false,
        message: "Company name, contact person, and employee count are required."
      });
    }
    
    if (!validateEmail(body.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format."
      });
    }
    
    if (!validateMobileNumber(body.phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: "Invalid 10-digit mobile number."
      });
    }

    const submissionDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const values = [[
      submissionDate,
      body.companyName,
      body.contactPerson,
      body.email,
      body.phoneNumber,
      body.employeeCount,
      body.industry || 'N/A',
      body.currentProvider || 'N/A',
      body.specificNeeds || 'N/A'
    ]];

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Google Sheet ID is missing in environment variables");
    }

    try {
      const sheets = await getSheetClient();
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "CorporateInquiries!A:I",
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        resource: { values },
      });

      res.json({
        success: true,
        message: "Registration submitted successfully! Our team will contact you within 24 hours."
      });

    } catch (googleError) {
      console.error("Google Sheets API Error:", googleError);
      if (googleError.message?.includes("invalid_grant")) {
        authClient = null;
        sheetsClient = null;
        return res.status(401).json({
          success: false,
          message: "Authentication error. Please contact support."
        });
      }
      if (googleError.message?.includes("permission")) {
        return res.status(403).json({
          success: false,
          message: "Permission denied. Contact support."
        });
      }
      throw googleError;
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit data. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Corporate API: http://localhost:${PORT}/api/corporate-registration`);
});
