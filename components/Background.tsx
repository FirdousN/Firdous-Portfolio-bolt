'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined' && !vantaEffect) {
      // Dynamically load the Vanta Birds module
      import('vanta/dist/vanta.birds.min').then((VantaBIRDS) => {
        const effect = VantaBIRDS.default({
          el: containerRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: theme === 'dark' ? 0x0f1729 : 0xffffff,
          color1: theme === 'dark' ? 0x6366f1 : 0x818cf8,
          color2: theme === 'dark' ? 0x3b82f6 : 0x60a5fa,
          colorMode: 'variance',
          birdSize: 1.2,
          wingSpan: 20.0,
          separation: 50.0,
          alignment: 1.0,
          cohesion: 50.0,
          quantity: 3.0,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [theme, vantaEffect]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
    />
  );
}
