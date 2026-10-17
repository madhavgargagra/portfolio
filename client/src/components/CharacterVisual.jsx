import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * CharacterVisual Component
 * 
 * Renders an artistic, cinematic editorial portrait corresponding to the 4 superhero themes
 * and 3 perspective stages (left-profile, front-facing, right-profile).
 * 
 * Includes slots for user-provided custom artwork with automatic fallback to bespoke SVG vectors.
 */

export default function CharacterVisual({ project, activeFrameIndex, className = '' }) {
  const currentFrame = project.frames[activeFrameIndex] || project.frames[0];
  const perspective = currentFrame.perspective; // 'left' | 'front' | 'right'
  const theme = project.themeKey;

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Outer editorial frame container with reserved aspect ratio to prevent CLS */}
      <div 
        className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border transition-all duration-700 p-6 flex flex-col justify-between"
        style={{
          backgroundColor: project.colorPalette.surface,
          borderColor: project.colorPalette.border,
          boxShadow: `0 25px 50px -12px ${project.colorPalette.border}, inset 0 1px 2px rgba(255, 255, 255, 0.6)`,
        }}
      >
        {/* Subtle atmospheric ambient glow behind character */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${project.colorPalette.primaryLight} 0%, transparent 70%)`
          }}
        />

        {/* Top Header Tag */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: project.colorPalette.primary }}
            />
            <span className="font-semibold tracking-wider uppercase text-charcoal/80">
              {project.characterCodename}
            </span>
          </div>
          <span 
            className="px-2 py-0.5 rounded text-[11px] font-mono border"
            style={{
              borderColor: project.colorPalette.border,
              color: project.colorPalette.primary,
              backgroundColor: project.colorPalette.badgeBg,
            }}
          >
            {perspective.toUpperCase()} VIEW
          </span>
        </div>

        {/* Dynamic Character Artwork Canvas */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.id}-${perspective}`}
              initial={{ opacity: 0, scale: 0.96, x: perspective === 'left' ? -15 : perspective === 'right' ? 15 : 0 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {/* Check if user provided a custom image file */}
              {currentFrame.customImagePath ? (
                <img 
                  src={currentFrame.customImagePath} 
                  alt={`${project.title} - ${perspective} perspective`}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              ) : (
                /* Bespoke Vector Character Graphic Renderer */
                <ArtworkRenderer theme={theme} perspective={perspective} palette={project.colorPalette} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom perspective status indicator */}
        <div className="relative z-10 pt-3 border-t flex items-center justify-between text-[11px] font-mono text-charcoal/70"
          style={{ borderColor: project.colorPalette.border }}
        >
          <span>Frame 0{activeFrameIndex + 1} of 03</span>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((idx) => (
              <span 
                key={idx}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: activeFrameIndex === idx ? '18px' : '6px',
                  backgroundColor: activeFrameIndex === idx ? project.colorPalette.primary : 'rgba(37, 37, 34, 0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Editorial Vector Character Portraits
 * High-craft SVG representations for all 4 superhero themes across 3 angles.
 */
function ArtworkRenderer({ theme, perspective, palette }) {
  // Rotational transform angle for SVG visual cues
  const rotateY = perspective === 'left' ? -18 : perspective === 'right' ? 18 : 0;
  const shiftX = perspective === 'left' ? -12 : perspective === 'right' ? 12 : 0;

  switch (theme) {
    case 'iron':
      return (
        <svg viewBox="0 0 240 280" className="w-full max-h-[250px] drop-shadow-lg" fill="none">
          <g transform={`translate(${shiftX}, 0)`}>
            {/* Iron Vanguard Helmet / Bust */}
            <path 
              d={perspective === 'left' 
                ? "M75 50 Q120 30 160 55 L175 120 Q160 200 115 220 L80 180 Z"
                : perspective === 'right'
                ? "M165 50 Q120 30 80 55 L65 120 Q80 200 125 220 L160 180 Z"
                : "M60 65 Q120 30 180 65 L175 145 Q120 230 65 145 Z"
              }
              fill={palette.primary} 
              stroke={palette.accent}
              strokeWidth="2.5"
            />
            {/* Faceplate in Champagne Gold */}
            <path 
              d={perspective === 'left'
                ? "M90 75 Q130 65 155 85 L160 140 Q135 185 105 170 Z"
                : perspective === 'right'
                ? "M150 75 Q110 65 85 85 L80 140 Q105 185 135 170 Z"
                : "M80 80 Q120 65 160 80 L150 160 Q120 195 90 160 Z"
              }
              fill={palette.accent}
              stroke={palette.primaryDark || '#601217'}
              strokeWidth="2"
            />
            {/* Luminous Eye Visor */}
            <polygon 
              points={perspective === 'left'
                ? "105,108 145,112 140,118 108,114"
                : perspective === 'right'
                ? "135,108 95,112 100,118 132,114"
                : "92,110 115,112 113,117 93,115"
              } 
              fill="#FFFFFF" 
              stroke="#FAF7F2" 
              strokeWidth="1.5"
            />
            {perspective === 'front' && (
              <polygon points="148,110 125,112 127,117 147,115" fill="#FFFFFF" stroke="#FAF7F2" strokeWidth="1.5" />
            )}
            {/* Arc Core Emblem */}
            <circle cx={120 + shiftX} cy="235" r="16" fill="#FAF7F2" stroke={palette.accent} strokeWidth="3" />
            <circle cx={120 + shiftX} cy="235" r="9" fill={palette.primary} />
            <circle cx={120 + shiftX} cy="235" r="4" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 'batman':
      return (
        <svg viewBox="0 0 240 280" className="w-full max-h-[250px] drop-shadow-lg" fill="none">
          <g transform={`translate(${shiftX}, 0)`}>
            {/* Pointed Cowl Ears */}
            <polygon 
              points={perspective === 'left'
                ? "65,20 85,70 100,65"
                : perspective === 'right'
                ? "175,20 155,70 140,65"
                : "60,25 78,80 92,72"
              }
              fill={palette.primary}
              stroke={palette.accent}
              strokeWidth="2"
            />
            {perspective === 'front' && (
              <polygon points="180,25 162,80 148,72" fill={palette.primary} stroke={palette.accent} strokeWidth="2" />
            )}
            {/* Graphite Helmet Structure */}
            <path 
              d={perspective === 'left'
                ? "M75 60 Q120 45 160 70 L170 155 Q140 215 105 200 L80 160 Z"
                : perspective === 'right'
                ? "M165 60 Q120 45 80 70 L70 155 Q100 215 135 200 L160 160 Z"
                : "M65 70 Q120 45 175 70 L165 165 Q120 220 75 165 Z"
              }
              fill={palette.primary}
              stroke="#5A5D66"
              strokeWidth="2.5"
            />
            {/* Slitted White Lenses */}
            <polygon 
              points={perspective === 'left'
                ? "105,105 138,110 132,116 108,112"
                : perspective === 'right'
                ? "135,105 102,110 108,116 132,112"
                : "88,106 112,110 110,115 90,111"
              }
              fill="#FFFFFF"
              stroke="#CED4DA"
              strokeWidth="1.5"
            />
            {perspective === 'front' && (
              <polygon points="152,106 128,110 130,115 150,111" fill="#FFFFFF" stroke="#CED4DA" strokeWidth="1.5" />
            )}
            {/* Tactical Chest Emblem */}
            <path 
              d="M100 225 L120 218 L140 225 L132 238 L120 232 L108 238 Z"
              fill={palette.accent}
            />
          </g>
        </svg>
      );

    case 'hulk':
      return (
        <svg viewBox="0 0 240 280" className="w-full max-h-[250px] drop-shadow-lg" fill="none">
          <g transform={`translate(${shiftX}, 0)`}>
            {/* Muscular Colossus Silhouette */}
            <path 
              d={perspective === 'left'
                ? "M60 55 Q120 35 170 60 L180 165 Q145 235 95 210 L65 155 Z"
                : perspective === 'right'
                ? "M180 55 Q120 35 70 60 L60 165 Q95 235 145 210 L175 155 Z"
                : "M50 65 Q120 30 190 65 L175 175 Q120 240 65 175 Z"
              }
              fill={palette.primary}
              stroke={palette.accent}
              strokeWidth="3"
            />
            {/* Angular Brow & Jaw */}
            <path 
              d={perspective === 'left'
                ? "M80 85 Q130 75 160 95 L155 150 Q130 180 100 165 Z"
                : perspective === 'right'
                ? "M160 85 Q110 75 80 95 L85 150 Q110 180 140 165 Z"
                : "M75 90 Q120 80 165 90 L155 165 Q120 195 85 165 Z"
              }
              fill="#1B3A28"
              stroke={palette.primary}
              strokeWidth="2"
            />
            {/* Intense Emerald Eyes */}
            <circle cx={perspective === 'left' ? 125 : perspective === 'right' ? 115 : 100} cy="112" r="5" fill="#A3E635" />
            {perspective === 'front' && <circle cx="140" cy="112" r="5" fill="#A3E635" />}
            {/* Gamma Core Lines */}
            <path d="M100 220 Q120 205 140 220 L135 240 Q120 230 105 240 Z" fill={palette.accent} opacity="0.8" />
          </g>
        </svg>
      );

    case 'superman':
      return (
        <svg viewBox="0 0 240 280" className="w-full max-h-[250px] drop-shadow-lg" fill="none">
          <g transform={`translate(${shiftX}, 0)`}>
            {/* Regal Chiseled Profile */}
            <path 
              d={perspective === 'left'
                ? "M75 50 Q120 30 165 55 L170 145 Q140 215 105 200 L75 155 Z"
                : perspective === 'right'
                ? "M165 50 Q120 30 75 55 L70 145 Q100 215 135 200 L165 155 Z"
                : "M65 60 Q120 35 175 60 L165 155 Q120 225 75 155 Z"
              }
              fill={palette.primary}
              stroke={palette.accent}
              strokeWidth="2.5"
            />
            {/* Solar Crest Shield on Chest */}
            <polygon 
              points="120,195 145,210 135,240 105,240 95,210"
              fill={palette.accent}
              stroke="#C7A052"
              strokeWidth="2"
            />
            {/* Diamond S symbol element */}
            <path 
              d="M110 212 Q120 206 130 212 Q120 222 110 226 Q125 230 130 235"
              stroke={palette.primary}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Eyes */}
            <line 
              x1={perspective === 'left' ? 105 : perspective === 'right' ? 120 : 92} 
              y1="108" 
              x2={perspective === 'left' ? 130 : perspective === 'right' ? 145 : 112} 
              y2="109" 
              stroke="#FAF7F2" 
              strokeWidth="3" 
            />
            {perspective === 'front' && (
              <line x1="128" y1="109" x2="148" y2="108" stroke="#FAF7F2" strokeWidth="3" />
            )}
          </g>
        </svg>
      );

    default:
      return null;
  }
}
