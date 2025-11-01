export type GalleryItem = string | { type: 'image' | 'video'; url?: string; videoId?: string };

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  services: string[];
  videoId: string | null;
  gallery: GalleryItem[];
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  website?: string;
};

export const projects: Record<string, Project> = {
  'central-vip': {
    id: 1,
    title: 'CENTRAL VIP',
    category: 'Automotive & Cars',
    description: 'Complete video production with engaging Reels and targeted ads for luxury car rental services.',
    year: '2024',
    services: ['Video Production', 'Social Media Reels', 'Digital Ads', 'Brand Content'],
    videoId: 'a432aa81-5f88-4af7-8578-6b012a44e64b',
    gallery: [
      { type: 'image', url: '/images (1).jpg' },
      { type: 'video', videoId: 'a432aa81-5f88-4af7-8578-6b012a44e64b' },
    ],
    challenge: 'Creating engaging content for luxury car rentals that showcases exclusivity and appeal.',
    solution: 'Produced high-quality video reels and digital advertisements that highlight the premium nature of the fleet.',
    impact: 'Increased engagement and bookings through visually striking content.',
    technologies: ['Bunny CDN', 'HLS Streaming', 'Mobile Optimization'],
  },
  'holmes-place': {
    id: 2,
    title: 'HOLMES PLACE',
    category: 'Fitness & Wellness / Personal Brand',
    description: 'Complete video production with engaging Reels and targeted ads for luxury car rental services.',
    year: '2024',
    services: ['Personal Branding', 'Reels Content', 'Social Media', 'Content Strategy'],
    videoId: '089f6cd5-ba00-4b0b-8cd4-c113446061c5',
    gallery: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80',
    ],
    challenge: 'Building a strong personal brand in the fitness industry.',
    solution: 'Created authentic, engaging reels that showcase expertise and personality.',
    impact: 'Significant growth in followers and client inquiries.',
    technologies: ['Video Editing', 'Motion Graphics', 'Content Planning'],
  },
  'audi-frankfurt': {
    id: 3,
    title: 'AUDI FRANKFURT',
    category: 'Automotive & Cars',
    description: 'Complete video production with engaging Reels and targeted ads for luxury automotive experiences.',
    year: '2024',
    services: ['Video Production', 'Brand Content', 'Digital Marketing', 'Creative Direction'],
    videoId: '2a2f0eec-a080-4771-9f31-76a1f7448c1a',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    ],
    challenge: 'Showcasing premium automotive experiences through visual storytelling.',
    solution: 'Produced cinematic video content that captures the essence of luxury and performance.',
    impact: 'Enhanced brand perception and increased brand awareness.',
    technologies: ['Cinematic Videography', 'Post-Production', 'Color Grading'],
  },
  'king-barbershop': {
    id: 4,
    title: 'KING BARBERSHOP',
    category: 'Web Development & SEO',
    description: 'Complete website development and SEO optimization for a premium barbershop franchise.',
    year: '2024',
    website: 'https://www.kingsbarbershop.gr/',
    services: ['Web Development', 'SEO Optimization', 'Brand Identity', 'Responsive Design'],
    videoId: null,
    gallery: [
      { type: 'image', url: '/8ab1f84b-2d00-49d8-b59d-7340c4b75f78.png' },
      { type: 'video', videoId: '232f5d5f-a1e5-4c26-a6d3-5b1b49897b38' },
      { type: 'video', videoId: 'eb7ff409-55ce-4235-8bcb-e682e0b7ac9b' },
    ],
    challenge: 'Building a premium, multi-location barbershop website with franchise opportunities.',
    solution: 'Developed a sleek, responsive website with SEO optimization and integrated booking system.',
    impact: 'Increased online presence, bookings, and franchise inquiries through optimized web presence.',
    technologies: ['Next.js', 'SEO', 'Responsive Design', 'Booking Integration'],
  },
  'barbers-of-the-north': {
    id: 5,
    title: 'BARBERS OF THE NORTH',
    category: 'Website & Booking System',
    description: 'Premium barbershop website with modern design, booking system, and SEO optimization for a sophisticated grooming experience.',
    year: '2024',
    website: 'https://www.barbersofthenorth.com/',
    services: ['Website Design', 'Booking System', 'SEO Setup', 'Brand Identity', 'Responsive Design'],
    videoId: null,
    gallery: [
      { type: 'image', url: '/f8d56692-5846-4651-83a2-566f6648502f.png' },
      { type: 'image', url: '/64406659-411c-4673-9901-7d99103c4796.png' },
      { type: 'image', url: '/706823f4-f5f9-46db-b7bc-c795bc37666d.png' },
      { type: 'image', url: '/8d854dcd-a1e8-4127-a9f4-739f49915caf.png' },
    ],
    challenge: 'Creating a premium digital presence that reflects the sophisticated barbershop experience with classic barber chairs, modern lighting, and professional grooming services.',
    solution: 'Developed a sleek website featuring the barbershop\'s modern industrial aesthetic with integrated booking system and SEO optimization.',
    impact: 'Enhanced online presence with streamlined booking process, increased client appointments, and professional brand representation.',
    technologies: ['Next.js', 'Booking API', 'SEO Optimization', 'Responsive Design', 'Modern UI/UX'],
  },
  'izipen': {
    id: 6,
    title: 'IZIPEN',
    category: 'Short Form Content',
    description: 'Creative short form content production for brand engagement and social media presence.',
    year: '2024',
    services: ['Short Form Content'],
    videoId: 'f128fa78-0aa4-47a4-bdc7-31c204ed4bd5',
    gallery: [
      { type: 'image', url: '/logo-izipen.jpg' },
      { type: 'video', videoId: 'f128fa78-0aa4-47a4-bdc7-31c204ed4bd5' },
    ],
    challenge: 'Creating engaging short form content that captures brand essence and drives engagement.',
    solution: 'Produced high-quality short form videos optimized for social media platforms.',
    impact: 'Increased brand visibility and engagement through creative short form content.',
    technologies: ['Video Production', 'Short Form Content', 'Social Media Optimization'],
  },
  'gojack': {
    id: 7,
    title: 'GOJACK',
    category: 'Short Form Content & Video Production',
    description: 'Short form video content and video production for brand awareness and engagement.',
    year: '2024',
    services: ['Short Form Content', 'Video Production', 'Brand Awareness'],
    videoId: 'be9033d6-1b9a-4873-a895-65838d669fe6',
    gallery: [
      { type: 'image', url: '/logo-gojack.png' },
      { type: 'video', videoId: 'be9033d6-1b9a-4873-a895-65838d669fe6' },
      { type: 'video', videoId: 'ba6c9c2a-9b8f-493e-bc19-7f61ccd46d65' },
    ],
    challenge: 'Creating engaging short form content to build brand awareness and reach new audiences.',
    solution: 'Produced high-quality short form videos and video content optimized for social media platforms.',
    impact: 'Increased brand visibility and engagement through creative video production and content strategy.',
    technologies: ['Video Production', 'Short Form Content', 'Social Media Optimization', 'Brand Strategy'],
  },
  'fotis-personal-brand': {
    id: 8,
    title: 'FOTIS PERSONAL BRAND',
    category: 'Personal Branding',
    description: 'Personal brand development with reels for finance and education content.',
    year: '2024',
    services: ['Personal Branding', 'Reels Content', 'Video Production', 'Social Media Strategy'],
    videoId: 'e01947d3-7850-426c-a59f-6d93fae33443',
    gallery: [
      { type: 'image', url: '/logo.png' },
      { type: 'image', url: '/fotis-gallery-1.png' },
      { type: 'video', videoId: 'e01947d3-7850-426c-a59f-6d93fae33443' },
    ],
    challenge: 'Establishing authority and credibility in the finance education space.',
    solution: 'Developed engaging educational reels that simplify complex financial concepts.',
    impact: 'Built a loyal following and became a trusted educator in trading and finance.',
    technologies: ['Video Editing', 'Motion Graphics', 'Content Planning', 'Social Media'],
  },
  'by-phao': {
    id: 9,
    title: 'BY PHAO',
    category: 'Restaurant & Hospitality',
    description: 'Full website and brand identity for a chef offering private dining experiences.',
    year: '2024',
    services: ['Full Website Design', 'Brand Identity', 'Photography Integration', 'Booking System'],
    videoId: null,
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80',
    ],
    challenge: 'Showcasing unique private dining experiences in a compelling, appetizing way.',
    solution: 'Created an elegant brand and website with stunning food photography and easy booking.',
    impact: 'Established a premium brand image and increased bookings significantly.',
    technologies: ['Web Design', 'Brand Identity', 'Photography', 'UX/UI Design'],
  },
  '414-clothing': {
    id: 10,
    title: '414 CLOTHING - DOMINATION INC',
    category: 'eCommerce & Fashion',
    description: '3D Shopify eCommerce setup for DOMINATION INC band merchandise and streetwear brand.',
    year: '2024',
    services: ['3D Shopify'],
    videoId: null,
    gallery: [
      { type: 'image', url: '/logo-domination-inc.jpg' },
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80',
    ],
    challenge: 'Creating an immersive 3D shopping experience for DOMINATION INC band merchandise and streetwear.',
    solution: 'Built an innovative 3D Shopify store with product visualization and interactive features for the band\'s clothing line.',
    impact: 'Increased conversion rates and average order value through engaging 3D shopping experiences.',
    technologies: ['Shopify Plus', '3D Technology', 'Interactive Design', 'E-commerce'],
  },
  'tsiouplis-rentals': {
    id: 11,
    title: 'TSIOUPLIS RENTALS',
    category: 'Website Creation & Social Media Marketing',
    description: 'Complete website creation and social media marketing for car sales and rentals.',
    year: '2024',
    website: 'https://www.tsiouplis-rentals.gr/',
    services: ['Webpage Creation', 'SMM'],
    videoId: null,
    gallery: [
      { type: 'image', url: '/tsiouplis-screenshot.png' },
      'https://images.unsplash.com/photo-1492144534655-ae79c7c9eb30?w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    ],
    challenge: 'Creating a professional online presence for car sales and rentals with engaging social media content.',
    solution: 'Developed a modern, user-friendly website and implemented comprehensive social media marketing strategy.',
    impact: 'Increased online visibility, inquiries, and bookings through professional website and strategic SMM campaigns.',
    technologies: ['Web Development', 'Social Media Marketing', 'Content Strategy', 'SEO'],
  },
  'green-family': {
    id: 12,
    title: 'Το Ελληνικόν - Green Family',
    category: 'Short Form Content & Google Ads',
    description: 'Short form content and Google Ads campaigns for brand awareness and engagement.',
    year: '2024',
    services: ['Short Form Content', 'Google Ads', 'Brand Awareness'],
    videoId: 'a43ba930-b16f-4f74-8da1-1d452e240cd4',
    gallery: [
      { type: 'image', url: '/logo-green-family.jpg' },
      { type: 'video', videoId: 'a43ba930-b16f-4f74-8da1-1d452e240cd4' },
    ],
    challenge: 'Building brand awareness through short form content and targeted Google Ads campaigns.',
    solution: 'Created engaging short form video content optimized for Google Ads and social media platforms.',
    impact: 'Increased brand visibility and engagement through strategic content and advertising.',
    technologies: ['Short Form Content', 'Google Ads', 'Video Production', 'Social Media Optimization'],
  },
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
