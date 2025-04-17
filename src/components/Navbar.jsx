import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollToSection = (sectionId, href) => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(href);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: 'Accueil', href: '/', sectionId: null },
    {
      name: 'Départements',
      href: '#',
      sectionId: null,
      dropdown: [
        { name: 'Technique', href: '/techniques' },
        { name: 'Urbanisme', href: '/departements/urbanisme', sectionId: 'services' },
        { name: 'R&D', href: '/departements/rd', sectionId: 'services' },
        { name: 'Économie', href: '/departements/economie', sectionId: 'services' },
        { name: 'Numérique', href: '/departements/numerique', sectionId: 'services' },
        { name: 'Formation', href: '/departements/formation', sectionId: 'services' },
      ],
    },
    { name: 'Projets', href: '#projects', sectionId: 'projects' },
    { name: 'Présentation', href: '#presentation', sectionId: 'presentation' },
    { name: 'Équipe', href: '#team', sectionId: 'team' },
    { name: 'Contact', href: '/techniques', sectionId: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2'
          : 'bg-[#2E5A27]/85 backdrop-blur-md py-3'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/images/eco2lodgy.png"
              alt="Eco2lodgy"
              className="h-12 w-auto md:h-14"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeDropdown === index}
                    aria-label={`Toggle ${item.name} dropdown`}
                    className={cn(
                      'flex items-center space-x-1 text-sm font-medium transition-colors duration-200',
                      isScrolled ? 'text-gray-800' : 'text-white',
                      activeDropdown === index && 'text-[#D4A017]'
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.sectionId) {
                        e.preventDefault();
                        scrollToSection(item.sectionId, item.href);
                      } else {
                        setActiveSection(item.href);
                      }
                    }}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200 relative',
                      isScrolled ? 'text-gray-800' : 'text-white',
                      activeSection === item.href
                        ? 'text-[#D4A017] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#D4A017]'
                        : 'hover:text-[#D4A017]'
                    )}
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={cn(
                      'absolute left-0 mt-2 w-56 opacity-0 invisible transition-all duration-200 transform scale-95',
                      activeDropdown === index
                        ? 'opacity-100 visible scale-100'
                        : 'group-hover:opacity-100 group-hover:visible group-hover:scale-100'
                    )}
                  >
                    <div className="bg-white rounded-md shadow-md border border-gray-100 py-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          onClick={(e) => {
                            if (subItem.sectionId) {
                              e.preventDefault();
                              scrollToSection(subItem.sectionId, subItem.href);
                            }
                          }}
                          className={cn(
                            'block px-4 py-2 text-xs text-gray-700 hover:bg-[#D4A017]/10 hover:text-[#D4A017] transition-colors duration-200',
                            activeSection === subItem.href && 'text-[#D4A017] font-medium'
                          )}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Button
              className="bg-gradient-to-r from-[#D4A017] to-[#E8B923] hover:from-[#D4A017]/90 hover:to-[#E8B923]/90 text-gray-900 text-sm font-semibold rounded-full px-5 py-2 shadow-xs transition-all duration-200"
              onClick={() => scrollToSection('contact', '#contact')}
            >
              Nous Contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              'md:hidden transition-colors',
              isScrolled ? 'text-gray-800' : 'text-white'
            )}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-4 bg-white rounded-lg shadow-md animate-slide-in">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={activeDropdown === index}
                        aria-label={`Toggle ${item.name} dropdown`}
                        className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-800 hover:text-[#D4A017]"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            activeDropdown === index && 'rotate-180'
                          )}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="mt-1 ml-4 space-y-1 border-l-2 border-[#D4A017] pl-3">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              onClick={(e) => {
                                if (subItem.sectionId) {
                                  e.preventDefault();
                                  scrollToSection(subItem.sectionId, subItem.href);
                                }
                              }}
                              className={cn(
                                'block py-1.5 text-xs text-gray-700 hover:text-[#D4A017]',
                                activeSection === subItem.href && 'text-[#D4A017] font-medium'
                              )}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.sectionId) {
                          e.preventDefault();
                          scrollToSection(item.sectionId, item.href);
                        } else {
                          setActiveSection(item.href);
                          setIsMenuOpen(false);
                        }
                      }}
                      className={cn(
                        'block py-2 text-sm font-semibold text-gray-800 hover:text-[#D4A017]',
                        activeSection === item.href && 'text-[#D4A017]'
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <Button
                className="w-full bg-gradient-to-r from-[#D4A017] to-[#E8B923] hover:from-[#D4A017]/90 hover:to-[#E8B923]/90 text-gray-900 text-sm font-semibold rounded-full py-5 shadow-xs"
                onClick={() => scrollToSection('contact', '#contact')}
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;