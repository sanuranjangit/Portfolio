import avatarImg from '../assets/avatar.jpeg';

export const profile = {
  name: 'Anuranjan Shrivastava',
  title: 'Senior Software Engineer',
  tagline: 'Building scalable & high performance web applications',
 locationLabel: 'Hyderabad, India · Open to Relocation & Remote',
  openToWork: true,
  avatarUrl: avatarImg,
  resumeUrl: `${process.env.PUBLIC_URL}/CV_AnuranjanShrivastava.pdf`,
  resumeFileName: 'CV_AnuranjanShrivastava.pdf',
  githubUrl: 'https://github.com/sanuranjangit',
  email: 's.anuranjan.shrivastava@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/anuranjan-shrivastava/',
  contactHref: 'mailto:s.anuranjan.shrivastava@gmail.com',
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
    id: 'rec-2',
    author: 'Akhilesh Patidar',
    role: 'Engineer-2',
    company: 'Apexon',
    url : "https://www.linkedin.com/in/akhilesh-patidar-8130441b3/",
    body:
      `I worked with Anuranjan on our frontend team and found him to be a highly reliable and skilled developer. He has strong expertise in React and consistently delivered clean, scalable, and performant solutions.

He takes ownership of his work, handles debugging efficiently across environments, and contributes well to team practices like version control and CI/CD. He also mentored junior developers, which added great value to the team.

A dependable engineer and a great team player—I’d highly recommend him.
`,
  },
  {
    id: 'rec-3',
    author: 'Sunil Prajapati',
    role: 'Product Designer / UX Designer',
    company: 'Big Air Lab',
    url : "https://www.linkedin.com/in/sunilkumar-prajapati281325/",
    body:
      `Anuranjan is a frontend developer who truly understands user experience. While working on UX-focused projects, he translated design ideas into clean, intuitive, and reusable components.

He pays close attention to usability and detail, and actively improves interfaces based on feedback and testing. His collaboration with design teams made a noticeable impact on overall product quality. 

A great blend of technical skill and UX thinking—I’d gladly work with him again.
`,
  },
  {
    id: 'rec-1',
    author: 'Rushabh Dave',
    role: 'Fullstack Developer | MERN',
    company: 'Bacancy Technology',
    url : "https://www.linkedin.com/in/rushabh-dave/",
    body:
      'Anuranjan is highly skilled when it comes to problem solving and code optimizations. He holds a deeper understanding of Web development and modern tools. Apart from core skills he is very friendly to approach and I have always found him being supportive. I highly recommend him for his resilience, attention to details, optimization skills and supportive nature.',
  },
];
