import React from 'react';

interface BoltLogoProps {
  className?: string;
  size?: number;
}

const BoltLogo: React.FC<BoltLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bolt B Logo - Stylized lightning bolt forming a B */}
      <defs>
        <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>
      
      {/* Main B shape with lightning bolt styling */}
      <path
        d="M4 2h8c3.314 0 6 2.686 6 6 0 1.657-.672 3.157-1.757 4.243A5.98 5.98 0 0 1 18 16c0 3.314-2.686 6-6 6H4V2z"
        fill="url(#boltGradient)"
        fillOpacity="0.9"
      />
      
      {/* Lightning bolt accent */}
      <path
        d="M8 2L14 8H10L12 14L6 8H10L8 2Z"
        fill="white"
        fillOpacity="0.9"
      />
      
      {/* Inner B structure */}
      <path
        d="M7 5h4c1.105 0 2 .895 2 2s-.895 2-2 2H7V5z"
        fill="white"
        fillOpacity="0.3"
      />
      <path
        d="M7 11h5c1.105 0 2 .895 2 2s-.895 2-2 2H7v-4z"
        fill="white"
        fillOpacity="0.3"
      />
      
      {/* Highlight effects */}
      <path
        d="M4 2h2v20H4V2z"
        fill="white"
        fillOpacity="0.2"
      />
      
      {/* Electric spark effects */}
      <circle cx="16" cy="6" r="1" fill="#FDE047" fillOpacity="0.8" />
      <circle cx="18" cy="10" r="0.5" fill="#F59E0B" fillOpacity="0.8" />
      <circle cx="15" cy="18" r="0.8" fill="#EF4444" fillOpacity="0.6" />
    </svg>
  );
};

export default BoltLogo;