import React from 'react';

/**
 * CosmicButton — Warm Stellar Galaxy Button (Star Burst Theme)
 * Features:
 * - Rounded pill shape
 * - Dark space background (#100B08 / #160E0B)
 * - Swirling stellar orange/amber galaxy nebula (#EA9162 / #F2B08E - ZERO PURPLE)
 * - Twinkling starfield layer (#FFFFFF, #FFD2BE, #EA9162)
 * - Streaking shooting star animation with #EA9162 glow
 * - Glowing aura with warm stellar bloom
 * - Scale-up and smooth hover transitions
 */
export const CosmicButton = ({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon = null,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
  title = '',
  ...props
}) => {
  // Sizing definitions
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5 font-semibold'
  };

  // Border & Glow based on Star Burst warm palette
  const variantStyles = {
    primary:
      'border-[rgba(234,145,98,0.35)] hover:border-[#EA9162] text-white shadow-[0_0_20px_rgba(234,145,98,0.25)] hover:shadow-[0_0_35px_rgba(234,145,98,0.45),0_0_65px_rgba(242,176,142,0.25)]',
    secondary:
      'border-[rgba(234,145,98,0.20)] hover:border-[rgba(234,145,98,0.50)] text-[#F5EDE8] hover:text-white shadow-[0_0_15px_rgba(16,11,8,0.6)] hover:shadow-[0_0_25px_rgba(234,145,98,0.20)]',
    outline:
      'border-[#EA9162] hover:border-[#FFD2BE] text-[#EA9162] hover:text-white hover:bg-[rgba(234,145,98,0.12)] shadow-[0_0_15px_rgba(234,145,98,0.20)]',
    ghost:
      'border-transparent hover:border-[rgba(234,145,98,0.35)] text-[#C7B8B0] hover:text-white hover:bg-[#160E0B]/60'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        relative group overflow-hidden rounded-full font-sans tracking-wide
        inline-flex items-center justify-center select-none cursor-pointer
        transform-gpu transition-all duration-300 ease-out
        hover:scale-[1.03] active:scale-[0.97]
        disabled:opacity-40 disabled:pointer-events-none disabled:transform-none
        border backdrop-blur-md
        ${sizeClasses[size] || sizeClasses.md}
        ${variantStyles[variant] || variantStyles.primary}
        ${className}
      `}
      {...props}
    >
      {/* Base Space Dark Foundation */}
      <div className="absolute inset-0 bg-[#100B08] z-0" />

      {/* Rotating Warm Stellar Galaxy Nebula Layer */}
      <div
        className="absolute -inset-[100%] z-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(234, 145, 98, 0.38) 0%, rgba(242, 176, 142, 0.22) 28%, rgba(22, 14, 11, 0.85) 55%, transparent 70%)',
          animation: 'cosmicGalaxyRotate 12s linear infinite'
        }}
      />

      {/* Secondary Stellar Glow Cloud */}
      <div
        className="absolute -inset-[50%] z-1 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 40% 60%, rgba(255, 210, 190, 0.25) 0%, rgba(234, 145, 98, 0.18) 35%, transparent 60%)',
          animation: 'cosmicGalaxyRotate 18s linear infinite reverse'
        }}
      />

      {/* Star Particles Layer (#FFFFFF, #FFD2BE, #EA9162) */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        <span className="absolute top-[22%] left-[15%] w-[1.5px] h-[1.5px] rounded-full bg-white opacity-85 group-hover:animate-ping" />
        <span className="absolute top-[68%] left-[28%] w-[2px] h-[2px] rounded-full bg-[#EA9162] opacity-90 shadow-[0_0_4px_#EA9162]" />
        <span className="absolute top-[30%] right-[22%] w-[1.5px] h-[1.5px] rounded-full bg-white opacity-75" />
        <span className="absolute top-[75%] right-[18%] w-[2px] h-[2px] rounded-full bg-[#FFD2BE] opacity-85 shadow-[0_0_5px_#FFD2BE]" />
        <span className="absolute top-[45%] left-[52%] w-[1px] h-[1px] rounded-full bg-white opacity-60" />
        <span className="absolute top-[18%] right-[42%] w-[1.5px] h-[1.5px] rounded-full bg-[#EA9162] opacity-80" />
      </div>

      {/* Animated Shooting Star Trail (#FFFFFF with #EA9162 glow) */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[60px] h-[1.5px] -top-1 left-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,210,190,0.85) 40%, rgba(234,145,98,0) 100%)',
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(234, 145, 98, 0.65)',
            animation: 'shootingStarTravel 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite'
          }}
        />
      </div>

      {/* Subtle Inner Lens Ring */}
      <div className="absolute inset-[1px] rounded-full border border-white/10 z-3 pointer-events-none group-hover:border-[rgba(234,145,98,0.4)] transition-colors duration-300" />

      {/* Button Foreground Label & Icon */}
      <span className="relative z-10 flex items-center justify-center font-medium tracking-wide text-white drop-shadow-[0_1px_3px_rgba(8,7,6,0.9)]">
        {icon && iconPosition === 'left' && (
          <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-0.5 text-[#EA9162] group-hover:text-white">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#EA9162] group-hover:text-white">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default CosmicButton;
