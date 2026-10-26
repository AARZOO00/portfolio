import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Info, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct authentic mailto handler
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Aarzoo,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
    setShowGuide(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build <span className="text-gold">Something Together</span>
          </h2>
          <p className="section-subtitle">
            Open to software development opportunities, full-stack &amp; AI/ML engineering roles, and collaborative technical projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-list">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-card-main">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-text-group">
                  <h4>Email Directly</h4>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-info-card">
              <div className="contact-card-main">
                <div className="contact-icon-box">
                  <LinkedinIcon size={22} />
                </div>
                <div className="contact-text-group">
                  <h4>LinkedIn Network</h4>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/aarzoo00
                  </a>
                </div>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="copy-btn"
              >
                <span>Visit</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="contact-info-card">
              <div className="contact-card-main">
                <div className="contact-icon-box">
                  <GithubIcon size={22} />
                </div>
                <div className="contact-text-group">
                  <h4>GitHub Repositories</h4>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/AARZOO00
                  </a>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="copy-btn"
              >
                <span>Visit</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Availability Banner */}
            <div className="availability-banner">
              <span className="availability-dot" />
              <div className="availability-text">
                <h4>Currently Open for Opportunities</h4>
                <p>
                  Available for full-time Software Developer, AI/ML Engineer, and Full-Stack Developer positions starting 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-box">
            <h3 className="contact-form-title">Send a Direct Message</h3>
            <p className="contact-form-desc">
              Fill out the details below. Submitting will launch your default email client with your message formatted, or you can connect a backend service.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Hunter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input"
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Job Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <span>Send via Email Client</span>
                <Send size={18} />
              </button>
            </form>

            {/* Backend Connection Information Guide */}
            <div className="backend-guide-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Info size={16} color="#FFC52E" />
                <strong>How this form handles messages:</strong>
              </div>
              <p>
                To maintain 100% integrity without faking a sent status, this form routes directly to <code>{personalInfo.email}</code>.
              </p>
              <p style={{ marginTop: '0.4rem' }}>
                To enable automated background delivery without opening an email client, connect a free service like <strong>Formspree</strong> (add <code>action=&quot;https://formspree.io/f/YOUR_ID&quot;</code>) or <strong>EmailJS</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
