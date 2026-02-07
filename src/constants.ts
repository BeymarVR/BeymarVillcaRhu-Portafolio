
import {
  FaGithub, FaInstagram, FaLinkedin, FaTwitter,
  FaReact, FaVuejs, FaNodeJs, FaLaravel, FaPython, FaFigma, FaUnity,
  FaTiktok,
  FaFacebook
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiDotnet, SiPostgresql,
  SiVite, SiGodotengine
} from 'react-icons/si';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mi', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Landing Page para Kurama Gym',
    description: 'Landing Page (intermedio) para Kurama Gym, con animaciones y efectos visuales.',
    image: 'images/gym.png',
    tags: ['Next.js', 'Tailwind CSS', 'React'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/KumaraGym',
  },
  {
    title: 'Sistema de Calificaciones',
    description: 'Sistema Web para la calificacion de las diferentes areas administrativas de la Universidad Franz Tamayo.',
    image: 'images/CALIFI.png',
    tags: ['Laravel', 'Node.js', 'Vue.js', 'MySQL'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/Calificador_UNIFRANZ',
  },
  {
    title: 'Sitio Web de Noticias(ONT)',
    description: 'Pagina Web para la publicacion de Noticias, Estudios, Medios etc. Para el Observatorio Nacional del Trabajo(ONT).',
    image: 'images/ONT.png',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/SisOnt',
  },
  {
    title: 'Sistema de MicroPrestamos',
    description: 'Sistema Web para la gestion de micro prestamos para una microempresa.',
    image: 'images/presta.png',
    tags: ['Laravel', 'PostgreSQL', 'Node.js', 'Tailwind CSS', 'Python'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/PestamosSis',
  },
  {
    title: 'Aplicacion Móvil EveryThing',
    description: 'Aplicacion movil para la creacion de tiendas virtuales con gestion de ventas y productos.',
    image: 'images/every.jpeg',
    tags: ['Java', 'Firebase', 'XML'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarVR/appEveryThing/',
  },
  {
    title: 'Sitio Web para el Mercado Lanza (CASEWEB)',
    description: 'Propuesta de sitio web para el Mercado Lanza (CASEWEB). Para gestionar productos y ventas en linea de los diferentes negocios.',
    image: 'images/caeweb.png',
    tags: ['ASP.NET(framework)', 'Sql Server', 'Crystal Reports', 'Bootstrap'],
    demoUrl: '#',
    codeUrl: 'https://github.com/BeymarUNIFRANZ/ProyectoIntegrador-II-2024/tree/main/CASEWEB',
  },
  {
    title: 'Portafolio Web Personal',
    description: 'Mi portafolio web personal (intermedio) para mostrar mis proyectos, habilidades y experiencia como desarrollador.',
    image: 'images/porta.png',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    demoUrl: '',
    codeUrl: '#',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, icon: FaReact },
      { name: 'Next.js', level: 85, icon: SiNextdotjs },
      { name: 'Vue.js', level: 80, icon: FaVuejs },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
      { name: 'TypeScript', level: 87, icon: SiTypescript },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', level: 97, icon: FaLaravel },
      { name: 'Node.js', level: 80, icon: FaNodeJs },
      { name: 'Python', level: 83, icon: FaPython },
      { name: 'ASP.NET', level: 80, icon: SiDotnet },
      { name: 'PostgreSQL', level: 70, icon: SiPostgresql },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: FaGithub },
      { name: 'Vite', level: 80, icon: SiVite },
      { name: 'Figma', level: 68, icon: FaFigma },
      { name: 'Godot', level: 90, icon: SiGodotengine },
      { name: 'Unity', level: 78, icon: FaUnity },
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
    name: 'Instagram',
    url: 'https://www.instagram.com/beymarvrg/',
    icon: FaInstagram,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@beymarvrgamer',
    icon: FaTiktok,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/beymar.villcarhu/',
    icon: FaFacebook,
  },
];
