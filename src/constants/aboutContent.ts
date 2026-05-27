export const aboutMGoodText =
  'MGood is a pioneering healthcare platform dedicated to making quality medical services accessible and affordable for everyone. We connect patients with trusted doctors, offering seamless consultations and personalized care.';

export const aboutIndiaText =
  "India's healthcare landscape is vast and diverse. While it has made significant strides, challenges in accessibility and affordability remain. MGood aims to bridge these gaps by leveraging technology to bring healthcare to your fingertips.";

export const mentorsSubtitle =
  'We are humbled to have visionary leaders mentoring us with over 100+ years of combined experience in public service. Their leadership, administrative excellence, and guidance continue to inspire MGood in our mission to make healthcare accessible to millions.';

export interface Mentor {
  id: string;
  name: string;
  role: string;
  badge: string;
  description: string;
  imageKey: string;
}

export const mentors: Mentor[] = [
  {
    id: 'rajendra-agrawal',
    name: 'Sh. Rajendra Agrawal',
    role: 'Leadership Mentor',
    badge: '36 Years - UP Government',
    description: 'A visionary leader with extensive expertise in governance, infrastructure, and administration, contributing decades of strategic insight and mentorship to impactful initiatives.',
    imageKey: 'mgoodRajendra',
  },
  {
    id: 'bl-agrawal',
    name: 'Sh. BL Agrawal',
    role: 'Administrative Mentor',
    badge: 'ADM Across Multiple Districts',
    description: 'Ex - Joint Development Director & Additional District Magistrate, Hardoi. A distinguished public servant whose mentorship and guidance continue to strengthen MGood\'s mission and long-term vision.',
    imageKey: 'mgoodBlAgrawal',
  },
  {
    id: 'mahavir-singh-arya',
    name: 'Sh. Mahavir Singh Arya',
    role: 'Infrastructure & Governance Mentor',
    badge: 'Ex - Head Noida Authority & NHAI',
    description: 'Served as ADM in Bulandshahar, Agra, Saharanpur, Meerut & Moradabad. Bringing decades of administrative excellence and public service leadership to mentor MGood\'s growth journey.',
    imageKey: 'mgoodMahavir',
  },
];