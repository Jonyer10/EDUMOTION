import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AcademicCapIcon,
  ClockIcon,
  ChartBarIcon,
  BookOpenIcon,
  PlayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function Dashboard(){
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('cursos');

  // Datos simulados de cursos inscritos del usuario
  const cursosInscritos = [
    {
      id: 1,
      titulo: "Patrones y Estándares de Software",
      categoria: "Desarrollo de Software",
      progreso: 75,
      estado: "en_progreso",
      fechaInscripcion: "2024-09-15",
      contenido: [
        { modulo: "Introducción a Patrones", completado: true, duracion: "2h 30min" },
        { modulo: "Patrones Creacionales", completado: true, duracion: "3h 15min" },
        { modulo: "Patrones Estructurales", completado: true, duracion: "2h 45min" },
        { modulo: "Patrones de Comportamiento", completado: false, duracion: "3h 20min" },
        { modulo: "Estándares de Codificación", completado: false, duracion: "2h 10min" },
        { modulo: "Proyecto Final", completado: false, duracion: "4h 00min" }
      ],
      instructor: "Dr. Carlos Mendoza",
      imagen: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      titulo: "Metodología de la Investigación",
      categoria: "Investigación Académica",
      progreso: 45,
      estado: "en_progreso",
      fechaInscripcion: "2024-10-01",
      contenido: [
        { modulo: "Fundamentos de Investigación", completado: true, duracion: "2h 00min" },
        { modulo: "Métodos Cuantitativos", completado: true, duracion: "3h 30min" },
        { modulo: "Métodos Cualitativos", completado: false, duracion: "3h 15min" },
        { modulo: "Diseño de Investigación", completado: false, duracion: "2h 45min" },
        { modulo: "Análisis de Datos", completado: false, duracion: "4h 20min" },
        { modulo: "Redacción Científica", completado: false, duracion: "2h 30min" }
      ],
      instructor: "Dra. Ana García",
      imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      titulo: "Bases de Datos Avanzadas",
      categoria: "Tecnología",
      progreso: 90,
      estado: "casi_completado",
      fechaInscripcion: "2024-08-20",
      contenido: [
        { modulo: "Diseño de Bases de Datos", completado: true, duracion: "2h 15min" },
        { modulo: "SQL Avanzado", completado: true, duracion: "3h 45min" },
        { modulo: "Optimización de Consultas", completado: true, duracion: "2h 30min" },
        { modulo: "Bases de Datos NoSQL", completado: true, duracion: "3h 00min" },
        { modulo: "Seguridad en BD", completado: true, duracion: "2h 20min" },
        { modulo: "Proyecto Integrador", completado: false, duracion: "3h 30min" }
      ],
      instructor: "Ing. Roberto Silva",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  useEffect(()=>{
    const raw = localStorage.getItem('edumotion_user');
    if(!raw){
      navigate('/login');
      return;
    }
    setUser(JSON.parse(raw));
  },[navigate]);

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'completado': return 'bg-green-100 text-green-800';
      case 'casi_completado': return 'bg-yellow-100 text-yellow-800';
      case 'en_progreso': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoTexto = (estado) => {
    switch(estado) {
      case 'completado': return 'Completado';
      case 'casi_completado': return 'Por Finalizar';
      case 'en_progreso': return 'En Progreso';
      default: return 'No Iniciado';
    }
  };

  if(!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Bienvenida */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Usuario</h1>
          <p className="text-gray-600">Bienvenido, {user.email}</p>
        </div>
        {/* Estadísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <AcademicCapIcon className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{cursosInscritos.length}</p>
                <p className="text-gray-600 text-sm">Cursos Inscritos</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <ChartBarIcon className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(cursosInscritos.reduce((acc, curso) => acc + curso.progreso, 0) / cursosInscritos.length)}%
                </p>
                <p className="text-gray-600 text-sm">Progreso Promedio</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <ClockIcon className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">42h</p>
                <p className="text-gray-600 text-sm">Horas Estudiadas</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <CheckCircleIcon className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {cursosInscritos.filter(curso => curso.estado === 'completado').length}
                </p>
                <p className="text-gray-600 text-sm">Cursos Completados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación de Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('cursos')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'cursos'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Mis Cursos
              </button>
              <button
                onClick={() => setActiveTab('progreso')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'progreso'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Mi Progreso
              </button>
            </nav>
          </div>

          {/* Contenido de Tabs */}
          <div className="p-6">
            {activeTab === 'cursos' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cursos Inscritos</h2>
                {cursosInscritos.map((curso) => (
                  <div key={curso.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={curso.imagen}
                            alt={curso.titulo}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{curso.titulo}</h3>
                            <p className="text-gray-600">{curso.categoria}</p>
                            <p className="text-sm text-gray-500">Instructor: {curso.instructor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEstadoColor(curso.estado)}`}>
                            {getEstadoTexto(curso.estado)}
                          </span>
                          <div className="mt-2">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${curso.progreso}%` }}
                              ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{curso.progreso}% completado</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Contenido del Curso</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {curso.contenido.map((modulo, index) => (
                          <div
                            key={index}
                            className={`flex items-center space-x-3 p-3 rounded-lg ${
                              modulo.completado ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                            }`}
                          >
                            {modulo.completado ? (
                              <CheckCircleIcon className="w-5 h-5 text-green-600" />
                            ) : (
                              <PlayIcon className="w-5 h-5 text-gray-400" />
                            )}
                            <div className="flex-1">
                              <p className={`font-medium ${modulo.completado ? 'text-green-900' : 'text-gray-900'}`}>
                                {modulo.modulo}
                              </p>
                              <p className="text-sm text-gray-600">{modulo.duracion}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Continuar Curso
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'progreso' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mi Progreso Académico</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {cursosInscritos.map((curso) => (
                    <div key={curso.id} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <BookOpenIcon className="w-6 h-6 text-blue-600" />
                        <h3 className="font-semibold text-gray-900">{curso.titulo}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progreso General</span>
                          <span className="font-medium">{curso.progreso}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${curso.progreso}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Módulos Completados</span>
                          <span>{curso.contenido.filter(m => m.completado).length}/{curso.contenido.length}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Fecha de Inscripción</span>
                          <span>{new Date(curso.fechaInscripcion).toLocaleDateString('es-ES')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Alertas y Recomendaciones */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ExclamationTriangleIcon className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900">Recomendaciones</h3>
              <p className="text-blue-800 mt-1">
                ¡Estás cerca de completar "Bases de Datos Avanzadas"! Solo te falta el proyecto integrador.
              </p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Continuar Curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
