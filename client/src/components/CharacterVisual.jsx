import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * CharacterVisual Component
 * 
 * Large-scale, waist-up comic-book editorial character presence.
 * Occupies a substantial part of the desktop viewport (half-body/waist-up).
 * 
 * Automatically attempts to load custom hand-drawn transparent PNG/WebP files
 * from /characters/[key]-[perspective].png.
 * If the file is not yet placed, it displays a hand-drawn comic-book style
 * vector illustration with expressive ink linework, crosshatching, and watercolor shading.
 */
export default function CharacterVisual({ project, activeFrameIndex = 0, className = '' }) {
  const currentFrame = project.frames[activeFrameIndex] || project.frames[0];
  const perspective = currentFrame.perspective; // 'left' | 'front' | 'right'
  const characterKey = project.characterKey;
  const palette = project.colorPalette;

  // Track if custom external image failed to load, so we safely render the comic vector artwork
  const [imgFailed, setImgFailed] = useState(false);

  const perspectiveLabel = 
    perspective === 'left' ? 'Left 3/4 Profile' :
    perspective === 'front' ? 'Front-Facing Stance' :
    'Right 3/4 Profile';

  return (
    <div className={`relative w-full flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* Editorial Art Canvas Plate - Substantial Viewport Presence */}
      <div className="relative w-full max-w-[540px] h-[520px] sm:h-[580px] lg:h-[640px] rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-all duration-700">
        
        {/* Atmospheric Backlight linked to character palette */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-40 blur-[80px]"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${palette.primaryLight} 0%, ${palette.accent} 45%, transparent 75%)`
          }}
        />

        {/* Framing Hairlines & Corner Registration Marks (Awwwards Editorial Finish) */}
        <div className="absolute inset-4 pointer-events-none border border-[#252522]/10 rounded-2xl" />
        <div className="absolute top-2 left-2 text-[9px] font-mono text-[#252522]/40 tracking-widest uppercase">
          {project.characterCodename} &bull; Vol. {project.themeKey.toUpperCase()}
        </div>
        <div className="absolute top-2 right-2 text-[9px] font-mono text-[#252522]/40 tracking-widest uppercase">
          FIG. 0{activeFrameIndex + 1}
        </div>

        {/* Top Header Information Tag */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span 
              className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
              style={{ backgroundColor: palette.primary }}
            />
            <span className="font-bold text-sm tracking-wide text-[#252522]">
              {project.characterName}
            </span>
          </div>

          <span 
            className="px-3 py-1 rounded-full text-xs font-mono font-medium border shadow-xs transition-colors duration-500"
            style={{
              borderColor: palette.border,
              backgroundColor: palette.surface,
              color: palette.primary,
            }}
          >
            {perspectiveLabel.toUpperCase()}
          </span>
        </div>

        {/* Center: Large Waist-Up Character Canvas */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-2 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${characterKey}-${perspective}`}
              initial={{ 
                opacity: 0, 
                scale: 0.94,
                x: perspective === 'left' ? -25 : perspective === 'right' ? 25 : 0 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.04,
                x: perspective === 'left' ? 20 : perspective === 'right' ? -20 : 0
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {/* Attempt loading custom user image first, fallback to hand-drawn vector */}
              {!imgFailed && currentFrame.assetPath ? (
                <img
                  src={currentFrame.assetPath}
                  alt={`${project.characterName} - ${perspectiveLabel}`}
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              ) : (
                <HandDrawnComicArtwork 
                  characterKey={characterKey} 
                  perspective={perspective} 
                  palette={palette} 
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Framing Status: Scroll-driven progress cues */}
        <div className="relative z-10 pt-3 border-t border-[#252522]/10 flex items-center justify-between text-xs font-mono text-[#252522]/70">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A052]" />
            <span>Perspective Angle {activeFrameIndex + 1}/3</span>
          </div>
          <div className="flex items-center gap-1.5">
            {['LEFT', 'FRONT', 'RIGHT'].map((pLabel, pIdx) => (
              <span
                key={pLabel}
                className="px-2 py-0.5 rounded text-[10px] font-mono transition-all duration-300"
                style={{
                  backgroundColor: activeFrameIndex === pIdx ? palette.primary : 'rgba(37, 37, 34, 0.08)',
                  color: activeFrameIndex === pIdx ? '#FFFFFF' : '#252522',
                  fontWeight: activeFrameIndex === pIdx ? 700 : 400,
                }}
              >
                {pLabel}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

/**
 * HandDrawnComicArtwork
 * 
 * High-detail, waist-up comic-book editorial illustrations with detailed linework,
 * visible crosshatching shading, watercolor textures, and anatomical waist-up armor/physique.
 */
function HandDrawnComicArtwork({ characterKey, perspective, palette }) {
  // Perspective-based rotation & horizontal lean
  const isLeft = perspective === 'left';
  const isRight = perspective === 'right';

  switch (characterKey) {
    case 'ironman':
      return (
        <svg viewBox="0 0 500 600" className="w-full h-full max-h-[560px] drop-shadow-2xl" fill="none">
          <defs>
            <linearGradient id="ironCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A62626" />
              <stop offset="50%" stopColor="#8B1E24" />
              <stop offset="100%" stopColor="#5E1115" />
            </linearGradient>
            <linearGradient id="ironGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6C875" />
              <stop offset="60%" stopColor="#C7A052" />
              <stop offset="100%" stopColor="#8C6E2E" />
            </linearGradient>
            <radialGradient id="arcGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#E0F2FE" />
              <stop offset="80%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
            <pattern id="crosshatch" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 8L8 0M0 0L8 8" stroke="#252522" strokeWidth="0.75" strokeOpacity="0.25" />
            </pattern>
          </defs>

          <g transform={isLeft ? 'translate(-20, 0)' : isRight ? 'translate(20, 0)' : 'translate(0, 0)'}>
            {/* Broad Torso & Waist Armor (Waist-up) */}
            <path 
              d={isLeft 
                ? "M170 320 L130 540 L370 540 L350 320 Z" 
                : isRight 
                ? "M150 320 L130 540 L370 540 L330 320 Z"
                : "M160 310 L130 550 L370 550 L340 310 Z"
              }
              fill="url(#ironCrimson)" 
              stroke="#252522" 
              strokeWidth="4" 
            />
            {/* Crosshatch ink shadows on abdominal plating */}
            <path 
              d="M180 340 L160 520 L340 520 L320 340 Z" 
              fill="url(#crosshatch)" 
              opacity="0.6" 
            />

            {/* Massive Muscular Shoulders / Pauldrons */}
            {/* Left Shoulder */}
            <path 
              d={isLeft 
                ? "M140 180 C80 180 50 240 60 300 C70 360 140 370 180 340 Z"
                : isRight 
                ? "M160 190 C120 190 90 230 100 280 C110 330 160 340 190 320 Z"
                : "M150 180 C90 180 60 230 70 300 C80 360 150 370 190 330 Z"
              }
              fill="url(#ironCrimson)" 
              stroke="#252522" 
              strokeWidth="4" 
            />
            {/* Right Shoulder */}
            <path 
              d={isLeft 
                ? "M340 190 C380 190 410 230 400 280 C390 330 340 340 310 320 Z"
                : isRight 
                ? "M360 180 C420 180 450 240 440 300 C430 360 360 370 320 340 Z"
                : "M350 180 C410 180 440 230 430 300 C420 360 350 370 310 330 Z"
              }
              fill="url(#ironCrimson)" 
              stroke="#252522" 
              strokeWidth="4" 
            />

            {/* Pectoral Armor Plates in Crimson & Champagne Gold */}
            <path 
              d={isLeft
                ? "M160 210 L190 330 L310 330 L340 210 Q250 220 160 210 Z"
                : isRight
                ? "M160 210 L190 330 L310 330 L340 210 Q250 220 160 210 Z"
                : "M150 200 L180 330 L320 330 L350 200 Q250 220 150 200 Z"
              }
              fill="url(#ironCrimson)"
              stroke="#252522"
              strokeWidth="3.5"
            />
            {/* Gold Collar Insets */}
            <path 
              d="M200 170 L250 210 L300 170 Q250 160 200 170 Z"
              fill="url(#ironGold)"
              stroke="#252522"
              strokeWidth="3"
            />

            {/* Central Arc Reactor Core (Waist-Up focal point) */}
            <g transform={isLeft ? 'translate(-15, 0)' : isRight ? 'translate(15, 0)' : 'translate(0, 0)'}>
              <circle cx="250" cy="275" r="32" fill="#FAF7F2" stroke="#252522" strokeWidth="4" />
              <circle cx="250" cy="275" r="26" fill="url(#arcGlow)" />
              <circle cx="250" cy="275" r="14" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
              {/* Triangular inner housing */}
              <polygon points="250,263 260,283 240,283" stroke="#0284C7" strokeWidth="2.5" fill="none" />
            </g>

            {/* Helmet & Faceplate (3 Perspectives) */}
            {/* Helmet Base Dome */}
            <path 
              d={isLeft
                ? "M190 80 Q250 40 310 75 Q340 120 335 180 Q270 230 195 190 Q170 140 190 80 Z"
                : isRight
                ? "M310 80 Q250 40 190 75 Q160 120 165 180 Q230 230 305 190 Q330 140 310 80 Z"
                : "M180 75 Q250 40 320 75 Q350 120 340 185 Q250 235 160 185 Q150 120 180 75 Z"
              }
              fill="url(#ironCrimson)"
              stroke="#252522"
              strokeWidth="4"
            />

            {/* Sculpted Gold Faceplate */}
            <path 
              d={isLeft
                ? "M205 95 Q265 75 305 100 L305 155 Q270 195 220 185 L205 130 Z"
                : isRight
                ? "M295 95 Q235 75 195 100 L195 155 Q230 195 280 185 L295 130 Z"
                : "M200 95 Q250 80 300 95 L295 160 Q250 200 205 160 Z"
              }
              fill="url(#ironGold)"
              stroke="#252522"
              strokeWidth="3.5"
            />

            {/* Expressive Eye Visor Slits */}
            {isLeft ? (
              <polygon points="225,128 285,135 280,143 230,137" fill="#E0F2FE" stroke="#252522" strokeWidth="2.5" />
            ) : isRight ? (
              <polygon points="275,128 215,135 220,143 270,137" fill="#E0F2FE" stroke="#252522" strokeWidth="2.5" />
            ) : (
              <>
                <polygon points="215,128 243,132 240,138 218,136" fill="#E0F2FE" stroke="#252522" strokeWidth="2" />
                <polygon points="285,128 257,132 260,138 282,136" fill="#E0F2FE" stroke="#252522" strokeWidth="2" />
              </>
            )}

            {/* Hand-Drawn Ink Linework and Crosshatch Contours */}
            <path d="M210 100 L240 100" stroke="#252522" strokeWidth="2" />
            <path d="M260 100 L290 100" stroke="#252522" strokeWidth="2" />
            <path d="M250 150 L250 170" stroke="#252522" strokeWidth="2" />
            {/* Jaw seams */}
            <path d="M220 175 L280 175" stroke="#252522" strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'batman':
      return (
        <svg viewBox="0 0 500 600" className="w-full h-full max-h-[560px] drop-shadow-2xl" fill="none">
          <defs>
            <linearGradient id="batGraphite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#373A40" />
              <stop offset="50%" stopColor="#25262B" />
              <stop offset="100%" stopColor="#141517" />
            </linearGradient>
            <linearGradient id="batSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DDE1E5" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
            <pattern id="batHatch" width="6" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="6" x2="6" y2="0" stroke="#CED4DA" strokeWidth="0.8" strokeOpacity="0.2" />
            </pattern>
          </defs>

          <g transform={isLeft ? 'translate(-20, 0)' : isRight ? 'translate(20, 0)' : 'translate(0, 0)'}>
            {/* Dramatic Billowing Cape Base (Waist-Up Silhouette) */}
            <path 
              d={isLeft
                ? "M60 220 Q120 190 220 180 Q320 190 440 250 L460 550 L40 550 Z"
                : isRight
                ? "M440 220 Q380 190 280 180 Q180 190 60 250 L40 550 L460 550 Z"
                : "M50 200 Q250 160 450 200 L470 560 L30 560 Z"
              }
              fill="url(#batGraphite)" 
              stroke="#252522" 
              strokeWidth="4" 
            />

            {/* Armored Muscular Torso */}
            <path 
              d="M160 300 L140 550 L360 550 L340 300 Z"
              fill="#2B2D33"
              stroke="#252522"
              strokeWidth="4"
            />
            {/* Hatching shading on torso sides */}
            <path d="M160 320 L150 540 L210 540 L200 320 Z" fill="url(#batHatch)" />
            <path d="M340 320 L350 540 L290 540 L300 320 Z" fill="url(#batHatch)" />

            {/* Iconic Bat Insignia Across Chest */}
            <g transform={isLeft ? 'translate(-10, 0)' : isRight ? 'translate(10, 0)' : 'translate(0, 0)'}>
              <path 
                d="M250 260 L235 240 L220 255 L200 245 L180 270 Q215 285 250 315 Q285 285 320 270 L300 245 L280 255 L265 240 Z"
                fill="#141517"
                stroke="url(#batSilver)"
                strokeWidth="2.5"
              />
            </g>

            {/* High Cowl Collar & Neck armor */}
            <path 
              d="M190 190 L250 230 L310 190 L290 160 L210 160 Z"
              fill="#1F2024"
              stroke="#252522"
              strokeWidth="3"
            />

            {/* Chiseled Cowl & Long Sharp Bat Ears */}
            {/* Left Bat Ear */}
            <polygon 
              points={isLeft 
                ? "180,25 210,120 235,110" 
                : isRight 
                ? "195,50 220,125 240,115"
                : "185,30 215,125 240,115"
              }
              fill="#141517"
              stroke="#252522"
              strokeWidth="3.5"
            />
            {/* Right Bat Ear */}
            <polygon 
              points={isLeft 
                ? "305,50 280,125 260,115"
                : isRight 
                ? "320,25 290,120 265,110"
                : "315,30 285,125 260,115"
              }
              fill="#141517"
              stroke="#252522"
              strokeWidth="3.5"
            />

            {/* Cowl Head Structure */}
            <path 
              d={isLeft
                ? "M195 90 Q250 65 305 95 L315 175 Q275 220 215 205 L190 165 Z"
                : isRight
                ? "M305 90 Q250 65 195 95 L185 175 Q225 220 285 205 L310 165 Z"
                : "M190 85 Q250 60 310 85 L310 180 Q250 230 190 180 Z"
              }
              fill="url(#batGraphite)"
              stroke="#252522"
              strokeWidth="4"
            />

            {/* Chiseled Jaw & Grim Mouth Opening */}
            <polygon 
              points={isLeft
                ? "230,165 285,170 275,205 235,200"
                : isRight
                ? "270,165 215,170 225,205 265,200"
                : "220,165 280,165 270,205 230,205"
              }
              fill="#E8D5C4"
              stroke="#252522"
              strokeWidth="3"
            />
            {/* Mouth slit & crosshatch stubble */}
            <line x1="235" y1="188" x2="265" y2="188" stroke="#252522" strokeWidth="2.5" />

            {/* White Slitted Eyes (Fierce Tactical Lenses) */}
            {isLeft ? (
              <polygon points="220,135 260,140 252,148 225,144" fill="#FFFFFF" stroke="#252522" strokeWidth="2" />
            ) : isRight ? (
              <polygon points="280,135 240,140 248,148 275,144" fill="#FFFFFF" stroke="#252522" strokeWidth="2" />
            ) : (
              <>
                <polygon points="212,136 238,140 235,146 215,143" fill="#FFFFFF" stroke="#252522" strokeWidth="1.5" />
                <polygon points="288,136 262,140 265,146 285,143" fill="#FFFFFF" stroke="#252522" strokeWidth="1.5" />
              </>
            )}

            {/* Silver Edge Highlights (Pencil shading aesthetic) */}
            <path d="M195 90 L215 160" stroke="url(#batSilver)" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M305 90 L285 160" stroke="url(#batSilver)" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        </svg>
      );

    case 'hulk':
      return (
        <svg viewBox="0 0 500 600" className="w-full h-full max-h-[560px] drop-shadow-2xl" fill="none">
          <defs>
            <linearGradient id="hulkSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#35694A" />
              <stop offset="50%" stopColor="#264E36" />
              <stop offset="100%" stopColor="#142C1E" />
            </linearGradient>
            <pattern id="hulkMuscle" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 4 Q4 0 8 4" stroke="#142C1E" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
          </defs>

          <g transform={isLeft ? 'translate(-20, 0)' : isRight ? 'translate(20, 0)' : 'translate(0, 0)'}>
            {/* Colossal Torso & Biceps (Waist-Up Titan Presence) */}
            <path 
              d="M120 280 L90 550 L410 550 L380 280 Z"
              fill="url(#hulkSkin)"
              stroke="#252522"
              strokeWidth="4.5"
            />
            {/* Muscle striation pattern */}
            <path d="M140 320 L110 530 L390 530 L360 320 Z" fill="url(#hulkMuscle)" />

            {/* Massive Bulging Trapezius & Shoulders */}
            <path 
              d={isLeft
                ? "M110 160 C50 160 30 240 40 320 C50 400 130 410 170 360 Z"
                : isRight
                ? "M140 180 C90 180 70 240 80 320 C90 390 150 400 180 350 Z"
                : "M120 160 C50 160 30 230 40 320 C50 400 130 410 170 360 Z"
              }
              fill="url(#hulkSkin)"
              stroke="#252522"
              strokeWidth="4"
            />
            <path 
              d={isLeft
                ? "M360 180 C410 180 430 240 420 320 C410 390 350 400 320 350 Z"
                : isRight
                ? "M390 160 C450 160 470 240 460 320 C450 400 370 410 330 360 Z"
                : "M380 160 C450 160 470 230 460 320 C450 400 370 410 330 360 Z"
              }
              fill="url(#hulkSkin)"
              stroke="#252522"
              strokeWidth="4"
            />

            {/* Heavy Pectorals with Comic Book Anatomy Contours */}
            <path 
              d="M150 250 Q250 280 350 250 L340 350 Q250 380 160 350 Z"
              fill="#22422F"
              stroke="#252522"
              strokeWidth="3.5"
            />
            {/* Sternum ink line */}
            <line x1="250" y1="230" x2="250" y2="390" stroke="#252522" strokeWidth="4" />
            <path d="M190 310 Q250 330 310 310" stroke="#252522" strokeWidth="3" />

            {/* Massive Chiseled Head & Wild Hair */}
            <path 
              d={isLeft
                ? "M180 70 Q240 40 310 70 L320 180 Q270 230 190 200 L170 140 Z"
                : isRight
                ? "M320 70 Q260 40 190 70 L180 180 Q230 230 310 200 L330 140 Z"
                : "M170 70 Q250 35 330 70 L330 180 Q250 240 170 180 Z"
              }
              fill="url(#hulkSkin)"
              stroke="#252522"
              strokeWidth="4"
            />

            {/* Jagged Jet-Black Comic Hair */}
            <path 
              d="M160 80 L180 40 L210 65 L240 35 L270 65 L300 40 L330 75 L310 110 L180 110 Z"
              fill="#111814"
              stroke="#252522"
              strokeWidth="3"
            />

            {/* Intense Brow & Roaring/Determined Expression */}
            <path d="M190 120 Q250 135 310 120" stroke="#252522" strokeWidth="4" />
            <path d="M210 125 L235 132" stroke="#252522" strokeWidth="3" />
            <path d="M290 125 L265 132" stroke="#252522" strokeWidth="3" />

            {/* Glowing Gamma Green Eyes */}
            {isLeft ? (
              <circle cx="230" cy="138" r="7" fill="#A3E635" stroke="#252522" strokeWidth="2" />
            ) : isRight ? (
              <circle cx="270" cy="138" r="7" fill="#A3E635" stroke="#252522" strokeWidth="2" />
            ) : (
              <>
                <circle cx="225" cy="138" r="6" fill="#A3E635" stroke="#252522" strokeWidth="2" />
                <circle cx="275" cy="138" r="6" fill="#A3E635" stroke="#252522" strokeWidth="2" />
              </>
            )}

            {/* Powerful Jaw & Bared Teeth */}
            <path 
              d="M205 170 Q250 185 295 170 L285 200 Q250 215 215 200 Z"
              fill="#FAF7F2"
              stroke="#252522"
              strokeWidth="3"
            />
            <line x1="215" y1="185" x2="285" y2="185" stroke="#252522" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'superman':
      return (
        <svg viewBox="0 0 500 600" className="w-full h-full max-h-[560px] drop-shadow-2xl" fill="none">
          <defs>
            <linearGradient id="supBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#285C94" />
              <stop offset="50%" stopColor="#1D4570" />
              <stop offset="100%" stopColor="#102947" />
            </linearGradient>
            <linearGradient id="supRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="supGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#C7A052" />
            </linearGradient>
            <pattern id="supCapeHatch" width="6" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="6" x2="6" y2="0" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.2" />
            </pattern>
          </defs>

          <g transform={isLeft ? 'translate(-20, 0)' : isRight ? 'translate(20, 0)' : 'translate(0, 0)'}>
            {/* Flowing Regal Crimson Cape Behind Shoulders (Waist-Up) */}
            <path 
              d={isLeft
                ? "M60 210 Q140 180 230 170 Q320 180 430 230 L450 560 L50 560 Z"
                : isRight
                ? "M440 210 Q360 180 270 170 Q180 180 70 230 L50 560 L450 560 Z"
                : "M50 200 Q250 160 450 200 L470 560 L30 560 Z"
              }
              fill="url(#supRed)"
              stroke="#252522"
              strokeWidth="4"
            />
            {/* Cape crosshatching */}
            <path d="M70 230 L50 540 L160 540 L140 230 Z" fill="url(#supCapeHatch)" />

            {/* Sculpted Heroic Torso (Sky Blue Suit) */}
            <path 
              d="M150 290 L130 550 L370 550 L350 290 Z"
              fill="url(#supBlue)"
              stroke="#252522"
              strokeWidth="4"
            />

            {/* Muscular Shoulders & Arms */}
            <path 
              d="M140 180 C80 180 50 230 60 300 C70 370 140 380 180 330 Z"
              fill="url(#supBlue)"
              stroke="#252522"
              strokeWidth="4"
            />
            <path 
              d="M360 180 C420 180 450 230 440 300 C430 370 360 380 320 330 Z"
              fill="url(#supBlue)"
              stroke="#252522"
              strokeWidth="4"
            />

            {/* The Legendary Diamond Solar Crest (S-Shield) */}
            <g transform={isLeft ? 'translate(-12, 0)' : isRight ? 'translate(12, 0)' : 'translate(0, 0)'}>
              {/* Outer Diamond Shield */}
              <polygon 
                points="250,225 315,255 295,335 250,370 205,335 185,255"
                fill="url(#supGold)"
                stroke="#252522"
                strokeWidth="4"
              />
              {/* Inner Stylized S Glyphs */}
              <path 
                d="M275 250 C235 240 215 270 235 295 C255 315 285 320 275 345 C265 370 225 360 215 340"
                stroke="url(#supRed)"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* Chiseled Regal Head & Classic S-Curl Hairline */}
            <path 
              d={isLeft
                ? "M195 85 Q250 55 305 85 L310 170 Q265 220 195 195 Z"
                : isRight
                ? "M305 85 Q250 55 195 85 L190 170 Q235 220 305 195 Z"
                : "M190 80 Q250 50 310 80 L310 175 Q250 225 190 175 Z"
              }
              fill="#F2DFC9"
              stroke="#252522"
              strokeWidth="3.5"
            />

            {/* Sculpted Dark Hair with S-Curl */}
            <path 
              d="M175 90 Q250 45 325 90 L320 120 Q285 75 250 85 Q240 95 245 110 Q230 95 210 100 L180 120 Z"
              fill="#181D24"
              stroke="#252522"
              strokeWidth="3.5"
            />

            {/* Confident Heroic Gaze */}
            {isLeft ? (
              <>
                <line x1="215" y1="125" x2="250" y2="128" stroke="#252522" strokeWidth="3" />
                <circle cx="235" cy="138" r="4.5" fill="#1D4570" />
              </>
            ) : isRight ? (
              <>
                <line x1="285" y1="125" x2="250" y2="128" stroke="#252522" strokeWidth="3" />
                <circle cx="265" cy="138" r="4.5" fill="#1D4570" />
              </>
            ) : (
              <>
                <line x1="205" y1="125" x2="238" y2="128" stroke="#252522" strokeWidth="2.5" />
                <line x1="295" y1="125" x2="262" y2="128" stroke="#252522" strokeWidth="2.5" />
                <circle cx="225" cy="136" r="4" fill="#1D4570" />
                <circle cx="275" cy="136" r="4" fill="#1D4570" />
              </>
            )}

            {/* Chiseled Jawline & Confident Mouth */}
            <line x1="230" y1="180" x2="270" y2="180" stroke="#252522" strokeWidth="2.5" />
            <path d="M245 192 L255 192" stroke="#252522" strokeWidth="2" />
          </g>
        </svg>
      );

    default:
      return null;
  }
}
