
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

  const navItems = [
    { name: 'Accueil', href: '/' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Architecture', href: '/services/architecture' },
        { name: 'Promotion Immobilière', href: '/services/promotion' },
        { name: 'Ingénierie Civile', href: '/services/ingenierie' },
        { name: 'Infographie', href: '/services/infographie' },
        { name: 'Solutions Numériques', href: '/services/solutions-numeriques' },
      ],
    },
    { name: 'Projets', href: '/projets' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
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
              src="/images/logo.svg"
              alt="Eco2lodgy"
              className="h-10 w-auto"
            />
            <span className={cn(
              "font-display font-bold text-2xl transition-colors duration-300",
              isScrolled ? "text-eco-green" : "text-white"
            )}>
              Eco2lodgy
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={cn(
                      "flex items-center space-x-1 font-medium hover:text-eco-green transition-colors",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "font-medium hover:text-eco-green transition-colors",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    {item.name}
                  </a>
                )}

                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white glass-card rounded-md shadow-xl overflow-hidden">
                      <div className="py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-eco-green/10 hover:text-eco-green transition-colors"
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

            <Button className="bg-eco-green hover:bg-eco-light transition-colors">
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground"
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
                        className="flex items-center justify-between w-full py-2 font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === index && (
                        <div className="mt-2 ml-4 space-y-2 border-l-2 border-eco-green pl-4">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block py-2 text-sm text-foreground hover:text-eco-green"
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
                      className="block py-2 font-medium hover:text-eco-green"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <Button className="w-full bg-eco-green hover:bg-eco-light transition-colors">
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
