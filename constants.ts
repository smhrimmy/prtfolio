import { ResumeData } from './types';

export const INITIAL_DATA: ResumeData = {
  name: "Prajwal DL",
  role: "Full Stack Developer & Support Engineer",
  summary: "Ready to apply skills in web development, troubleshooting, and API development. Quick learner with strong problem-solving abilities, eager to contribute and grow in a dynamic role.",
  email: "pdlkpt@gmail.com",
  phone: "+918105561638",
  location: "Mangalore, KA",
  linkedin: "https://www.linkedin.com/in/prajwal-d-l-118198370/",
  portfolio: "https://pdl-portfolio.vercel.app/",
  skills: [
    { id: '1', name: 'React.js', category: 'Frontend' },
    { id: '2', name: 'Next.js', category: 'Frontend' },
    { id: '3', name: 'TypeScript', category: 'Frontend' },
    { id: '4', name: 'HTML/CSS', category: 'Frontend' },
    { id: '5', name: 'PHP', category: 'Backend' },
    { id: '6', name: 'MySQL', category: 'Backend' },
    { id: '7', name: 'API Development', category: 'Backend' },
    { id: '8', name: 'WordPress', category: 'Tools' },
    { id: '9', name: 'Debugging', category: 'Soft Skills' },
    { id: '10', name: 'Troubleshooting', category: 'Soft Skills' },
  ],
  experiences: [
    {
      id: 'e1',
      role: 'Freelancer',
      company: 'Self-Employed',
      period: '12/2024 - Present',
      location: 'Mangalore, KA',
      description: [
        'Developed real client solutions and experimental builds.',
        'Focused on innovation, UI/UX excellence, and full-stack engineering.',
        'Analyzed user feedback to gather input and identify areas required for improvement.'
      ]
    },
    {
      id: 'e2',
      role: 'Junior Support Engineer',
      company: 'Glowtouch Technologies',
      period: '08/2024 - 12/2024',
      location: 'Mangalore, KA',
      description: [
        'Delivered live chat support, resolving hosting, domain, and website issues.',
        'Troubleshot WordPress, PHP, MySQL, and server-related problems.',
        'Assisted with DNS setup, website migrations, and email configurations.',
        'Collaborated with teams to address technical challenges.'
      ]
    },
    {
      id: 'e3',
      role: 'Web Developer Intern',
      company: 'Vitvara Technologies',
      period: '01/2024 - 05/2024',
      location: 'Mangalore, KA',
      description: [
        'Developed responsive web applications using HTML, CSS, JavaScript, and React.js.',
        'Implemented scalable API functionalities and optimized code performance.',
        'Streamlined software performance through debugging and testing.'
      ]
    }
  ],
  projects: [
    {
      id: 'p1',
      title: 'NotiKeep AI Hub',
      description: 'AI-powered to-do list app with Notion-style UI and real-time stats.',
      techStack: ['React', 'PHP', 'MySQL', 'Chart.js'],
      demo: '#',
      link: '#'
    },
    {
      id: 'p2',
      title: 'Next.js AI Chatbot',
      description: 'Modern AI chatbot with NLP backend and conversational UI.',
      techStack: ['Next.js', 'React', 'TypeScript', 'AI'],
      demo: '#',
      link: '#'
    }
  ],
  education: [
    {
      id: 'edu1',
      degree: 'Diploma: Full Stack Development',
      institution: 'Karnataka (Govt) Polytechnic',
      year: '05/2024'
    },
    {
      id: 'edu2',
      degree: '10th High School',
      institution: 'Milagres High School',
      year: '05/2018'
    }
  ],
  certifications: [
    {
      id: 'c1',
      name: 'Project Management Course',
      issuer: 'CodeNinja',
      year: '2024'
    },
    {
      id: 'c2',
      name: 'Java 11 Essentials',
      issuer: 'Infosys Springboard',
      year: '2023'
    }
  ]
};
