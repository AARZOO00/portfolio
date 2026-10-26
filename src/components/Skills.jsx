import React from 'react';
import { 
  PythonLogo, 
  JavaScriptLogo, 
  SqlLogo, 
  ReactLogo, 
  Html5Logo, 
  Css3Logo, 
  NodejsLogo, 
  FastApiLogo, 
  RestApiLogo, 
  NlpLogo, 
  VaderLogo, 
  TextBlobLogo, 
  TransformersLogo, 
  OpenRouterLogo, 
  GitLogo, 
  GithubIcon, 
  RenderLogo, 
  VercelLogo 
} from './Icons';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const renderSkillIcon = (iconName) => {
  switch (iconName) {
    case 'python': return <PythonLogo size={26} />;
    case 'javascript': return <JavaScriptLogo size={26} />;
    case 'sql': return <SqlLogo size={26} />;
    case 'react': return <ReactLogo size={26} />;
    case 'html5': return <Html5Logo size={26} />;
    case 'css3': return <Css3Logo size={26} />;
    case 'nodejs': return <NodejsLogo size={26} />;
    case 'fastapi': return <FastApiLogo size={26} />;
    case 'restapi': return <RestApiLogo size={26} />;
    case 'nlp': return <NlpLogo size={26} />;
    case 'vader': return <VaderLogo size={26} />;
    case 'textblob': return <TextBlobLogo size={26} />;
    case 'transformers': return <TransformersLogo size={26} />;
    case 'openrouter': return <OpenRouterLogo size={26} />;
    case 'git': return <GitLogo size={26} />;
    case 'github': return <GithubIcon size={24} color="#FFFFFF" />;
    case 'render': return <RenderLogo size={26} />;
    case 'vercel': return <VercelLogo size={24} />;
    default: return null;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header with Left & Right Yellow Lines */}
        <div className="section-title-line-header">
          <span className="title-yellow-bar" />
          <h2 className="title-white-text">TECHNICAL SKILLS</h2>
          <span className="title-yellow-bar" />
        </div>

        {/* 5 Category Cards in a Row */}
        <div className="skills-horizontal-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <h3 className="category-title">{cat.name}</h3>

              <div className="category-icons-row">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-block">
                    <div className="skill-icon-holder">
                      {renderSkillIcon(skill.icon)}
                    </div>
                    <span className="skill-name-label">{skill.name}</span>
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
