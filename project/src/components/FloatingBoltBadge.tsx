import React from 'react';
import { motion } from 'framer-motion';

const FloatingBoltBadge = () => {
  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      initial={{ x: '50vw', y: '50vh' }}
      animate={{
        x: [
          '15vw', '85vw', '75vw', '25vw', '65vw', '35vw', '80vw', '20vw',
          '55vw', '45vw', '70vw', '30vw', '85vw', '15vw', '50vw'
        ],
        y: [
          '25vh', '75vh', '35vh', '65vh', '45vh', '55vh', '30vh', '70vh',
          '40vh', '60vh', '50vh', '50vh', '25vh', '75vh', '50vh'
        ],
      }}
      transition={{
        duration: 45,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        filter: 'drop-shadow(0 0 25px rgba(0, 0, 0, 0.8))',
      }}
    >
      <motion.a
        href="https://bolt.new"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto block"
        whileHover={{ 
          scale: 1.3,
          rotateY: 360,
          rotateX: 15,
          filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.9)) brightness(1.2)',
        }}
        whileTap={{ scale: 0.85 }}
        animate={{
          rotateX: [0, 10, -10, 5, -5, 0],
          rotateY: [0, 15, -15, 8, -8, 0],
          rotateZ: [0, 2, -2, 1, -1, 0],
          scale: [1, 1.05, 0.98, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative">
          {/* Multiple glowing background layers for depth */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)',
              transform: 'scale(1.8)',
            }}
            animate={{
              scale: [1.8, 2.2, 1.6, 2.0, 1.8],
              opacity: [0.4, 0.6, 0.3, 0.5, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full blur-lg opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 80%)',
              transform: 'scale(1.4)',
            }}
            animate={{
              scale: [1.4, 1.6, 1.2, 1.5, 1.4],
              opacity: [0.6, 0.8, 0.4, 0.7, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Main Bolt badge */}
          <motion.div
            className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(0, 0, 0, 0)',
                '0 0 0 4px rgba(0, 0, 0, 0.3)',
                '0 0 0 8px rgba(0, 0, 0, 0.1)',
                '0 0 0 12px rgba(0, 0, 0, 0.05)',
                '0 0 0 0 rgba(0, 0, 0, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              transform: 'translateZ(20px)',
            }}
          >
            {/* Badge image */}
            <img
              src="/white_circle_360x360.png"
              alt="Powered by Bolt"
              className="w-full h-full object-cover"
              style={{
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            />
            
            {/* Glossy overlay effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.05) 60%, rgba(0,0,0,0.1) 100%)',
              }}
              animate={{
                opacity: [0.6, 0.8, 0.4, 0.7, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Rotating highlight */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.4) 45deg, transparent 90deg, transparent 360deg)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
          
          {/* Floating sparkle effects around the badge */}
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))',
            }}
          />
          
          <motion.div
            className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-blue-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.8,
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))',
            }}
          />
          
          <motion.div
            className="absolute top-1/2 -right-3 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              scale: [0, 1.1, 0],
              opacity: [0, 1, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: 1.2,
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.8))',
            }}
          />
          
          <motion.div
            className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [-5, 0, -5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: 1.6,
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.8))',
            }}
          />
          
          {/* Orbital rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            style={{
              transform: 'scale(1.3)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1.3, 1.5, 1.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              transform: 'scale(1.6)',
            }}
            animate={{
              rotate: [360, 0],
              scale: [1.6, 1.8, 1.6],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Pulsing energy waves */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 2.5],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 2],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
            style={{
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingBoltBadge;