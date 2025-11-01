
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  UserIcon, 
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = () => {
            const raw = localStorage.getItem('edumotion_user');
            if (raw) {
                setUser(JSON.parse(raw));
            } else {
                setUser(null);
            }
        };

        // Verificar al cargar el componente
        checkUser();
        
        // Escuchar cambios en localStorage
        window.addEventListener('storage', checkUser);
        
        // También escuchar cambios manuales (para el mismo tab)
        const interval = setInterval(checkUser, 1000);
        
        return () => {
            window.removeEventListener('storage', checkUser);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('edumotion_user');
        setUser(null);
        navigate('/');
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <NavLink to="/" className="text-2xl font-bold text-blue-800">
                            Edumotion
                        </NavLink>
                    </div>

                    {/* Navegación Desktop */}
                    <nav className="hidden md:flex gap-6">
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600 hover:text-blue-700'}`
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({isActive}) => 
                                `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600 hover:text-blue-700'}`
                            }
                        >
                            Sobre
                        </NavLink>
                        <NavLink 
                            to="/cursos" 
                            className={({isActive}) => 
                                `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600 hover:text-blue-700'}`
                            }
                        >
                            Cursos
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({isActive}) => 
                                `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600 hover:text-blue-700'}`
                            }
                        >
                            Contacto
                        </NavLink>
                        {/* Mostrar Dashboard solo si está autenticado */}
                        {user && (
                            <NavLink 
                                to="/dashboard" 
                                className={({isActive}) => 
                                    `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600 hover:text-blue-700'}`
                                }
                            >
                                Mi Panel
                            </NavLink>
                        )}
                       
                    </nav>

                    {/* Acciones del usuario */}
                    <div className="flex items-center gap-3">
                        {user ? (
                            // Usuario autenticado
                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex items-center gap-2 text-gray-700">
                                    <UserIcon className="w-4 h-4" />
                                    <span className="text-sm">{user.email}</span>
                                </div>
                                 <button 
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-sm font-medium text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                                >
                                    <ArrowRightOnRectangleIcon className="w-4 h-4" />
                                    <span className="hidden sm:inline">Cerrar Sesión</span>
                                    <span className="sm:hidden">Salir</span>
                                </button> 
                            </div>
                        ) : (
                            // Usuario no autenticado
                            <NavLink 
                                to="/login" 
                                className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Acceder
                            </NavLink>
                        )}

                        {/* Botón menú móvil */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-600 hover:text-gray-900"
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <nav className="flex flex-col gap-3 pt-4">
                            <NavLink 
                                to="/" 
                                className={({isActive}) => 
                                    `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600'}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </NavLink>
                            <NavLink 
                                to="/about" 
                                className={({isActive}) => 
                                    `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600'}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sobre
                            </NavLink>
                            <NavLink 
                                to="/cursos" 
                                className={({isActive}) => 
                                    `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600'}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Cursos
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className={({isActive}) => 
                                    `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600'}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contacto
                            </NavLink>
                            {/* Mostrar Dashboard en móvil si está autenticado */}
                            {user && (
                                <NavLink 
                                    to="/dashboard" 
                                    className={({isActive}) => 
                                        `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-600'}`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Mi Panel
                                </NavLink>
                            )}
                            
                            {/* Información del usuario en móvil */}
                            {user && (
                                <div className="pt-3 border-t border-gray-200 mt-3">
                                    <div className="flex items-center gap-2 text-gray-700 mb-3">
                                        <UserIcon className="w-4 h-4" />
                                        <span className="text-sm">{user.email}</span>
                                    </div>
                                    <button 
                                        onClick={() => {
                                            handleLogout();
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                                    >
                                        <ArrowRightOnRectangleIcon className="w-4 h-4" />
                                        Cerrar Sesión
                                    </button>
                                </div>
                            )}
                            
                            {/* Botón Acceder en móvil para usuarios no autenticados */}
                            {!user && (
                                <div className="pt-3 border-t border-gray-200 mt-3">
                                    <NavLink 
                                        to="/login" 
                                        className="block w-full text-center text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Acceder
                                    </NavLink>
                                </div>
                            )}
                            
                            
                            
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}