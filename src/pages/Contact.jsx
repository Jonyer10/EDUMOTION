import { useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  AcademicCapIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    tipoConsulta: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío (aquí conectarías con tu backend)
    setTimeout(() => {
      setSubmitMessage('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        tipoConsulta: 'general'
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Correo Electrónico",
      info: "info@edumotion.edu.co",
      description: "Respuesta en 24 horas"
    },
    {
      icon: PhoneIcon,
      title: "Teléfono",
      info: "+57 (1) 234-5678",
      description: "Lun - Vie: 8:00 AM - 6:00 PM"
    },
    {
      icon: MapPinIcon,
      title: "Dirección",
      info: "Calle 72 #10-34, Bogotá",
      description: "Edificio Edumotion, Piso 5"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Chat en Vivo",
      info: "Disponible 24/7",
      description: "Asistencia inmediata"
    }
  ];

  const departments = [
    {
      icon: AcademicCapIcon,
      title: "Admisiones",
      email: "admisiones@edumotion.edu.co",
      description: "Información sobre programas académicos y proceso de inscripción"
    },
    {
      icon: UserIcon,
      title: "Atención al Estudiante",
      email: "estudiantes@edumotion.edu.co",
      description: "Soporte académico y servicios estudiantiles"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Administración",
      email: "administracion@edumotion.edu.co",
      description: "Asuntos administrativos y financieros"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos lo antes posible
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Envía tu Mensaje</h2>
            
            {submitMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Consulta
                  </label>
                  <select
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="general">Consulta General</option>
                    <option value="admisiones">Admisiones</option>
                    <option value="academico">Asunto Académico</option>
                    <option value="tecnico">Soporte Técnico</option>
                    <option value="financiero">Asunto Financiero</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Breve descripción del asunto"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe tu consulta o mensaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Datos de Contacto */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-blue-600 font-medium">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departamentos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Departamentos Específicos</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <dept.icon className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">{dept.title}</h4>
                    </div>
                    <p className="text-blue-600 text-sm font-medium mb-1">{dept.email}</p>
                    <p className="text-gray-600 text-sm">{dept.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ClockIcon className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Horarios de Atención</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Chat en línea:</strong> Disponible 24/7 para consultas urgentes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa y ubicación */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-gray-600 mb-6">
              Visítanos en nuestra sede principal en el corazón de Bogotá, fácil acceso en transporte público.
            </p>
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            {/* Aquí irías el mapa real con Google Maps o similar */}
            <div className="text-center text-gray-600">
              <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
              <p className="font-medium">Calle 72 #10-34, Bogotá</p>
              <p className="text-sm">Edificio Edumotion, Piso 5</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ver en Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* FAQ rápido */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Cuándo recibo respuesta a mi consulta?</h3>
              <p className="text-gray-600 text-sm">Respondemos todas las consultas en un máximo de 24 horas hábiles.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Puedo agendar una cita presencial?</h3>
              <p className="text-gray-600 text-sm">Sí, puedes solicitar una cita presencial a través del formulario o por teléfono.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Ofrecen asesoría académica gratuita?</h3>
              <p className="text-gray-600 text-sm">Sí, ofrecemos asesoría académica gratuita para prospectivos estudiantes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Cómo puedo rastrear mi solicitud?</h3>
              <p className="text-gray-600 text-sm">Te enviaremos un número de seguimiento por email después de enviar tu consulta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
