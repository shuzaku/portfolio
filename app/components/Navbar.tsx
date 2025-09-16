"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage = "" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  const isActive = (itemId: string) => {
    if (currentPage === itemId) return true;
    if (currentPage === "projects" && itemId === "projects") return true;
    return false;
  };

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div>
            <a 
              href="/" 
              className="text-xl font-bold" 
              style={{ textDecoration: 'none', color: 'var(--text-primary)' }}
            >
              Marvin's Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`nav-link ${isActive(item.id) ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://res.cloudinary.com/shuzchef/image/upload/v1757991057/portfolio/saduwmvvdy0fnv7wscta.pdf" 
                target="_blank" 
                className="nav-link nav-link-resume"
                style={{ color: 'var(--primary)', fontWeight: '600' }}
              >
                📄 Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu mobile-menu-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-link ${isActive(item.id) ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://res.cloudinary.com/shuzchef/image/upload/v1757991057/portfolio/saduwmvvdy0fnv7wscta.pdf" 
              target="_blank" 
              className="mobile-nav-link mobile-nav-link-resume"
              onClick={closeMobileMenu}
            >
              📄 Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
