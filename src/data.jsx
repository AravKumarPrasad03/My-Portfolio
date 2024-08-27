import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Arav Kumar',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Prasad',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Soon....',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91-8360799055',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'arav3737@gmai.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: '@AravKumarPrasad',
  },

  {
    id: 10,   
    title: 'Langages : ',
    description: 'English , Hindi , Punjabi',
  },
];

export const stats = [
  {
    id: 1,
    no: '06+',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '12+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '05+',
    title: 'HackaThon <br /> Winner ',
  },

  {
    id: 4,
    no: '02+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'July 2023 - Oct 2023',
    title: 'Blockchain Intern <span> Metacrafters Inc. </span>',
    desc: 'Responsible for assisting in the design, implementation, and testing of decentralized applications dApps and smart contracts . Tech Used:- Motoko | Git, Github | React | PostgresSQL',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Oct 2023 - Nov 2023',
    title: 'Front-End Developer <span> Bharat Intern </span>',
    desc: 'Designed and optimized responsive and intuitive UI components using React, CSS, and JavaScript Tech Used:- HTML | CSS | JavaScript | MySQL | React | Nodejs.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-2025',
    title: 'Bachelor of Engineering <span> Chandigarh University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2021',
    title: 'XIIth <span> Kendriya Vidyalaya Chandigarh </span>',
    desc: 'Subject: English | Computer Science | Physics | Chemistry | Mathematics',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2019',
    title: 'Xth <span> Kendriya Vidyalaya Chandigarh </span>',
    desc: 'Subjects: English | Hindi | Mathematics | Social Studies | Science',
  },
];

export const skills = [
  {
    id: 1,
    title: 'React',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Node & Express',
    percentage: '90',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 4,
    title: 'Database',
    percentage: '90',
  },

  {
    id: 5,
    title: 'Data Structures',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Git & GitHub',
    percentage: '90',
  },

  {
    id: 7,
    title: 'JavaScript',
    percentage: '85',
  },

  {
    id: 8,
    title: 'C++',
    percentage: '95',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Google Gemini',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Coming Soon....',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Coming Soon....',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Coming Soon....',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Coming Soon....',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Coming Soon..',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Coming Soon..',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Coming Soon..',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Coming Soon..',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Coming Soon..',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Coming Soon..',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Coming Soon..',
    details: [
      {
        title: 'Project : ',
        desc: 'Coming Soon..',
      },
      {
        title: 'Client : ',
        desc: 'Coming Soon..',
      },
      {
        title: 'Language : ',
        desc: 'Coming Soon..',
      },
      {
        title: 'Preview : ',
        desc: 'Coming Soon..', 
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Coming Soon..',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Coming Soon..',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Coming Soon..',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
