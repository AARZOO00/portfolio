import React from 'react';
import { GraduationCap, Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './EducationContact.css';

export default function EducationContact() {
  const handleGetInTouch = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`;
  };

  return (
    <section id="education-contact" className="edu-contact-section">
      <div className="container edu-contact-container">
        {/* =========================================================
            LEFT COLUMN: EDUCATION
            ========================================================= */}
        <div className="edu-col">
          {/* Section Header */}
          <div className="section-title-line-header">
            <span className="title-yellow-bar" />
            <h2 className="title-white-text">EDUCATION</h2>
            <span className="title-yellow-bar" />
          </div>

          {/* Education Timeline Card */}
          <div className="edu-timeline-card">
            {/* Timeline Indicator with Gold Badge */}
            <div className="edu-timeline-badge-col">
              <span className="edu-timeline-dot" />
              <div className="edu-cap-circle">
                <GraduationCap size={20} color="#FFC52E" />
              </div>
              <span className="edu-timeline-line" />
            </div>

            {/* Education Info */}
            <div className="edu-details-col">
              <h3 className="edu-degree-name">
                {personalInfo.academic.degree}
              </h3>

              <div className="edu-institution-name">
                {personalInfo.academic.college}
              </div>

              <div className="edu-period-cgpa">
                {personalInfo.academic.timeline}
              </div>

              <p className="edu-coursework-text">
                {personalInfo.academic.courseworkText}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: CONTACT ME
            ========================================================= */}
        <div className="contact-col">
          {/* Section Header */}
          <div className="contact-header-wrap">
            <div className="section-title-line-header">
              <span className="title-yellow-bar" />
              <h2 className="title-white-text">CONTACT ME</h2>
              <span className="title-yellow-bar" />
            </div>

            {/* Paper Airplane Gold Doodle */}
            <div className="contact-plane-doodle" aria-hidden="true">
              <svg viewBox="0 0 100 50" fill="none" className="plane-svg">
                <path
                  d="M10 40 Q40 50 55 35 T75 22"
                  stroke="#FFC52E"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <polygon
                  points="75,22 88,10 94,26 84,23 79,28"
                  fill="#FFC52E"
                />
              </svg>
            </div>
          </div>

          <h3 className="contact-main-heading">
            Let&apos;s build something amazing together!
          </h3>

          {/* 3 Contact Pills Row + Get In Touch Button */}
          <div className="contact-actions-row">
            {/* 3 Pills */}
            <div className="contact-pills-list">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="contact-pill"
              >
                <Mail size={15} color="#FFC52E" />
                <span>{personalInfo.email}</span>
              </a>

              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
              >
                <LinkedinIcon size={15} color="#60A5FA" />
                <span>linkedin.com/in/aarzoo00</span>
              </a>

              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
              >
                <GithubIcon size={15} color="#FFFFFF" />
                <span>github.com/AARZOO00</span>
              </a>
            </div>

            {/* Get In Touch Button */}
            <button
              type="button"
              className="btn-get-in-touch"
              onClick={handleGetInTouch}
            >
              <Send size={15} />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
