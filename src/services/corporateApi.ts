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
  data?: any;
}

// API endpoint for corporate requests
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

/**
 * Submit corporate registration form
 * @param formData - The form data to submit
 * @returns Promise<ApiResponse>
 */
export const submitCorporateForm = async (formData: CorporateFormData): Promise<ApiResponse> => {
  try {
    console.log('📤 Submitting corporate form to:', `${API_BASE_URL}/submit-corporate-request`);
    console.log('📤 Form data:', formData);

    const response = await fetch(`${API_BASE_URL}/sheets/submit-corporate-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        employeeCount: formData.employeeCount,
        industry: formData.industry || ''
      }),
    });

    console.log('📥 Response status:', response.status);
    console.log('📥 Response headers:', response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ API Response:', result);
    
    return {
      success: result.success,
      message: result.message,
      data: {
        requestId: `CORP-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        estimatedResponseTime: '24 hours'
      }
    };

  } catch (error: any) {
    console.error('❌ Error submitting corporate form:', error);
    
    // Return user-friendly error message
    if (error.message.includes('Network') || error.message.includes('fetch')) {
      return {
        success: false,
        message: 'Network error. Please check your internet connection and try again.'
      };
    }
    
    if (error.message.includes('timeout')) {
      return {
        success: false,
        message: 'Request timeout. Please try again.'
      };
    }

    return {
      success: false,
      message: error.message || 'An unexpected error occurred. Please try again.'
    };
  }
};
