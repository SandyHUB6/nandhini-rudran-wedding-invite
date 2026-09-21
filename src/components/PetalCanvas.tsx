import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  swayAmplitude: number;
  swayOffset: number;
  opacity: number;
  type: 'jasmine' | 'rose' | 'gold';
}

export const PetalCanvas: React.FC<{
  active?: boolean;
  intensity?: 'gentle' | 'medium';
  className?: string;
}> = ({ active = true, intensity = 'gentle', className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Reduced count: light and subtle whisper of petals
    const count = intensity === 'gentle' ? 7 : 12;
    const petals: Petal[] = [];

    const petalTypes: ('jasmine' | 'rose' | 'gold')[] = ['jasmine', 'jasmine', 'rose', 'gold'];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 3.5, // 3.5px to 6.5px - dainty & delicate
        speedY: Math.random() * 0.25 + 0.15, // Slow, weightless drift
        speedX: Math.random() * 0.2 - 0.1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.8,
        swayAmplitude: Math.random() * 0.8 + 0.4,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.25 + 0.2, // 0.20 to 0.45 - soft & translucent
        type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time + p.swayOffset) * p.swayAmplitude + p.speedX;
        p.rotation += p.rotationSpeed;

        // Reset when fallen off screen
        if (p.y > height + 15) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x > width + 15) p.x = -15;
        if (p.x < -15) p.x = width + 15;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'jasmine') {
          // Delicate translucent Jasmine petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.65, p.size * 1.05, 0, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.7, '#FFFDF8');
          grad.addColorStop(1, '#EAE3CD');
          ctx.fillStyle = grad;
          ctx.fill();

          // Delicate pale gold center dot
          ctx.beginPath();
          ctx.arc(0, p.size * 0.35, p.size * 0.12, 0, Math.PI * 2);
          ctx.fillStyle = '#FFE680';
          ctx.fill();
        } else if (p.type === 'rose') {
          // Delicate soft crimson rose petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.7);
          ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.7, p.size * 0.9, p.size * 0.5, 0, p.size * 0.9);
          ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.5, -p.size * 0.7, -p.size * 0.7, 0, -p.size * 0.7);
          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#C23B50');
          grad.addColorStop(0.6, '#9E1C30');
          grad.addColorStop(1, '#6E0E1F');
          ctx.fillStyle = grad;
          ctx.fill();
        } else {
          // Dainty Champagne Gold Flake
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.7, Math.PI / 4, 0, Math.PI * 2);
          const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          grad.addColorStop(0, '#FFF6D6');
          grad.addColorStop(0.5, '#E5C578');
          grad.addColorStop(1, '#A07E2E');
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000 ${
        active ? 'opacity-70' : 'opacity-0'
      } ${className}`}
    />
  );
};

export default PetalCanvas;
