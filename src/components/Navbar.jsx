import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education-contact' },
  { label: 'Contact', href: '#education-contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'education-contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="nav-logo"
          onClick={(e) => handleLinkClick(e, '#hero')}
        >
          <span className="logo-badge">A</span>
          <span className="logo-text">AARZOO</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Center Desktop Navigation Menu */}
        <ul className="nav-links">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId || 
              (sectionId === 'education-contact' && (item.label === 'Education' || item.label === 'Contact') && activeSection === 'education-contact');
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action: Resume & Mobile Toggle */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumePath}
            download="Aarzoo_Resume.pdf"
            className="nav-resume-btn"
            title="Download Aarzoo's Resume"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={(e) => handleLinkClick(e, item.href)}
          >
            <span>{item.label}</span>
            <ArrowUpRight size={16} />
          </a>
        ))}

        <a
          href={personalInfo.resumePath}
          download="Aarzoo_Resume.pdf"
          className="btn btn-primary mobile-resume-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Download size={16} />
          <span>Download Resume</span>
        </a>
      </div>
    </nav>
  );
}
