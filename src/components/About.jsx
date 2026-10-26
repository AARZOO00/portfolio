import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About() {
  const [avatarSrc, setAvatarSrc] = useState('/profile.jpg');

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Background &amp; Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gold">Me</span>
          </h2>
          <p className="section-subtitle">
            A developer dedicated to engineering functional software, AI integrations, and intuitive digital solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Profile Card & Code Snapshot */}
          <div className="about-profile-card">
            <div className="about-avatar-wrapper">
              <img
                src={avatarSrc}
                onError={() => setAvatarSrc(personalInfo.profileImage)}
                alt="Aarzoo"
                className="about-avatar-img"
              />
            </div>
            <h3>{personalInfo.name}</h3>
            <p className="about-profile-role">Computer Science Graduate</p>

            {/* Developer Code Snippet */}
            <div className="about-code-snippet">
              <div className="code-line-comment">// developer.config.js</div>
              <div>
                <span className="code-keyword">const</span> <span className="code-prop">developer</span> = &#123;
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">name</span>: <span className="code-string">&apos;Aarzoo&apos;</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">degree</span>: <span className="code-string">&apos;B.Tech CSE&apos;</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">cgpa</span>: <span className="code-val">8.47</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">passion</span>: <span className="code-string">&apos;AI/ML &amp; Full-Stack&apos;</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">status</span>: <span className="code-string">&apos;Ready to build&apos;</span>
              </div>
              <div>&#125;;</div>
            </div>
          </div>

          {/* Right Column: Bio & Core Facts */}
          <div className="about-bio-box">
            <p className="about-lead-text">
              {personalInfo.aboutText}
            </p>

            {/* Key Academic & Profile Details */}
            <div className="about-details-grid">
              <div className="detail-card">
                <div className="detail-card-header">
                  <GraduationCap size={16} />
                  <span>Degree</span>
                </div>
                <div className="detail-card-value">
                  {personalInfo.academic.degree}
                </div>
                <div className="detail-card-sub">
                  Focused on software systems &amp; intelligent algorithms
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-card-header">
                  <Calendar size={16} />
                  <span>Graduation</span>
                </div>
                <div className="detail-card-value">
                  {personalInfo.academic.graduation}
                </div>
                <div className="detail-card-sub">
                  Class of 2026
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-card-header">
                  <Award size={16} />
                  <span>Academic Standing</span>
                </div>
                <div className="detail-card-value text-gold">
                  {personalInfo.academic.cgpa}
                </div>
                <div className="detail-card-sub">
                  Consistent high performance in CS curriculum
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-card-header">
                  <Terminal size={16} />
                  <span>Primary Focus</span>
                </div>
                <div className="detail-card-value">
                  Full-Stack &amp; AI
                </div>
                <div className="detail-card-sub">
                  Python, React, FastAPI, NLP &amp; Cloud Deployment
                </div>
              </div>
            </div>

            {/* Core Interests */}
            <div className="about-interests-box">
              <div className="interests-label">
                <Sparkles size={15} />
                <span>Core Fields of Interest</span>
              </div>
              <div className="interests-pills">
                {personalInfo.interests.map((interest) => (
                  <span key={interest} className="interest-pill">
                    <CheckCircle2 size={13} style={{ display: 'inline', marginRight: '5px', color: 'var(--accent-gold)' }} />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
