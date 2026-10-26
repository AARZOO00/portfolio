import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Brain, 
  Wrench, 
  Sparkles,
  Layers,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

// Helper icon resolver for skill categories
const getCategoryIcon = (id) => {
  switch (id) {
    case 'languages':
      return <Code2 size={20} />;
    case 'frontend':
      return <Layout size={20} />;
    case 'backend':
      return <Server size={20} />;
    case 'ai-nlp':
      return <Brain size={20} />;
    case 'tools':
      return <Wrench size={20} />;
    default:
      return <Sparkles size={20} />;
  }
};

// Skill-specific micro icon resolver
const getSkillIcon = (name) => {
  switch (name) {
    case 'Python':
    case 'JavaScript':
      return <Terminal size={14} color="#FFC52E" />;
    case 'SQL':
      return <Database size={14} color="#FFC52E" />;
    case 'React':
    case 'HTML5':
    case 'CSS3':
      return <Layout size={14} color="#FFC52E" />;
    case 'Node.js':
    case 'FastAPI':
    case 'REST APIs':
      return <Server size={14} color="#FFC52E" />;
    case 'Natural Language Processing':
    case 'Transformer Models':
    case 'OpenRouter API':
    case 'VADER':
    case 'TextBlob':
      return <Cpu size={14} color="#FFC52E" />;
    case 'Git':
    case 'GitHub':
    case 'Render':
    case 'Vercel':
      return <GitBranch size={14} color="#FFC52E" />;
    default:
      return <span className="skill-dot-gold" />;
  }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gold">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core stack and frameworks I use for engineering full-stack applications, intelligent pipelines, and machine learning models.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          <button
            className={`skill-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <Layers size={15} />
            <span>All Technologies</span>
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group) => (
            <div key={group.id} className="skill-group-card">
              <div className="skill-group-header">
                <div className="skill-group-icon">
                  {getCategoryIcon(group.id)}
                </div>
                <h3 className="skill-group-title">{group.name}</h3>
              </div>

              <div className="skill-badges-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    {getSkillIcon(skill.name)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
