// Corporate API Service
// This service handles the submission of corporate registration forms

interface CorporateFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  employeeCount: string;
  industry?: string;
  currentProvider?: string;
  specificNeeds?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}


// For development/testing, you can use a mock API or connect to your existing backend
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001';

export const submitCorporateForm = async (formData: CorporateFormData): Promise<ApiResponse> => {
  try {
    // For now, we'll simulate the API call
    // Replace this with your actual API endpoint
    const response = await fetch(`${API_BASE_URL}/api/corporate-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        submissionDate: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit form');
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Registration submitted successfully!',
    };
  } catch (error: any) {
    console.error('API Error:', error);
    return {
      success: false,
      message: 'Failed to submit registration. Please try again.',
      error: error.message,
    };
  }
};

// Alternative: Direct Google Sheets integration (if you have a backend service)
export const submitToGoogleSheets = async (formData: CorporateFormData): Promise<ApiResponse> => {
  try {
    // This would connect to your Google Sheets backend service
    const response = await fetch(`${API_BASE_URL}/api/submit-to-sheets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: 'corporate',
        submissionDate: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit to sheets');
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Data submitted to Google Sheets successfully!',
    };
  } catch (error: any) {
    console.error('Google Sheets API Error:', error);
    return {
      success: false,
      message: 'Failed to submit to Google Sheets. Please try again.',
      error: error.message,
    };
  }
};

// Mock API for testing (remove this in production)
export const submitCorporateFormMock = async (formData: CorporateFormData): Promise<ApiResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate success (you can change this to simulate errors for testing)
  const isSuccess = Math.random() > 0.1; // 90% success rate for testing
  
  if (isSuccess) {
    console.log('Mock API - Form submitted:', formData);
    return {
      success: true,
      message: 'Registration submitted successfully! Our team will contact you within 24 hours.',
    };
  } else {
    throw new Error('Mock API - Simulated server error');
  }
};
