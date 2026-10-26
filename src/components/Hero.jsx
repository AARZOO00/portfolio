import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, GraduationCap, Award, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/images/aarzoo-profile.png');

  const handleImageError = () => {
    // Graceful fallback to legacy cutout or original photo if needed
    setImgSrc('/profile-cutout.png');
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background glows */}
      <div className="hero-glow-blob hero-glow-1" />
      <div className="hero-glow-blob hero-glow-2" />

      <div className="container hero-grid">
        {/* Left Column: Introduction & CTAs */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting Pill */}
          <motion.div variants={itemVariants} className="hero-greeting-pill">
            <span className="greeting-dot" />
            <span className="greeting-text">{personalInfo.shortIntro}</span>
          </motion.div>

          {/* Large Name */}
          <motion.h1 variants={itemVariants} className="hero-name">
            {personalInfo.name} <span className="hero-name-accent">.</span>
          </motion.h1>

          {/* Professional Title */}
          <motion.div variants={itemVariants} className="hero-role">
            <span>Software Developer</span>
            <span className="role-divider">•</span>
            <span>AI/ML Enthusiast</span>
            <span className="role-divider">•</span>
            <span>Full-Stack Developer</span>
          </motion.div>

          {/* Short Bio */}
          <motion.p variants={itemVariants} className="hero-description">
            {personalInfo.bio}
          </motion.p>

          {/* 3 Information Badges */}
          <motion.div variants={itemVariants} className="hero-badges">
            <div className="hero-badge-item">
              <GraduationCap size={15} />
              <span>B.Tech CSE &apos;26</span>
            </div>
            <div className="hero-badge-item">
              <Award size={15} />
              <span>CGPA: 8.47/10</span>
            </div>
            <div className="hero-badge-item">
              <Code2 size={15} />
              <span>NLP &amp; Full-Stack</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="hero-cta-group">
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
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="hero-socials">
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
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
              aria-label="Email Aarzoo"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Portrait Cutout in front of Glowing Golden Halo */}
        <motion.div 
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Glowing Golden Circular Halo behind body */}
          <div className="hero-halo-glow" />

          {/* Animated Outer Dashed Ring */}
          <div className="hero-orbital-ring ring-outer" />

          {/* Inner Orbital Ring with Orbiting Golden Bead */}
          <div className="hero-orbital-ring ring-inner">
            <div className="orbit-dot" />
          </div>

          {/* Floating Golden Sparkles */}
          <div className="hero-sparkle sparkle-1" />
          <div className="hero-sparkle sparkle-2" />
          <div className="hero-sparkle sparkle-3" />
          <div className="hero-sparkle sparkle-4" />

          {/* Top Floating Badge */}
          <div className="floating-tag floating-tag-top">
            <span className="floating-tag-gold-dot" />
            <Sparkles size={14} color="#FFC52E" />
            <span>AI/ML &amp; NLP Builder</span>
          </div>

          {/* Transparent Portrait Cutout Container */}
          <div className="hero-portrait-cutout-container">
            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Aarzoo - Software Developer & AI/ML Enthusiast"
              className="hero-portrait-cutout-img"
              loading="eager"
            />
          </div>

          {/* Bottom Floating Badge */}
          <div className="floating-tag floating-tag-bottom">
            <span className="floating-tag-gold-dot" />
            <Code2 size={14} color="#FFC52E" />
            <span>React • Python • FastAPI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
