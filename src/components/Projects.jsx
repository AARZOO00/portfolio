import React from 'react';
import { ExternalLink, Server, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of practical applications and AI-driven systems engineered with clean code, verified repositories, and live cloud deployments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Thumbnail Container */}
              <div className="project-thumb-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumb-img"
                  loading="lazy"
                />
                <div className="project-thumb-overlay" />
                <div className="project-badge-pill">
                  <span>{project.technologies[0]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Features List */}
                <ul className="project-features">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-feature-item">
                      <CheckCircle2 size={14} className="project-feature-bullet" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Verified Links */}
                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-github"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={15} />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-live"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.links.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-backend"
                      aria-label={`Backend API for ${project.title}`}
                    >
                      <Server size={15} />
                      <span>Live API</span>
                    </a>
                  )}

                  {!project.links.github && !project.links.live && (
                    <span className="project-link-status">
                      <Sparkles size={14} color="#FFC52E" />
                      <span>Vercel Optimized • Dashboard</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
