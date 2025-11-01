export const courses = [
  // Cursos Intersemestrales
  {
    id: 1,
    title: "Matemáticas Básicas",
    description: "Curso intensivo de nivelación en matemáticas para estudiantes de nuevo ingreso",
    category: "intersemestral",
    duration: "4 semanas",
    level: 1,
    students: 320,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    credits: 3
  },
  {
    id: 2,
    title: "Técnicas de Estudio",
    description: "Desarrolla habilidades efectivas de estudio y gestión del tiempo",
    category: "intersemestral",
    duration: "3 semanas",
    level: 1,
    students: 280,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    credits: 2
  },

  // Cursos de Posgrado
  {
    id: 3,
    title: "Metodología de la Investigación Avanzada",
    description: "Métodos cuantitativos y cualitativos para investigación de posgrado",
    category: "posgrado",
    duration: "16 semanas",
    level: 3,
    students: 45,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    credits: 4
  },
  {
    id: 4,
    title: "Gestión Estratégica Empresarial",
    description: "Estrategias avanzadas para la dirección y gestión de organizaciones",
    category: "posgrado",
    duration: "16 semanas",
    level: 3,
    students: 38,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    credits: 4
  },

  // Cursos Comunes
  {
    id: 5,
    title: "Historia de Colombia",
    description: "Contexto histórico y cultural del desarrollo colombiano",
    category: "comun",
    duration: "16 semanas",
    level: 1,
    students: 850,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
    credits: 3
  },
  {
    id: 6,
    title: "Constitución Política",
    description: "Fundamentos constitucionales y derechos ciudadanos",
    category: "comun",
    duration: "16 semanas",
    level: 1,
    students: 920,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    credits: 2
  },

  // Curso de Inglés
  {
    id: 7,
    title: "Inglés Básico I",
    description: "Fundamentos de gramática y vocabulario en inglés",
    category: "ingles",
    duration: "16 semanas",
    level: 1,
    students: 680,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    credits: 3
  },
  {
    id: 8,
    title: "Inglés Intermedio",
    description: "Desarrollo de habilidades conversacionales y escritura",
    category: "ingles",
    duration: "16 semanas",
    level: 2,
    students: 520,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    credits: 3
  },
  {
    id: 9,
    title: "Inglés Avanzado",
    description: "Perfeccionamiento del idioma para uso académico y profesional",
    category: "ingles",
    duration: "16 semanas",
    level: 3,
    students: 340,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop",
    credits: 3
  },

  // Cursos Transversales
  {
    id: 10,
    title: "Ética Profesional",
    description: "Principios éticos aplicados al ejercicio profesional",
    category: "transversal",
    duration: "16 semanas",
    level: 2,
    students: 720,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    credits: 2
  },
  {
    id: 11,
    title: "Emprendimiento e Innovación",
    description: "Desarrollo de competencias emprendedoras y pensamiento innovador",
    category: "transversal",
    duration: "16 semanas",
    level: 2,
    students: 640,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    credits: 3
  },

  // Cursos Nacionales
  {
    id: 12,
    title: "Cátedra de la Paz",
    description: "Construcción de cultura de paz y resolución de conflictos",
    category: "nacional",
    duration: "16 semanas",
    level: 1,
    students: 890,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    credits: 2
  },
  {
    id: 13,
    title: "Diversidad e Inclusión",
    description: "Promoción de la diversidad cultural y la inclusión social",
    category: "nacional",
    duration: "16 semanas",
    level: 1,
    students: 760,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    credits: 2
  }
];

export const categories = [
  { id: "all", name: "Todos los Cursos", icon: "BookOpenIcon" },
  { id: "intersemestral", name: "Cursos Intersemestrales", icon: "ClockIcon" },
  { id: "posgrado", name: "Cursos de Posgrado", icon: "AcademicCapIcon" },
  { id: "comun", name: "Cursos Comunes", icon: "BuildingLibraryIcon" },
  { id: "ingles", name: "Curso de Inglés", icon: "GlobeAltIcon" },
  { id: "transversal", name: "Cursos Transversales", icon: "ArrowPathIcon" },
  { id: "nacional", name: "Cursos Nacionales", icon: "FlagIcon" }
];