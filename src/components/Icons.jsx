import React from 'react';

// General Navigation & Social Icons
export function GithubIcon({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TelegramIcon({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export function MailIcon({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = '', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Technical Skills Official Badges / Logos
export function PythonLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128">
      <path fill="#387EB8" d="M63.7 1.8c-15.6 0-25 6.8-25 19.9v14.6h30.8v4.4H28.4c-13.1 0-24.6 7.9-24.6 24.2 0 16.2 10.3 23.9 23.4 23.9h7.4v-11.4c0-13.3 11.4-24.2 24.6-24.2h30.8V35.4c0-12.7-10.7-19.6-26.3-19.6zm-13.4 9.3c3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8z"/>
      <path fill="#FFE052" d="M64.3 126.2c15.6 0 25-6.8 25-19.9V91.7H58.5v-4.4h41.1c13.1 0 24.6-7.9 24.6-24.2 0-16.2-10.3-23.9-23.4-23.9h-7.4v11.4c0 13.3-11.4 24.2-24.6 24.2H38v16.9c0 12.7 10.7 20.5 26.3 20.5zm13.4-9.3c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"/>
    </svg>
  );
}

export function JavaScriptLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 630 630">
      <rect width="630" height="630" fill="#F7DF1E" rx="80" />
      <path d="m423.2 492.2c12.7 20.7 29.2 35.9 58.4 35.9 24.5 0 40.2-12.3 40.2-29.2 0-20.3-16.1-27.5-43.2-39.4l-14.8-6.4c-42.7-18.2-71.1-41-71.1-89.7 0-44.4 33.9-78.3 86.8-78.3 37.7 0 64.8 13.1 84.2 47.4l-46.1 29.6c-10.2-18.2-21.2-25.4-38.1-25.4-17.4 0-28.4 11-28.4 25.4 0 17.8 11 24.9 36.4 35.9l14.8 6.4c49.9 21.6 78.7 43.6 78.7 93.1 0 53.3-41.9 82.5-98.2 82.5-55 0-89.7-27.1-107.5-62.2zm-209.9 5.5c8.9 15.7 16.9 28.8 36 28.8 18.2 0 29.6-7.2 29.6-35.1v-200.7h59.7v201.5c0 60.5-35.1 87.6-88.5 87.6-47.4 0-74.9-24.5-89.7-56.7z"/>
    </svg>
  );
}

export function SqlLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="14" rx="22" ry="7" fill="#336791" stroke="#68B6E8" strokeWidth="2.5"/>
      <path d="M10 14v16c0 3.86 9.85 7 22 7s22-3.14 22-7V14" fill="#295172" stroke="#68B6E8" strokeWidth="2.5"/>
      <path d="M10 30v16c0 3.86 9.85 7 22 7s22-3.14 22-7V30" fill="#1C3852" stroke="#68B6E8" strokeWidth="2.5"/>
    </svg>
  );
}

export function ReactLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function Html5Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512">
      <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/>
      <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z"/>
      <path fill="#EBEBEB" d="M256 208h-74l-5-58h79V94H114l16 172h126v-58zm0 147l-1 1-63-17-4-45h-56l7 89 116 32 1-60z"/>
      <path fill="#FFF" d="M256 208v-58h129l-12 135-117 33v-61l63-17 5-59H256zm0-114v56h140l5-56H256z"/>
    </svg>
  );
}

export function Css3Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512">
      <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z"/>
      <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z"/>
      <path fill="#EBEBEB" d="M256 208h-60l4 45h56v56h-66l-4-45h-56l8 101 118 33v-60l-63-17-3-33h66v-80z"/>
      <path fill="#FFF" d="M256 94v56h134l-5 58H256v56h71l-7 74-64 17v60l118-33 16-172 6-56H256z"/>
    </svg>
  );
}

export function NodejsLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path fill="#539E43" d="M16 2.3L2.6 10v12L16 29.7 29.4 22V10L16 2.3zm0 2.4l11.3 6.5v10.5L16 27.3 4.7 21.7V11.2L16 4.7z"/>
      <path fill="#539E43" d="M12.5 14.5c-.3-.2-.7-.3-1.2-.3-.8 0-1.5.4-1.5 1.2 0 1.5 3.3 1.2 3.3 3.6 0 1.5-1.2 2.3-2.6 2.3-1 0-1.8-.4-2.2-.8l.6-1.1c.4.3 1 .6 1.6.6.7 0 1.2-.3 1.2-.9 0-1.5-3.3-1.1-3.3-3.6 0-1.4 1.1-2.4 2.6-2.4.9 0 1.5.3 1.9.6l-.4 1.2zm6.2 6.6h-1.4v-8.4h1.4v8.4zm5.5-2.2c0 1.4-1 2.3-2.5 2.3-.9 0-1.6-.3-2-.7l.6-1c.4.3.9.5 1.4.5.7 0 1.1-.4 1.1-1.1v-5.2h1.4v5.2z"/>
    </svg>
  );
}

export function FastApiLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="60" fill="#05998B"/>
      <path d="M68 22L36 72h24l-8 34 36-52H62l6-32z" fill="#FFFFFF"/>
    </svg>
  );
}

export function RestApiLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5"/>
      <text x="32" y="38" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle">API</text>
    </svg>
  );
}

export function NlpLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4.54z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4.54z"/>
    </svg>
  );
}

export function VaderLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" fill="#10B981"/>
      <circle cx="23" cy="27" r="4" fill="#064E3B"/>
      <circle cx="41" cy="27" r="4" fill="#064E3B"/>
      <path d="M22 38c3 5 17 5 20 0" stroke="#064E3B" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

export function TextBlobLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M32 6C16 6 8 18 8 32s10 26 24 26 24-12 24-26S48 6 32 6z" fill="#EC4899"/>
      <circle cx="24" cy="28" r="4" fill="#FFFFFF"/>
      <circle cx="40" cy="28" r="4" fill="#FFFFFF"/>
      <ellipse cx="32" cy="40" rx="6" ry="3" fill="#FFFFFF"/>
    </svg>
  );
}

export function TransformersLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" fill="#FFD21E"/>
      <circle cx="23" cy="26" r="3.5" fill="#1E293B"/>
      <circle cx="41" cy="26" r="3.5" fill="#1E293B"/>
      <path d="M22 37c2.5 4 17.5 4 20 0" stroke="#1E293B" strokeWidth="3" strokeLinecap="round"/>
      <path d="M12 24c2 0 4 3 4 5s-2 5-4 5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M52 24c-2 0-4 3-4 5s2 5 4 5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function OpenRouterLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" rx="14" fill="#3B82F6"/>
      <path d="M20 22l12 10-12 10" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 22l12 10-12 10" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function GitLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128">
      <path fill="#F05032" d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L42.2 16c4.7 3.9 7.7 9.8 7.7 16.4 0 5-1.7 9.5-4.6 13.2l12.4 12.4c3.6-2.9 8.2-4.6 13.2-4.6 11.9 0 21.5 9.6 21.5 21.5 0 5-1.7 9.5-4.6 13.2l12.6 12.6c3.6-2.9 8.2-4.6 13.2-4.6 11.9 0 21.5 9.6 21.5 21.5 0 11.9-9.6 21.5-21.5 21.5-11.9 0-21.5-9.6-21.5-21.5 0-5 1.7-9.5 4.6-13.2L64.2 81.9c-3.6 2.9-8.2 4.6-13.2 4.6-9.7 0-18-6.4-20.7-15.3L16 85.5c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l38.8-38.8c4.4-4.4 4.4-11.5 0-15.9z"/>
      <circle cx="34.8" cy="32.4" r="10.8" fill="#F05032"/>
    </svg>
  );
}

export function RenderLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" rx="14" fill="#000000" stroke="#46E3B7" strokeWidth="2"/>
      <path d="M18 46V18h14c7.7 0 14 6.3 14 14s-6.3 14-14 14H18z" fill="#46E3B7"/>
      <circle cx="32" cy="32" r="5" fill="#000000"/>
    </svg>
  );
}

export function VercelLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 115 100" fill="#FFFFFF">
      <path d="M57.5 0L115 100H0z"/>
    </svg>
  );
}
