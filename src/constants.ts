
import type { Project, SkillCategory } from './types';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mi', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Sistema de Calificaciones',
    description: 'Sistema Web para la calificacion de las diferentes areas administrativas de la Universidad Franz Tamayo.',
    image: 'src/assets/images/CALIFI.png',
    tags: ['Laravel', 'Node.js', 'Vue.js', 'MySQL'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/Calificador_UNIFRANZ',
  },
  {
    title: 'Sitio Web de Noticias(ONT)',
    description: 'Pagina Web para la publicacion de Noticias, Estudios, Medios etc. Para el Observatorio Nacional del Trabajo(ONT).',
    image: 'src/assets/images/ONT.png',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/SisOnt',
  },
  {
    title: 'Sistema de MicroPrestamos',
    description: 'Sistema Web para la gestion de micro prestamos para una microempresa.',
    image: 'src/assets/images/presta.png',
    tags: ['Laravel', 'PostgreSQL', 'Node.js', 'Tailwind CSS', 'Python'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/PestamosSis',
  },
   {
    title: 'Aplicacion Móvil EveryThing',
    description: 'Aplicacion movil para la creacion de tiendas virtuales con gestion de ventas y productos.',
    image: 'src/assets/images/every.jpeg',
    tags: ['Java', 'Firebase', 'XML'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/appEveryThing/',
  },
{
    title: 'Sitio Web para el Mercado Lanza (CASEWEB)',
    description: 'Propuesta de sitio web para el Mercado Lanza (CASEWEB). Para gestionar productos y ventas en linea de los diferentes negocios.',
    image: 'src/assets/images/caeweb.png',
    tags: ['ASP.NET(framework)', 'Sql Server', 'Crystal Reports', 'Bootstrap'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarUNIFRANZ/ProyectoIntegrador-II-2024/tree/main/CASEWEB',
  },
  {
    title: 'Portafolio Web Personal',
    description: 'Mi portafolio web personal para mostrar mis proyectos, habilidades y experiencia como desarrollador.',
    image: 'src/assets/images/porta.png',
    tags: ['TypeScript', 'JavaScript', 'XML'],
    demoUrl: '',
    codeUrl: '#',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Vue.js', level: 80 },
      { name: 'Angular', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'TypeScript', level: 87 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', level: 97 },
      { name: 'Java', level: 74 },
      { name: 'Python', level: 83 },
      { name: 'ASP.NET(framework)', level: 80 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vite', level: 80 },
      { name: 'Figma', level: 68 },
      { name: 'Godot', level: 90 },
      { name: 'Unity', level: 78 },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/BeymarVR',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/villca-rhu-beymar-jesús-951641372/',
    icon: FaLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://www.instagram.com/beymarvrg/',
    icon: FaInstagram,
  },
];
