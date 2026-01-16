import { useState, useEffect, useRef, useCallback } from "react";

import useMobile from "../hooks/useMobile";

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobile();
  const glowRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  // Smooth lerp animation
  const animate = useCallback(() => {
    const lerp = 0.1; // Smoothing factor (0.05 = very smooth, 0.2 = more responsive)

    currentPosition.current.x +=
      (targetPosition.current.x - currentPosition.current.x) * lerp;
    currentPosition.current.y +=
      (targetPosition.current.y - currentPosition.current.y) * lerp;

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Disable effect on mobile devices
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, isVisible, animate]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-0 will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-out",
      }}
    >
      {/* Main glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.06) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default CursorGlow;
