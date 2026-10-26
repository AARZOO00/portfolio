import React, { useState } from 'react';
import { Download, GraduationCap, Code2, Brain, MapPin, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/images/aarzoo-hero-portrait.png');

  const handleImageError = () => {
    setImgSrc('/images/aarzoo-profile.png');
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* =========================================================
            COLUMN 1: Intro Text, Role, Description, Buttons & Socials
            ========================================================= */}
        <div className="hero-col-intro">
          <div className="hero-greeting">HELLO, I&apos;M</div>
          
          <h1 className="hero-name">
            Aarzoo <span className="hero-cursor">|</span>
          </h1>

          <div className="hero-roles">
            Software Developer <span className="role-sep">|</span> AI/ML Enthusiast <span className="role-sep">|</span> Full-Stack Developer
          </div>

          {/* Dotted Accent Pattern */}
          <div className="hero-dots-accent" aria-hidden="true">
            <span>••••</span>
            <span>••••</span>
            <span>••••</span>
          </div>

          <p className="hero-bio">
            {personalInfo.bio}
          </p>

          {/* Dual Action Buttons */}
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn-hero-primary"
              onClick={handleScrollToProjects}
            >
              <ArrowDown size={17} strokeWidth={2.5} />
              <span>View My Projects</span>
            </a>

            <a 
              href={personalInfo.resumePath}
              download="Aarzoo_Resume.pdf"
              className="btn-hero-secondary"
            >
              <Download size={17} strokeWidth={2} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* 4 Circular Social Icon Buttons */}
          <div className="hero-social-row">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-circle"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-circle"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-social-circle"
              aria-label="Email Aarzoo"
            >
              <MailIcon size={18} />
            </a>

            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-circle"
              aria-label="Telegram / Connect"
            >
              <TelegramIcon size={18} />
            </a>
          </div>
        </div>

        {/* =========================================================
            COLUMN 2: Solid Glowing Golden Sun + Aarzoo Cutout Portrait + Doodles
            ========================================================= */}
        <div className="hero-col-visual">
          <div className="hero-sun-stage">
            {/* Hand-Drawn Golden Doodles */}
            <svg className="hero-doodle doodle-arrow-up" viewBox="0 0 60 60" fill="none" stroke="#FFC52E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Arrow pointing up right with feathers */}
              <path d="M12 48 L48 12 M28 12 L48 12 L48 32" />
              <path d="M18 52 L24 46" strokeWidth="2" />
            </svg>

            <svg className="hero-doodle doodle-lightning" viewBox="0 0 40 60" fill="none" stroke="#FFC52E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Lightning bolt */}
              <path d="M22 4 L8 30 L22 30 L16 56 L34 26 L20 26 Z" />
            </svg>

            <svg className="hero-doodle doodle-sparks" viewBox="0 0 50 50" fill="none" stroke="#FFC52E" strokeWidth="2" strokeLinecap="round">
              <path d="M10 25 L2 25 M40 25 L48 25 M25 10 L25 2 M25 40 L25 48" />
              <path d="M14 14 L8 8 M36 36 L42 42 M14 36 L8 42 M36 14 L42 8" />
            </svg>

            <svg className="hero-doodle doodle-scribble-left" viewBox="0 0 40 40" fill="none" stroke="#FFC52E" strokeWidth="2" strokeLinecap="round">
              <path d="M8 20 Q16 10 24 20 T40 20" />
              <path d="M12 28 Q20 18 28 28" />
            </svg>

            {/* Glowing Golden Outer Orbital Ring */}
            <div className="hero-sun-orbital-ring" />

            {/* Solid Glowing Golden Sun Circle */}
            <div className="hero-golden-sun" />

            {/* Transparent Cutout Portrait */}
            <div className="hero-portrait-frame">
              <img
                src={imgSrc}
                onError={handleImageError}
                alt="Aarzoo - Software Developer & AI/ML Enthusiast"
                className="hero-portrait-cutout"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            COLUMN 3: Dashed Arching Pointer Arrow + Quick Info Card
            ========================================================= */}
        <div className="hero-col-quickcard">
          {/* Curved Dashed Yellow Arrow pointing towards the card */}
          <div className="hero-curved-arrow-wrapper" aria-hidden="true">
            <svg viewBox="0 0 120 70" fill="none" className="hero-curved-arrow-svg">
              <path
                d="M 10 60 Q 60 5 110 35"
                stroke="#FFC52E"
                strokeWidth="2.2"
                strokeDasharray="5 5"
                fill="none"
              />
              <polygon
                points="110,35 98,28 102,40"
                fill="#FFC52E"
              />
            </svg>
          </div>

          {/* Quick Info Card */}
          <div className="hero-quick-card">
            {/* Item 1: B.Tech CSE */}
            <div className="quick-item">
              <div className="quick-icon-circle">
                <GraduationCap size={18} color="#FFC52E" />
              </div>
              <div className="quick-text">
                <div className="quick-title">B.Tech CSE</div>
                <div className="quick-sub">CGPA: 8.47/10</div>
              </div>
            </div>

            {/* Item 2: Passionate about building real-world projects */}
            <div className="quick-item">
              <div className="quick-icon-circle">
                <Code2 size={18} color="#FFC52E" />
              </div>
              <div className="quick-text">
                <div className="quick-desc">Passionate about building real-world projects</div>
              </div>
            </div>

            {/* Item 3: Exploring AI, ML & NLP */}
            <div className="quick-item">
              <div className="quick-icon-circle">
                <Brain size={18} color="#FFC52E" />
              </div>
              <div className="quick-text">
                <div className="quick-desc">Exploring AI, ML &amp; NLP</div>
              </div>
            </div>

            {/* Item 4: India */}
            <div className="quick-item">
              <div className="quick-icon-circle">
                <MapPin size={18} color="#FFC52E" />
              </div>
              <div className="quick-text">
                <div className="quick-desc">India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
