import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      // If hovering over interactive elements, expand the cursor
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(245, 158, 11, 0.2)", // Amber color matching theme
      border: "1px solid rgba(245, 158, 11, 0.5)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(245, 158, 11, 0.1)",
      border: "2px solid rgba(245, 158, 11, 0.8)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default CustomCursor;
