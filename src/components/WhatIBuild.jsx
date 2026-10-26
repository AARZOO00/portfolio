import React from 'react';
import { Layers, Cpu, MessageSquareCode, CloudUpload } from 'lucide-react';
import { whatIBuildPillars } from '../data/portfolioData';
import './WhatIBuild.css';

const getPillarIcon = (iconName) => {
  switch (iconName) {
    case 'Layers':
      return <Layers size={24} />;
    case 'Cpu':
      return <Cpu size={24} />;
    case 'MessageSquareCode':
      return <MessageSquareCode size={24} />;
    case 'CloudUpload':
      return <CloudUpload size={24} />;
    default:
      return <Layers size={24} />;
  }
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="build-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Engineering Pillars</span>
          </div>
          <h2 className="section-title">
            What I <span className="text-gold">Build</span>
          </h2>
          <p className="section-subtitle">
            Focused on end-to-end software development, integrating intelligent machine learning models, and building accessible web experiences.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="build-grid">
          {whatIBuildPillars.map((pillar) => (
            <div key={pillar.id} className="build-card">
              <div className="build-card-header">
                <div className="build-icon-box">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="build-title">{pillar.title}</h3>
              </div>

              <p className="build-desc">{pillar.description}</p>

              <div className="build-tech-list">
                {pillar.technologies.map((tech) => (
                  <span key={tech} className="build-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
