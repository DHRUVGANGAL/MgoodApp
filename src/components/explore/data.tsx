import React from 'react';
import { 
  Building, 
  Users, 
  Shield, 
  Heart, 
  CheckCircle, 
  Star 
} from 'lucide-react-native';

export const heroStats = [
  { number: '20+', label: 'Companies Trust Us', color: '#2563eb' },
  { number: '1200+', label: 'Employees Covered', color: '#16a34a' },
  { number: '97%', label: 'Satisfaction Rate', color: '#9333ea' }
];

export const reviews = [
  { name: "Balaji Publication", body: "Our employees are happy using MGood services...", img: "https://avatar.vercel.sh/jill", id: 1 },
  { name: "NMV India Private Limited", body: "MGood has provided good health checkups...", img: "https://avatar.vercel.sh/jill", id: 2 },
  { name: "Pyramid Engineering", body: "MGood is offering our employees a unique plan...", img: "https://avatar.vercel.sh/john", id: 3 },
  { name: "Pyramid Buildtech", body: "We have been offered full access of the MGood platform...", img: "https://avatar.vercel.sh/jane", id: 4 },
  { name: "Observe Now", body: "Very convenient and user-friendly. Saves time and connects you with real doctors fast!", img: "https://avatar.vercel.sh/jane", id: 5 }
];

export const features = [
  {
    icon: <Users size={32} color="#2563eb" />,
    title: "Employee Wellness Programs",
    description: "Comprehensive health screenings, preventive care, and wellness initiatives designed to keep your workforce healthy and productive."
  },
  {
    icon: <Shield size={32} color="#16a34a" />,
    title: "Mediclaim Assessment Report",
    description: "Through a detailed analysis of your claims MIS, we deliver a strategic assessment report designed to support more informed and advantageous negotiations with insurers"
  },
  {
    icon: <Heart size={32} color="#dc2626" />,
    title: "24/7 Assistance & Support",
    description: "We are available 24/7 to accept service requests, with a guaranteed response time of within 30 minutes."
  },
  {
    icon: <Building size={32} color="#9333ea" />,
    title: "Elderly Care Program ",
    description: "Your parents are now under MGood's care. Enroll them in our elderly care program and provide them with a dedicated personal health buddy for continuous support and empowerment."
  },
  {
    icon: <CheckCircle size={32} color="#0d9488" />,
    title: "Serving Over 10,000 Pincodes",
    description: "With our extensive pan-India network of service providers, we enable users to access our services nationwide. Simply send us a request, and we will ensure your needs are promptly addressed."
  },
  {
    icon: <Star size={32} color="#ca8a04" />,
    title: "Expert Care, Exceptional Medicines",
    description: "Upon specific request, we facilitate access to super specialist doctors and procure rare medicines essential for specialized treatments."
  }
];
