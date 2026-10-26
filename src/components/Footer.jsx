import React from 'react';
import { ChevronUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education-contact' },
    { label: 'Contact', href: '#education-contact' }
  ];

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Left: Brand Monogram & Subtitle */}
        <div className="footer-brand-box">
          <div className="footer-logo">
            <span className="logo-badge">A</span>
            <span className="footer-name">AARZOO</span>
          </div>
          <div className="footer-subtitle">
            Software Developer | AI/ML Enthusiast
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="footer-nav-links">
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <a href={item.href} className="footer-link">
                {item.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="footer-link-divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Social Icons & Copyright */}
        <div className="footer-right-box">
          <div className="footer-social-icons">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-icon-link"
              aria-label="Email"
            >
              <MailIcon size={16} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
          </div>

          <div className="footer-copy-text">
            &copy; 2026 AARZOO. All rights reserved.
          </div>
        </div>

        {/* Far Right: Floating / End Scroll to Top Yellow Button */}
        <button
          type="button"
          className="btn-scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} color="#050505" strokeWidth={3} />
        </button>
      </div>
    </footer>
  );
}
