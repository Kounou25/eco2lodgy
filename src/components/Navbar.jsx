import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (href, sectionId) => {
    const isOnHomePage = location.pathname === '/';
    
    if (sectionId) {
      if (isOnHomePage) {
        scrollToSection(sectionId);
      } else {
        navigate(`/#${sectionId}`);
      }
    } else {
      navigate(href);
    }
    
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Gérer le défilement après chargement si une ancre est présente
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(sectionId), 100); // Délai pour attendre le rendu
    }
  }, [location]);

  const navItems = [
    { name: 'Accueil', href: '/', sectionId: null },
    {
      name: 'Départements',
      href: '#',
      sectionId: null,
      dropdown: [
        { name: 'Ingénierie et Construction', href: '/services/techniques', sectionId: null },
        { name: 'Urbanisme et Architecture', href: '/services/urbanisme', sectionId: null },
        { name: 'Recherche et Développement', href: '/services/recherches', sectionId: null },
        { name: 'Promotion et Gestion Immobilière', href: '/services/gestionImmo', sectionId: null },
        { name: 'Économie', href: '/services/finances', sectionId: null },
        { name: 'Numérique', href: '/services/numeriques', sectionId: null },
        { name: 'Formation', href: '/services/formations', sectionId: null },
      ],
    },
    { name: 'Projets', href: '/projects', sectionId: null },

    { name: 'Formations', href: '/formations', sectionId: null },
    { name: 'Présentation', href: '/#about', sectionId: 'about' },
    // { name: 'Contact', href: '/#contact', sectionId: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all duration-300 py-3">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src="/images/eco2lodgy.png"
              alt="Eco2lodgy"
              className="h-16 w-auto md:h-20"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeDropdown === index}
                    aria-label={`Toggle ${item.name} dropdown`}
                    className={cn(
                      'flex items-center space-x-1 text-base font-semibold transition-colors duration-300',
                      activeDropdown === index ? 'text-[#D4A017]' : 'text-gray-900 hover:text-[#D4A017]'
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <NavLink
                    to={item.href}
                    onClick={(e) => {
                      if (item.sectionId) {
                        e.preventDefault();
                        handleNavigation(item.href, item.sectionId);
                      }
                    }}
                    className={({ isActive }) =>
                      cn(
                        'text-base font-semibold transition-colors duration-300 relative',
                        (isActive && !item.sectionId) || (item.sectionId && location.pathname === '/' && location.hash === `#${item.sectionId}`)
                          ? 'text-[#D4A017] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#D4A017]'
                          : 'text-gray-900 hover:text-[#D4A017] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#D4A017]'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={cn(
                      'absolute left-0 mt-3 w-60 opacity-0 invisible transition-all duration-300 transform translate-y-2',
                      activeDropdown === index
                        ? 'opacity-100 visible translate-y-0'
                        : 'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
                    )}
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.href}
                          className={({ isActive }) =>
                            cn(
                              'block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#D4A017]/10 hover:text-[#D4A017] transition-colors duration-200',
                              isActive && 'text-[#D4A017]'
                            )
                          }
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Button
              className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-gray-900 text-base font-semibold rounded-full px-6 py-2.5 shadow-md transition-all duration-300"
              onClick={() => handleNavigation('/#contact', 'contact')}
            >
              Nous Contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-900 hover:text-[#D4A017] transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-white rounded-xl shadow-lg animate-slide-down">
            <div className="flex flex-col space-y-3 px-5">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={activeDropdown === index}
                        aria-label={`Toggle ${item.name} dropdown`}
                        className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-900 hover:text-[#D4A017]"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 transition-transform duration-300',
                            activeDropdown === index && 'rotate-180'
                          )}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#D4A017] pl-4">
                          {item.dropdown.map((subItem, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subItem.href}
                              className={({ isActive }) =>
                                cn(
                                  'block py-2 text-sm font-medium text-gray-700 hover:text-[#D4A017]',
                                  isActive && 'text-[#D4A017]'
                                )
                              }
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={(e) => {
                        if (item.sectionId) {
                          e.preventDefault();
                          handleNavigation(item.href, item.sectionId);
                        }
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className={({ isActive }) =>
                        cn(
                          'block py-3 text-base font-semibold text-gray-900 hover:text-[#D4A017]',
                          (isActive && !item.sectionId) || (item.sectionId && location.pathname === '/' && location.hash === `#${item.sectionId}`)
                            ? 'text-[#D4A017]'
                            : ''
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <Button
                className="w-full bg-[#D4A017] hover:bg-[#D4A017]/90 text-gray-900 text-base font-semibold rounded-full py-3 shadow-md transition-all duration-300"
                onClick={() => {
                  handleNavigation('/#contact', 'contact');
                  setIsMenuOpen(false);
                }}
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
