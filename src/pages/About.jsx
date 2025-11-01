import {
  AcademicCapIcon,
  UsersIcon,
  GlobeAltIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/outline';

// Importar imágenes locales
import teamImage1 from '../img/1.png';

export default function About() {
  const stats = [
    { label: "Estudiantes Activos", value: "15,000+", icon: UsersIcon },
    { label: "Cursos Disponibles", value: "200+", icon: AcademicCapIcon },
    { label: "Países", value: "25+", icon: GlobeAltIcon },
    { label: "Años de Experiencia", value: "10+", icon: TrophyIcon }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovación",
      description: "Constantemente actualizamos nuestros contenidos con las últimas tendencias y tecnologías del mercado educativo."
    },
    {
      icon: HeartIcon,
      title: "Pasión por Educar",
      description: "Creemos que la educación transforma vidas y sociedades. Cada curso está diseñado con dedicación y amor por la enseñanza."
    },
    {
      icon: ShieldCheckIcon,
      title: "Calidad Garantizada",
      description: "Nuestros instructores son expertos certificados y nuestros contenidos pasan por rigurosos controles de calidad."
    },
    {
      icon: StarIcon,
      title: "Excelencia Académica",
      description: "Mantenemos los más altos estándares académicos, con certificaciones reconocidas internacionalmente."
    }
  ];

  const team = [
    {
      name: "Dr. Alexis Avila",
      position: "Director Académico",
      image: teamImage1,
      description: "Ph.D. en Educación, especialista en metodologías innovadoras de enseñanza virtual."
    },
    {
      name: "Ing. Andres Ariza",
      position: "Director de Tecnología",
      image: teamImage1,
      description: "Experto en plataformas educativas digitales con más de 15 años de experiencia."
    },
    {
      name: "Lic. Kaled Benjumea",
      position: "Coordinador de Contenidos",
      image: teamImage1,
      description: "Especialista en diseño curricular y desarrollo de contenidos educativos digitales."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Edumotion</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Transformando la educación superior a través de la innovación, la tecnología y el compromiso con la excelencia académica
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 mb-6">
                Proporcionar educación superior de calidad, accesible e innovadora que prepare a los estudiantes 
                para los desafíos del siglo XXI, fomentando el pensamiento crítico, la creatividad y el liderazgo responsable.
              </p>
              <p className="text-lg text-gray-700">
                Nos comprometemos a ser un puente entre el conocimiento académico y las necesidades del mundo laboral, 
                ofreciendo programas educativos que combinan teoría sólida con práctica aplicada.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Nuestra Visión</h3>
              <p className="text-lg text-gray-700">
                Ser reconocidos como la institución educativa líder en Colombia por nuestra excelencia académica, 
                innovación tecnológica y compromiso social, formando profesionales íntegros que contribuyan al 
                desarrollo sostenible de la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nuestro Impacto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Nuestra Historia</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="Fundación de Edumotion" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">2015 - Nuestros Inicios</h3>
                  <p className="text-gray-700">
                    Edumotion nació con la visión de democratizar la educación superior en Colombia. 
                    Comenzamos con un pequeño equipo de educadores apasionados y la firme convicción 
                    de que la tecnología podía transformar la manera de aprender y enseñar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" 
                    alt="Crecimiento de Edumotion" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">2018 - Expansión Nacional</h3>
                  <p className="text-gray-700">
                    Después de tres años de crecimiento constante, expandimos nuestra oferta académica 
                    a nivel nacional, incorporando nuevas modalidades de estudio y estableciendo 
                    alianzas estratégicas con instituciones reconocidas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop" 
                    alt="Innovación en Edumotion" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">2025 - Líderes en Innovación</h3>
                  <p className="text-gray-700">
                    Hoy, somos reconocidos como líderes en educación virtual en Colombia, 
                    con más de 15,000 estudiantes activos y una oferta académica que abarca 
                    múltiples áreas del conocimiento, siempre a la vanguardia de la innovación educativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Nuestro Equipo Directivo</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Únete a Nuestra Comunidad</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Descubre cómo Edumotion puede transformar tu futuro profesional con nuestros programas innovadores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Explorar Cursos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Contactar Admisiones
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
