import React from 'react';
import { ExternalLink, GitBranch, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './GithubSection.css';

export default function GithubSection() {
  return (
    <section className="github-section">
      <div className="github-bg-image" />
      <div className="github-overlay" />

      <div className="container">
        <div className="github-content-box">
          <div className="github-icon-badge">
            <GithubIcon size={32} />
          </div>

          <h2 className="github-heading">
            Explore My Work on <span className="text-gold">GitHub</span>
          </h2>

          <p className="github-desc">
            I enjoy building practical applications, experimenting with AI technologies, and learning through hands-on development.
          </p>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary github-btn"
          >
            <GithubIcon size={20} />
            <span>Visit My GitHub</span>
            <ExternalLink size={17} />
          </a>

          {/* Authentic Project Repositories Quick Links */}
          <div className="github-repocards">
            <a
              href="https://github.com/AARZOO00/whatsapp-sentiment-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="github-mini-card"
            >
              <FolderGit2 size={14} color="#FFC52E" />
              <span>whatsapp-sentiment-analyzer</span>
            </a>
            <a
              href="https://github.com/AARZOO00/careops-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="github-mini-card"
            >
              <GitBranch size={14} color="#FFC52E" />
              <span>careops-platform</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
