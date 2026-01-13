import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NoiseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    
    const noise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const maxDist = Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2;

      for (let i = 0; i < data.length; i += 4) {
        const pixelIndex = i / 4;
        const px = pixelIndex % canvas.width;
        const py = Math.floor(pixelIndex / canvas.width);
        
        // Distance from mouse
        const dx = px - mouseX;
        const dy = py - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 300);
        
        // Animated noise with mouse influence
        const noiseValue = Math.random() * 15 + influence * 10;
        
        // Subtle wave pattern
        const wave = Math.sin(time * 0.001 + px * 0.01 + py * 0.01) * 3;
        
        const finalValue = noiseValue + wave;
        
        data[i] = finalValue;     // R
        data[i + 1] = finalValue; // G
        data[i + 2] = finalValue; // B
        data[i + 3] = 25 + influence * 15; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
      time++;
      animationRef.current = requestAnimationFrame(noise);
    };

    noise();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'overlay' }}
      />
      {/* Gradient overlays */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 80% at 20% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 80% at 80% 80%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 80% at 20% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
};

export default NoiseBackground;
