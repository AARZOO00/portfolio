import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Edit3, Check, Building2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  const [institution, setInstitution] = useState(personalInfo.academic.collegePlaceholder);
  const [isEditing, setIsEditing] = useState(false);
  const [tempInstitution, setTempInstitution] = useState(personalInfo.academic.collegePlaceholder);

  const handleSave = () => {
    setInstitution(tempInstitution.trim() || personalInfo.academic.collegePlaceholder);
    setIsEditing(false);
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gold">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical foundation in Computer Science and Engineering with a focus on software engineering, data structures, and intelligent systems.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="education-wrapper">
          <div className="education-timeline-card">
            {/* Header Row */}
            <div className="edu-header-row">
              <div>
                <h3 className="edu-degree-title">{personalInfo.academic.degree}</h3>
                
                {/* Editable College Placeholder */}
                <div style={{ marginTop: '0.6rem' }}>
                  {isEditing ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <input
                        type="text"
                        value={tempInstitution}
                        onChange={(e) => setTempInstitution(e.target.value)}
                        placeholder="Enter your college/university name"
                        style={{
                          background: '#0D0D12',
                          border: '1px solid var(--accent-gold)',
                          color: '#FFF',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          minWidth: '280px'
                        }}
                      />
                      <button
                        onClick={handleSave}
                        className="btn btn-outline-gold"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                      >
                        <Check size={14} />
                        <span>Save</span>
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="edu-institution-box" 
                      onClick={() => setIsEditing(true)}
                      title="Click to edit your institution name"
                      style={{ cursor: 'pointer' }}
                    >
                      <Building2 size={16} />
                      <span>{institution}</span>
                      <Edit3 size={13} style={{ marginLeft: '4px', opacity: 0.7 }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="edu-metrics-group">
                <div className="edu-metric-badge highlight">
                  <Award size={16} />
                  <span>CGPA: {personalInfo.academic.cgpa}</span>
                </div>
                <div className="edu-metric-badge">
                  <Calendar size={16} />
                  <span>Graduation: {personalInfo.academic.graduation}</span>
                </div>
              </div>
            </div>

            <div className="edu-divider" />

            {/* Coursework */}
            <div>
              <div className="edu-coursework-title">
                <BookOpen size={16} />
                <span>Relevant Coursework &amp; Core Subjects</span>
              </div>
              <div className="edu-coursework-pills">
                {personalInfo.academic.coursework.map((course) => (
                  <span key={course} className="edu-course-pill">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Editable note for recruiter / user transparency */}
            <div className="edu-placeholder-note">
              <GraduationCap size={16} color="#FFC52E" />
              <span>
                Expected Graduation: May 2026. Institution name can be updated dynamically above or configured directly in <code>src/data/portfolioData.js</code>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
