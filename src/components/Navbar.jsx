
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Fonction pour défiler vers une section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Ferme le menu mobile après avoir cliqué
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Accueil', href: '/', sectionId: null },
    {
      name: 'Solutions',
      href: '#',
      sectionId: null,
      dropdown: [
        { name: 'Eco2Box', href: '/solutions/eco2box', sectionId: null },
        { name: 'Plateforme Web & Mobile', href: '/solutions/plateforme', sectionId: null },
        { name: 'Accompagnement', href: '/solutions/services', sectionId: null },
      ],
    },
    { name: 'Domaines', href: '#projects', sectionId: 'projects' },
    { name: 'À Propos', href: '#about', sectionId: 'about' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/images/eco2lodgy.png"
              alt="Eco2lodgy"
              className="h-20 w-auto"
            />
            {/* <span className={cn(
              "font-display font-bold text-2xl transition-colors duration-300",
              isScrolled ? "text-[#2E5A27]" : "text-white"
            )}>
              
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={cn(
                      "flex items-center space-x-1 font-medium hover:text-[#D4A017] transition-colors",
                      isScrolled ? "text-[#2E5A27]" : "text-white"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.sectionId) {
                        e.preventDefault();
                        scrollToSection(item.sectionId);
                      }
                    }}
                    className={cn(
                      "font-medium hover:text-[#D4A017] transition-colors",
                      isScrolled ? "text-[#2E5A27]" : "text-white"
                    )}
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white glass-card rounded-md shadow-xl overflow-hidden">
                      <div className="py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#2E5A27] hover:bg-[#D4A017]/10 hover:text-[#D4A017] transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
              Demander une démo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden transition-colors",
              isScrolled ? "text-[#2E5A27]" : "text-white"
            )}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full py-2 font-medium text-[#2E5A27]"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === index && (
                        <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#2E5A27] pl-4">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              onClick={(e) => {
                                if (subItem.sectionId) {
                                  e.preventDefault();
                                  scrollToSection(subItem.sectionId);
                                }
                              }}
                              className="block py-2 text-sm text-[#2E5A27] hover:text-[#D4A017]"
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
                          scrollToSection(item.sectionId);
                        }
                      }}
                      className="block py-2 font-medium text-[#2E5A27] hover:text-[#D4A017]"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <Button className="w-full bg-[#2E5A27] hover:bg-[#2E5A27]/80 text-white transition-colors">
                Demander une démo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
