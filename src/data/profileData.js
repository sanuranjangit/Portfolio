import avatarImg from '../assets/avatar.jpg';

export const profile = {
  name: 'Anuranjan Shrivastava',
  title: 'Senior Software Engineer',
  tagline: 'Building scalable & high performance web applications',
 locationLabel: 'Hyderabad, India · Open to Relocation & Remote',
  openToWork: true,
  avatarUrl: avatarImg,
  resumeUrl: '#resume',
  githubUrl: 'https://github.com/sanuranjangit',
  contactHref: 'mailto:hello@example.dev',
  bio: 'I design and ship reliable platforms where APIs, queues, and UX meet—favoring observable systems and crisp developer experience.',
  status: 'online',
  quickLinks: [
    { label: 'Activity', href: '#feed' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Recommendations', href: '#recommendations' },
  ],
};

export const recommendations = [
  {
    id: 'rec-1',
    author: 'Rushabh Dave',
    role: 'Fullstack Developer | MERN',
    company: 'Lucent Innovation',
    body:
      'Anuranjan is highly skilled when it comes to problem solving and code optimizations. He holds a deeper understanding of Web development and modern tools. Apart from core skills he is very friendly to approach and I have always found him being supportive. I highly recommend him for his resilience, attention to details, optimization skills and supportive nature.',
  },
];
