import React from 'react';
import { ExternalLink, ChevronRight, Download } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header Row: Title on Left, View All Projects on Right */}
        <div className="projects-header-row">
          <div className="section-title-line-header" style={{ marginBottom: 0 }}>
            <span className="title-yellow-bar" />
            <h2 className="title-white-text">PROJECTS</h2>
            <span className="title-yellow-bar" />
          </div>

          <a 
            href="https://github.com/AARZOO00?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-view-all-projects"
          >
            <span>View All Projects</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* 4 Cards in a Horizontal Grid */}
        <div className="projects-horizontal-grid">
          {projects.map((proj) => {
            const hasSwap = proj.swapButtons;

            const githubBtn = (
              <a
                href={proj.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-outline"
                key="github"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            );

            const liveBtn = (
              <a
                href={proj.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-primary"
                key="live"
              >
                <Download size={13} style={{ transform: 'rotate(-45deg)' }} />
                <span>Live Demo</span>
              </a>
            );

            return (
              <article key={proj.id} className="project-column-card">
                {/* Thumbnail Image Container */}
                <div className="project-card-image-box">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="project-card-image"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.description}</p>

                  {/* Tags */}
                  <div className="project-card-tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Row */}
                  <div className="project-card-actions">
                    {hasSwap ? [liveBtn, githubBtn] : [githubBtn, liveBtn]}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
