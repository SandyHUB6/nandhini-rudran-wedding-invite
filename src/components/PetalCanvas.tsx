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

    const count = intensity === 'gentle' ? 24 : 45;
    const petals: Petal[] = [];

    const petalTypes: ('jasmine' | 'rose' | 'gold')[] = ['jasmine', 'jasmine', 'jasmine', 'rose', 'gold'];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.7 + 0.4,
        speedX: Math.random() * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        swayAmplitude: Math.random() * 1.5 + 0.8,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.5,
        type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time + p.swayOffset) * p.swayAmplitude + p.speedX;
        p.rotation += p.rotationSpeed;

        // Reset when fallen off screen
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'jasmine') {
          // Fresh white Jasmine (Malli poo) petal with subtle ivory-green undertone
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.7, p.size * 1.1, 0, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.7, '#FFFBF0');
          grad.addColorStop(1, '#E8E1C7');
          ctx.fillStyle = grad;
          ctx.fill();

          // Tiny pale yellow center dot
          ctx.beginPath();
          ctx.arc(0, p.size * 0.4, p.size * 0.15, 0, Math.PI * 2);
          ctx.fillStyle = '#FFE680';
          ctx.fill();
        } else if (p.type === 'rose') {
          // Rich crimson South Indian rose petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size, p.size * 0.6, -p.size * 0.8, -p.size * 0.8, 0, -p.size * 0.8);
          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#A61E34');
          grad.addColorStop(0.6, '#821023');
          grad.addColorStop(1, '#4E0713');
          ctx.fillStyle = grad;
          ctx.fill();
        } else {
          // Antique Gold Foil Flake
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.5, p.size * 0.8, Math.PI / 4, 0, Math.PI * 2);
          const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          grad.addColorStop(0, '#FFF2B2');
          grad.addColorStop(0.5, '#D4AF37');
          grad.addColorStop(1, '#8C6819');
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
        active ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
};
