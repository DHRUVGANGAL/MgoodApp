# Corporate Form Setup Guide

## Overview
The corporate form has been successfully integrated into the explore tab of your React Native app. The form includes:

- Company registration form with validation
- Google Sheets integration for data storage
- Success/error handling
- Contact information sidebar
- Express.js backend server

## Environment Variables Required

Create a `.env` file in the `server` directory with the following variables:

```env
# Google Sheets API Configuration
GOOGLE_SHEET_ID=your_google_sheet_id_here
GOOGLE_CLIENT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"

# Server Configuration
PORT=3001
NODE_ENV=development
```

## Google Sheets Setup

1. **Create a Google Sheet** with the following columns in a sheet named "CorporateInquiries":
   - A: Submission Date
   - B: Company Name
   - C: Contact Person
   - D: Email
   - E: Phone Number
   - F: Employee Count
   - G: Industry
   - H: Current Provider
   - I: Specific Needs

2. **Set up Google Service Account**:
   - Go to Google Cloud Console
   - Create a new project or select existing
   - Enable Google Sheets API
   - Create a Service Account
   - Download the JSON key file
   - Share your Google Sheet with the service account email

3. **Extract credentials** from the JSON file:
   - `client_email` → `GOOGLE_CLIENT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY`
   - Sheet ID from URL → `GOOGLE_SHEET_ID`

## Form Features

### Validation
- Company name (required)
- Contact person (required)
- Email (valid format)
- Phone number (10-digit Indian format)
- Employee count (required, dropdown selection)

### API Endpoint
- **URL**: `/api/submit-corporate`
- **Method**: POST
- **Content-Type**: application/json

### Response Format
```json
{
  "message": "Data submitted successfully"
}
```

## Server Setup

1. **Install server dependencies**:
   ```bash
   cd server
   npm install
   ```

2. **Start the backend server**:
   ```bash
   cd server
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

3. **Verify server is running**:
   - Health check: http://localhost:3001/health
   - API endpoint: http://localhost:3001/api/corporate-registration

## Testing

1. Start the backend server: `cd server && npm start`
2. Start your React Native app: `npm start`
3. Navigate to the Explore tab
4. Fill out the corporate registration form
5. Submit and verify data appears in your Google Sheet

## Error Handling

The form includes comprehensive error handling:
- Client-side validation
- Server-side validation
- Network error handling
- Google Sheets API error handling
- User-friendly error messages

## Dependencies Added

### React Native App:
- `googleapis`: For Google Sheets integration
- `lucide-react-native`: For icons (already installed)

### Backend Server:
- `express`: Web server framework
- `cors`: Cross-origin resource sharing
- `googleapis`: Google Sheets API
- `dotenv`: Environment variable management
- `nodemon`: Development auto-restart (dev dependency)

## API Endpoints

- **POST** `/api/corporate-registration`: Submit corporate form data
- **GET** `/health`: Server health check

## Notes

- The form is fully responsive and works on both iOS and Android
- Data is stored in Google Sheets with timestamp
- All sensitive data is handled securely through environment variables
- The API endpoint is specifically for corporate inquiries only
- Backend server runs on port 3001 by default
