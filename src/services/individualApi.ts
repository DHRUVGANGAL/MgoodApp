interface IndividualFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  serviceType: string;
  requestDetails: string;
  preferredContactMethod: string;
  urgencyLevel: string;
  medicalHistory: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Mock API endpoint - replace with your actual API endpoint
const API_BASE_URL = 'https://your-api-endpoint.com/api';

/**
 * Submit individual healthcare request form
 * @param formData - The form data to submit
 * @returns Promise<ApiResponse>
 */
export const submitIndividualForm = async (formData: IndividualFormData): Promise<ApiResponse> => {
  try {
    // For now, simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate API response
    const response = {
      success: true,
      message: 'Individual request submitted successfully',
      data: {
        requestId: `IND-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        estimatedResponseTime: '24 hours'
      }
    };

    // Uncomment below when you have a real API endpoint
    /*
    const response = await fetch(`${API_BASE_URL}/individual-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
        requestType: 'individual'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
    */

    return response;

  } catch (error: any) {
    console.error('Error submitting individual form:', error);
    
    // Return user-friendly error message
    if (error.message.includes('Network')) {
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

/**
 * Get individual request status
 * @param requestId - The request ID to check status for
 * @returns Promise<ApiResponse>
 */
export const getIndividualRequestStatus = async (requestId: string): Promise<ApiResponse> => {
  try {
    // For now, simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate API response
    const response = {
      success: true,
      message: 'Request status retrieved successfully',
      data: {
        requestId,
        status: 'under_review',
        submittedAt: new Date(Date.now() - 86400000).toISOString(), // 24 hours ago
        estimatedResponseTime: '24 hours'
      }
    };

    // Uncomment below when you have a real API endpoint
    /*
    const response = await fetch(`${API_BASE_URL}/individual-requests/${requestId}/status`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
    */

    return response;

  } catch (error: any) {
    console.error('Error getting individual request status:', error);
    
    return {
      success: false,
      message: error.message || 'Failed to retrieve request status'
    };
  }
};

/**
 * Get available service types for individual requests
 * @returns Promise<ApiResponse>
 */
export const getIndividualServiceTypes = async (): Promise<ApiResponse> => {
  try {
    // For now, simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simulate API response
    const response = {
      success: true,
      message: 'Service types retrieved successfully',
      data: [
        { id: 'general_consultation', name: 'General Consultation', description: 'General health checkup and consultation' },
        { id: 'specialist_referral', name: 'Specialist Referral', description: 'Referral to medical specialists' },
        { id: 'emergency_support', name: 'Emergency Support', description: '24/7 emergency medical support' },
        { id: 'health_screening', name: 'Health Screening', description: 'Comprehensive health screening tests' },
        { id: 'mental_health', name: 'Mental Health Support', description: 'Mental health consultation and support' },
        { id: 'chronic_care', name: 'Chronic Care Management', description: 'Management of chronic conditions' },
        { id: 'preventive_care', name: 'Preventive Care', description: 'Preventive healthcare services' },
        { id: 'telemedicine', name: 'Telemedicine', description: 'Remote medical consultation' }
      ]
    };

    // Uncomment below when you have a real API endpoint
    /*
    const response = await fetch(`${API_BASE_URL}/individual-service-types`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
    */

    return response;

  } catch (error: any) {
    console.error('Error getting service types:', error);
    
    return {
      success: false,
      message: error.message || 'Failed to retrieve service types'
    };
  }
};

export type { ApiResponse, IndividualFormData };

