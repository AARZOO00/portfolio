import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Row: Brand & Socials */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-badge">A</span>
              <span>{personalInfo.name.toUpperCase()}</span>
              <span style={{ color: 'var(--accent-gold)' }}>.</span>
            </div>
            <div className="footer-role">
              Software Developer | AI/ML Enthusiast
            </div>
          </div>

          <div className="footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Aarzoo's GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Aarzoo's LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              aria-label="Email Aarzoo"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Dynamic Copyright & Back to Top */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} <strong>{personalInfo.name}</strong>. Built with React, Vite, and clean modern CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of the page"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
