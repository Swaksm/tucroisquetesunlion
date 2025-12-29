import React, { useRef, useEffect, useCallback } from 'react';
import { CANVAS_WIDTH, CANVAS_SQUARE_HEIGHT, CANVAS_RECT_HEIGHT } from '../constants';
import { AspectRatio } from '../types';

interface MemeCanvasProps {
  lionUrl: string;
  userImageUrl: string | null;
  text: string;
  aspectRatio: AspectRatio;
  onCanvasRef?: (canvas: HTMLCanvasElement | null) => void;
}

const MemeCanvas: React.FC<MemeCanvasProps> = ({ lionUrl, userImageUrl, text, aspectRatio, onCanvasRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawMeme = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isSquare = aspectRatio === 'square';
    const canvasHeight = isSquare ? CANVAS_SQUARE_HEIGHT : CANVAS_RECT_HEIGHT;

    // Update canvas element dimensions
    canvas.height = canvasHeight;

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
      ctx.fillRect(0, 0, CANVAS_WIDTH, canvasHeight);

      const lionImg = await loadImage(lionUrl);
      const userImg = userImageUrl ? await loadImage(userImageUrl) : null;

      if (isSquare) {
        // --- SQUARE DRAWING ---
        // 1. Draw Lion (Top half)
        ctx.drawImage(lionImg, 0, 0, CANVAS_WIDTH, canvasHeight / 2);
        // 2. Draw User Image (Bottom half)
        if (userImg) {
          ctx.drawImage(userImg, 0, canvasHeight / 2, CANVAS_WIDTH, canvasHeight / 2);
        } else {
          ctx.fillStyle = '#27272a';
          ctx.fillRect(0, canvasHeight / 2, CANVAS_WIDTH, canvasHeight / 2);
          ctx.fillStyle = '#52525b';
          ctx.font = '24px Inter';
          ctx.textAlign = 'center';
          ctx.fillText('Votre image ici', CANVAS_WIDTH / 2, (canvasHeight * 3) / 4);
        }
      } else {
        // --- RECTANGLE DRAWING ---
        // 1. Draw Lion (Left side)
        ctx.drawImage(lionImg, 0, 0, CANVAS_WIDTH / 2, canvasHeight);
        // 2. Draw User Image (Right side)
        if (userImg) {
          ctx.drawImage(userImg, CANVAS_WIDTH / 2, 0, CANVAS_WIDTH / 2, canvasHeight);
        } else {
          ctx.fillStyle = '#27272a';
          ctx.fillRect(CANVAS_WIDTH / 2, 0, CANVAS_WIDTH / 2, canvasHeight);
          ctx.fillStyle = '#52525b';
          ctx.font = '24px Inter';
          ctx.textAlign = 'center';
          ctx.fillText('Votre image ici', (CANVAS_WIDTH * 3) / 4, canvasHeight / 2);
        }
      }

      // 3. Draw Text Overlay
      const fullText = `TU CROIS QUE T'ES UN LION\nMAIS T'ES ${text.toUpperCase() || '...'}`;
      ctx.font = `bold ${isSquare ? '70px' : '50px'} Impact, sans-serif`;
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = isSquare ? 8 : 6;
      ctx.textAlign = 'center';

      const lines = fullText.split('\n');
      const lineHeight = isSquare ? 80 : 60;
      
      let startY;
      if (isSquare) {
        const totalTextHeight = lines.length * lineHeight;
        startY = (canvasHeight - totalTextHeight) / 2 + (lineHeight / 2);
      } else {
        startY = canvasHeight - (lines.length * lineHeight) / 2 - 40;
      }
      
      lines.forEach((line, index) => {
        const y = startY + index * lineHeight;
        ctx.strokeText(line, CANVAS_WIDTH / 2, y);
        ctx.fillText(line, CANVAS_WIDTH / 2, y);
      });


      // --- 4. Filigrane (Watermark) ---
      const watermarkText = 'lion-meme.com';
      ctx.save();
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillText(watermarkText, CANVAS_WIDTH - 20, canvasHeight - 20);
      ctx.restore();
      // -------------------------------

      if (onCanvasRef) {
        onCanvasRef(canvas);
      }
    } catch (err) {
      console.error('Error drawing canvas:', err);
    }
  }, [lionUrl, userImageUrl, text, onCanvasRef, aspectRatio]);

  useEffect(() => {
    drawMeme();
  }, [drawMeme]);
  
  const isSquare = aspectRatio === 'square';
  const containerClass = `w-full overflow-hidden rounded-xl shadow-2xl border border-zinc-800 bg-zinc-900 ${isSquare ? 'aspect-square' : 'aspect-[2/1]'}`;
  const canvasHeight = isSquare ? CANVAS_SQUARE_HEIGHT : CANVAS_RECT_HEIGHT;

  return (
    <div className={containerClass}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={canvasHeight}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default MemeCanvas;