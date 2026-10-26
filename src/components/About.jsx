import React, { useState } from 'react';
import { GraduationCap, Calendar, BarChart3, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header with Left & Right Yellow Lines */}
        <div className="section-title-line-header">
          <span className="title-yellow-bar" />
          <h2 className="title-white-text">ABOUT ME</h2>
          <span className="title-yellow-bar" />
        </div>

        {/* Content Layout: Left Bio + Right 4 Cards */}
        <div className="about-split-layout">
          {/* Left Column: Bio Paragraph & Read More CTA */}
          <div className="about-left-col">
            <p className="about-bio-paragraph">
              {personalInfo.aboutText}
            </p>

            {expanded && (
              <p className="about-bio-extra">
                Throughout my academic journey at Maulana Azad National Urdu University, I have developed comprehensive projects utilizing Python, FastAPI, React, and transformer-based NLP architectures. My goal is to build intelligent, accessible, and high-performance digital solutions that solve tangible problems.
              </p>
            )}

            <button 
              type="button" 
              className="btn-about-readmore"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          </div>

          {/* Right Column: 4 Stat Cards in a Single Row */}
          <div className="about-cards-row">
            {/* Card 1: Degree */}
            <div className="about-stat-card">
              <div className="stat-card-icon">
                <GraduationCap size={20} color="#FFC52E" />
              </div>
              <div className="stat-card-content">
                <div className="stat-label">Degree</div>
                <div className="stat-value">{personalInfo.academic.degreeShort}</div>
              </div>
            </div>

            {/* Card 2: Graduation */}
            <div className="about-stat-card">
              <div className="stat-card-icon">
                <Calendar size={20} color="#FFC52E" />
              </div>
              <div className="stat-card-content">
                <div className="stat-label">Graduation</div>
                <div className="stat-value">{personalInfo.academic.graduation}</div>
              </div>
            </div>

            {/* Card 3: CGPA */}
            <div className="about-stat-card">
              <div className="stat-card-icon">
                <BarChart3 size={20} color="#FFC52E" />
              </div>
              <div className="stat-card-content">
                <div className="stat-label">CGPA</div>
                <div className="stat-value">{personalInfo.academic.cgpa}</div>
              </div>
            </div>

            {/* Card 4: Interests */}
            <div className="about-stat-card">
              <div className="stat-card-icon">
                <Heart size={20} color="#FFC52E" />
              </div>
              <div className="stat-card-content">
                <div className="stat-label">Interests</div>
                <div className="stat-value-multiline">
                  <div>Software Development</div>
                  <div>AI/ML, NLP</div>
                  <div>Web Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
