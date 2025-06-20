import React, { createContext, useContext } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimationContext = createContext();

export const ScrollAnimationProvider = ({ children }) => {
  const getAnimatedControls = ({
    direction = "right",
    delay = 0,
    animationType = "easeOut", // ✅ fixed typo
  }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });

    // Initial animation: offscreen based on direction
    const initial = {
      opacity: 0,
      x: direction === "right" ? 30 : direction === "left" ? -30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    };

    // When in view: center and visible
    const animate = {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: animationType, delay },
    };

    // When out of view: back outside (reverse direction)
    const exit = {
      opacity: 0,
      x: direction === "right" ? -30 : direction === "left" ? 30 : 0,
      y: direction === "up" ? -30 : direction === "down" ? 30 : 0,
      transition: { duration: 0.8, ease: animationType },
    };

    return { ref, controls, initial, animate, exit, inView };
  };

  return (
    <ScrollAnimationContext.Provider value={{ getAnimatedControls }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};

export const useScrollAnimation = () => useContext(ScrollAnimationContext);
