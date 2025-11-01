import { useState } from 'react';
import { courses, categories } from '../data/cursos';
import {
  BookOpenIcon,
  ClockIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Cursos() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelText = (level) => {
    switch (level) {
      case 1: return 'Básico';
      case 2: return 'Intermedio';
      case 3: return 'Avanzado';
      default: return 'Básico';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-green-100 text-green-800';
      case 2: return 'bg-yellow-100 text-yellow-800';
      case 3: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      BookOpenIcon,
      ClockIcon,
      AcademicCapIcon,
      BuildingLibraryIcon,
      GlobeAltIcon,
      ArrowPathIcon,
      FlagIcon
    };
    return iconMap[iconName] || BookOpenIcon;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Cursos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Descubre nuestra amplia oferta académica diseñada para tu formación integral
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Buscador */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = getIconComponent(category.icon);
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">{courses.length}</p>
                <p className="text-gray-600">Total de Cursos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">{filteredCourses.length}</p>
                <p className="text-gray-600">Cursos Disponibles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">
                  {courses.reduce((total, course) => total + course.students, 0).toLocaleString()}
                </p>
                <p className="text-gray-600">Estudiantes Inscritos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de cursos */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {getLevelText(course.level)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      Duración: {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="w-4 h-4 mr-2" />
                      {course.students} estudiantes
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      {course.credits} créditos académicos
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpenIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No se encontraron cursos</h3>
            <p className="text-gray-500">Intenta con una búsqueda diferente o selecciona otra categoría</p>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">¿Necesitas más información?</h2>
            <p className="text-blue-700 mb-6">
              Nuestro equipo académico está disponible para orientarte en la selección de cursos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Contactar Asesor
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                Descargar Pensum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}