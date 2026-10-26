import React, { useState } from 'react';
import { ArrowRight, Download, Sparkles, GraduationCap, Award, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');

  const handleImageError = () => {
    // If user has not placed profile.jpg in public yet, seamlessly fallback to stylized placeholder
    setImgSrc(personalInfo.profileImage);
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
      {/* Ambient background glows */}
      <div className="hero-glow-blob hero-glow-1" />
      <div className="hero-glow-blob hero-glow-2" />

      <div className="container hero-grid">
        {/* Left Column: Introduction & CTAs */}
        <div className="hero-content">
          <div className="hero-greeting-pill">
            <span className="greeting-dot" />
            <span className="greeting-text">{personalInfo.shortIntro}</span>
          </div>

          <h1 className="hero-name">
            {personalInfo.name} <span className="hero-name-accent">.</span>
          </h1>

          <div className="hero-role">
            <span>Software Developer</span>
            <span className="role-divider">•</span>
            <span>AI/ML Enthusiast</span>
            <span className="role-divider">•</span>
            <span>Full-Stack Developer</span>
          </div>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Quick Credential Badges */}
          <div className="hero-badges">
            <div className="hero-badge-item">
              <GraduationCap size={15} />
              <span>B.Tech CSE &apos;26</span>
            </div>
            <div className="hero-badge-item">
              <Award size={15} />
              <span>CGPA: 8.47 / 10</span>
            </div>
            <div className="hero-badge-item">
              <Code2 size={15} />
              <span>NLP &amp; Full-Stack</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={handleScrollToProjects}
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Aarzoo_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Aarzoo's GitHub profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Aarzoo's LinkedIn profile"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Portrait Frame & Decorative Badges */}
        <div className="hero-visual-wrapper">
          {/* Top Floating Badge */}
          <div className="floating-tag floating-tag-top">
            <span className="floating-tag-gold-dot" />
            <Sparkles size={14} color="#FFC52E" />
            <span>AI/ML &amp; NLP Builder</span>
          </div>

          {/* Portrait Container */}
          <div className="portrait-container">
            <div className="portrait-inner">
              <img
                src={imgSrc}
                onError={handleImageError}
                alt="Aarzoo - Software Developer & AI/ML Enthusiast"
                className="portrait-img"
              />
              <div className="portrait-overlay-glow" />

              {/* Status Badge */}
              <div className="portrait-status-badge">
                <div className="status-badge-info">
                  <h4>Aarzoo</h4>
                  <p>Computer Science &apos;26</p>
                </div>
                <div className="status-pulse-indicator">
                  <span className="status-pulse-dot" />
                  <span>Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Floating Badge */}
          <div className="floating-tag floating-tag-bottom">
            <span className="floating-tag-gold-dot" />
            <Code2 size={14} color="#FFC52E" />
            <span>React • Python • FastAPI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
