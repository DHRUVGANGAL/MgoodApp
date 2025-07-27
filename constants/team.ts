import { ImageSourcePropType } from 'react-native';

// Static image object - this forces Metro to bundle them properly
export const IMAGES = {
  team3: require('../assets/images/team3.jpg'),
  mgoodPuneet: require('../assets/images/mgood-puneet.jpg'),
  mgoodGarima: require('../assets/images/mgood-garima.jpg'),
  mgoodKrishna: require('../assets/images/mgood-krishna.jpg'),
  mgoodRajendra: require('../assets/images/mgood-rajendra.jpg'),
};

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  src: ImageSourcePropType;
}

export const testimonials: Testimonial[] = [
  {
    id: 'dr-aayushi',
    quote: 'We believe healthcare should be proactive, personal, and available — exactly when you need it.',
    name: 'Dr. Aayushi Agarwal',
    designation: 'MGood Doctor',
    src: IMAGES.team3,
  },
  {
    id: 'mr-puneet',
    quote: 'Driving strategic marketing initiatives, ensuring legal compliance, and cultivating high-impact sponsorships to elevate brand value and integrity.',
    name: 'Mr. Puneet Singhal',
    designation: 'Head - Marketing, Legal and Sponsorship',
    src: IMAGES.mgoodPuneet,
  },
  {
    id: 'mrs-garima',
    quote: 'Driving operational excellence through streamlined processes and efficient administration to ensure seamless business functionality.',
    name: 'Mrs. Garima Gangal',
    designation: 'Head - Admin & Process',
    src: IMAGES.mgoodGarima,
  },
  {
    id: 'mr-krishna',
    quote: 'Designing, managing, and securing robust IT infrastructure systems that power business continuity and digital transformation.',
    name: 'Mr. Krishna Agrawal',
    designation: 'IT Infrastructure Expert',
    src: IMAGES.mgoodKrishna,
  },
];
