
import React, { useRef, useEffect, useCallback } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants';

interface MemeCanvasProps {
  lionUrl: string;
  userImageUrl: string | null;
  text: string;
  onCanvasRef?: (canvas: HTMLCanvasElement | null) => void;
}

const MemeCanvas: React.FC<MemeCanvasProps> = ({ lionUrl, userImageUrl, text, onCanvasRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawMeme = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Helper to load image
    const loadImage = (url: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    try {
      // Clear canvas
      ctx.fillStyle = '#18181b';
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // 1. Draw Lion (Left side)
      const lionImg = await loadImage(lionUrl);
      ctx.drawImage(lionImg, 0, 0, CANVAS_WIDTH / 2, CANVAS_HEIGHT);

      // 2. Draw User Image (Right side)
      if (userImageUrl) {
        const userImg = await loadImage(userImageUrl);
        ctx.drawImage(userImg, CANVAS_WIDTH / 2, 0, CANVAS_WIDTH / 2, CANVAS_HEIGHT);
      } else {
        // Placeholder background for right side if no image uploaded
        ctx.fillStyle = '#27272a';
        ctx.fillRect(CANVAS_WIDTH / 2, 0, CANVAS_WIDTH / 2, CANVAS_HEIGHT);
        ctx.fillStyle = '#52525b';
        ctx.font = '24px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Votre image ici', (CANVAS_WIDTH * 3) / 4, CANVAS_HEIGHT / 2);
      }

      // 3. Draw Text Overlay
      const fullText = `TU CROIS QUE T'ES UN LION\nMAIS T'ES ${text.toUpperCase() || '...'}`;
      
      ctx.font = 'bold 50px Impact, sans-serif';
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const lines = fullText.split('\n');
      const lineHeight = 60;
      const startY = CANVAS_HEIGHT - (lines.length * lineHeight) / 2 - 40;

      lines.forEach((line, index) => {
        const y = startY + index * lineHeight;
        ctx.strokeText(line, CANVAS_WIDTH / 2, y);
        ctx.fillText(line, CANVAS_WIDTH / 2, y);
      });

      if (onCanvasRef) {
        onCanvasRef(canvas);
      }
    } catch (err) {
      console.error('Error drawing canvas:', err);
    }
  }, [lionUrl, userImageUrl, text, onCanvasRef]);

  useEffect(() => {
    drawMeme();
  }, [drawMeme]);

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-2xl border border-zinc-800 bg-zinc-900 aspect-[2/1]">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default MemeCanvas;
