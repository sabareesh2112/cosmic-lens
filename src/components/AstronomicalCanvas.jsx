import React, { useRef, useEffect, useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Crosshair } from 'lucide-react';

export const AstronomicalCanvas = ({
  objectId,
  wavelength,
  telescopeId,
  imageSrc,
  altText,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showCrosshair, setShowCrosshair] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Attempt to load provided imageSrc if available
  useEffect(() => {
    setImageFailed(false);
    setImageLoaded(false);
    if (!imageSrc) return;

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageFailed(true);
  }, [imageSrc]);

  // Scientific procedural astronomical renderer in warm stellar space palette
  useEffect(() => {
    if (imageLoaded && !imageFailed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 800;
    const height = 600;
    canvas.width = width;
    canvas.height = height;

    // Reset transform
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);

    // Deep space obsidian background
    ctx.fillStyle = '#080706';
    ctx.fillRect(0, 0, width, height);

    // Subtle background stars
    const seed = objectId.length * 31;
    for (let i = 0; i < 160; i++) {
      const sx = (Math.sin(i * 12.9898 + seed) * 43758.5453) % 1;
      const sy = (Math.cos(i * 78.233 + seed) * 43758.5453) % 1;
      const x = Math.abs(sx) * width;
      const y = Math.abs(sy) * height;
      const r = Math.abs(Math.sin(i)) * 1.5 + 0.3;
      const brightness = Math.abs(Math.sin(i * 3)) * 0.7 + 0.3;

      ctx.fillStyle = `rgba(245, 237, 232, ${brightness * 0.7})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Specific Object Renderers
    if (objectId === 'pillars-of-creation') {
      renderPillars(ctx, width, height, wavelength, telescopeId);
    } else if (objectId === 'andromeda-galaxy') {
      renderAndromeda(ctx, width, height, wavelength, telescopeId);
    } else if (objectId === 'whirlpool-galaxy') {
      renderWhirlpool(ctx, width, height, wavelength, telescopeId);
    } else if (objectId === 'carina-nebula') {
      renderCarina(ctx, width, height, wavelength, telescopeId);
    } else if (objectId === 'jupiter') {
      renderJupiter(ctx, width, height, wavelength, telescopeId);
    } else if (objectId === 'wasp-96b') {
      renderWasp96b(ctx, width, height);
    } else {
      renderGenericObject(ctx, width, height, wavelength);
    }

    // Technical overlay grid lines in warm orange tint
    ctx.strokeStyle = 'rgba(234, 145, 98, 0.10)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(width * 0.5, height);
    ctx.moveTo(0, height * 0.5);
    ctx.lineTo(width, height * 0.5);
    ctx.stroke();

  }, [objectId, wavelength, telescopeId, imageLoaded, imageFailed]);

  // Helper: Draw diffraction star spike (4-point for Hubble, 8-point for JWST)
  const drawDiffractionStar = (ctx, cx, cy, radius, color, isWebb) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    const len = radius * (isWebb ? 12 : 8);

    if (isWebb) {
      for (let angle = 0; angle < 360; angle += 60) {
        const rad = (angle * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(rad) * len, cy + Math.sin(rad) * len);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(cx - len * 0.7, cy);
      ctx.lineTo(cx + len * 0.7, cy);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(cx - len, cy);
      ctx.lineTo(cx + len, cy);
      ctx.moveTo(cx, cy - len);
      ctx.lineTo(cx, cy + len);
      ctx.stroke();
    }
    ctx.restore();
  };

  // 1. Pillars of Creation
  const renderPillars = (ctx, w, h, band, tel) => {
    if (band === 'Visible') {
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#24140D');
      bgGrad.addColorStop(0.4, '#381D12');
      bgGrad.addColorStop(0.8, '#180E09');
      bgGrad.addColorStop(1, '#0D0805');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#080503';
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h);
      ctx.lineTo(w * 0.35, h * 0.45);
      ctx.bezierCurveTo(w * 0.38, h * 0.35, w * 0.46, h * 0.35, w * 0.48, h * 0.45);
      ctx.lineTo(w * 0.52, h);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(w * 0.48, h);
      ctx.lineTo(w * 0.54, h * 0.52);
      ctx.bezierCurveTo(w * 0.57, h * 0.44, w * 0.63, h * 0.44, w * 0.65, h * 0.55);
      ctx.lineTo(w * 0.68, h);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(w * 0.65, h);
      ctx.lineTo(w * 0.72, h * 0.62);
      ctx.bezierCurveTo(w * 0.74, h * 0.57, w * 0.78, h * 0.57, w * 0.8, h * 0.65);
      ctx.lineTo(w * 0.84, h);
      ctx.fill();

      ctx.strokeStyle = '#EA9162';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      drawDiffractionStar(ctx, w * 0.22, h * 0.25, 3, '#F5EDE8', false);
      drawDiffractionStar(ctx, w * 0.78, h * 0.28, 4, '#F2B08E', false);
      drawDiffractionStar(ctx, w * 0.85, h * 0.75, 2.5, '#F5EDE8', false);
    } else {
      // Infrared
      const bgGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 40, w * 0.5, h * 0.5, w * 0.7);
      bgGrad.addColorStop(0, '#3D1C0D');
      bgGrad.addColorStop(0.6, '#1F0F08');
      bgGrad.addColorStop(1, '#080706');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.fillStyle = 'rgba(74, 34, 17, 0.45)';
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h);
      ctx.lineTo(w * 0.35, h * 0.45);
      ctx.bezierCurveTo(w * 0.38, h * 0.35, w * 0.46, h * 0.35, w * 0.48, h * 0.45);
      ctx.lineTo(w * 0.52, h);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(w * 0.48, h);
      ctx.lineTo(w * 0.54, h * 0.52);
      ctx.bezierCurveTo(w * 0.57, h * 0.44, w * 0.63, h * 0.44, w * 0.65, h * 0.55);
      ctx.lineTo(w * 0.68, h);
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = 'rgba(234, 145, 98, 0.6)';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#FFD2BE';
      ctx.beginPath();
      ctx.arc(w * 0.42, h * 0.4, 4, 0, Math.PI * 2);
      ctx.arc(w * 0.6, h * 0.48, 3.5, 0, Math.PI * 2);
      ctx.fill();

      const webbStars = [
        [w * 0.4, h * 0.48, 2.5], [w * 0.44, h * 0.58, 2.8], [w * 0.56, h * 0.56, 3],
        [w * 0.38, h * 0.7, 2.2], [w * 0.62, h * 0.68, 2.6], [w * 0.2, h * 0.3, 4],
        [w * 0.75, h * 0.35, 3.5], [w * 0.82, h * 0.2, 4.5], [w * 0.15, h * 0.7, 3]
      ];
      webbStars.forEach(([sx, sy, sr]) => {
        drawDiffractionStar(ctx, sx, sy, sr, '#EA9162', true);
      });
    }
  };

  // 2. Andromeda Galaxy
  const renderAndromeda = (ctx, w, h, band, tel) => {
    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);
    ctx.rotate(-Math.PI * 0.2);

    if (band === 'Visible') {
      const coreGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 180);
      coreGrad.addColorStop(0, 'rgba(255, 245, 235, 0.95)');
      coreGrad.addColorStop(0.2, 'rgba(255, 210, 190, 0.6)');
      coreGrad.addColorStop(0.6, 'rgba(234, 145, 98, 0.25)');
      coreGrad.addColorStop(1, 'rgba(8, 7, 6, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 260, 90, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(24, 16, 12, 0.85)';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.ellipse(0, 0, 190, 65, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#F2B08E';
      for (let i = 0; i < 40; i++) {
        const rad = (i / 40) * Math.PI * 2;
        const rx = Math.cos(rad) * (200 + Math.sin(i * 3) * 20);
        const ry = Math.sin(rad) * (70 + Math.cos(i * 3) * 10);
        ctx.beginPath();
        ctx.arc(rx, ry, Math.random() * 2 + 1, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Infrared
      ctx.strokeStyle = '#EA9162';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.ellipse(0, 0, 220, 75, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(242, 176, 142, 0.7)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(0, 0, 150, 50, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  // 3. Whirlpool Galaxy M51
  const renderWhirlpool = (ctx, w, h, band, tel) => {
    ctx.save();
    ctx.translate(w * 0.45, h * 0.52);

    if (band === 'Visible') {
      const coreGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 80);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.3, '#FFF2EA');
      coreGrad.addColorStop(0.8, 'rgba(234, 145, 98, 0.25)');
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(242, 176, 142, 0.85)';
      ctx.lineWidth = 12;
      for (let arm = 0; arm < 2; arm++) {
        ctx.beginPath();
        for (let t = 0; t < 720; t += 10) {
          const rad = ((t + arm * 180) * Math.PI) / 180;
          const r = 10 + t * 0.22;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(255, 210, 190, 0.8)';
      ctx.beginPath();
      ctx.arc(150, -110, 28, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Infrared
      ctx.strokeStyle = '#EA9162';
      ctx.lineWidth = 3;
      for (let arm = 0; arm < 2; arm++) {
        for (let t = 20; t < 650; t += 30) {
          const rad = ((t + arm * 180) * Math.PI) / 180;
          const r = 12 + t * 0.22;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          ctx.beginPath();
          ctx.arc(x, y, 9, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
  };

  // 4. Carina Nebula Cosmic Cliffs
  const renderCarina = (ctx, w, h, band, tel) => {
    if (band === 'Visible') {
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.5);
      skyGrad.addColorStop(0, '#2E150B');
      skyGrad.addColorStop(1, '#4A2312');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h * 0.55);

      ctx.fillStyle = '#0D0805';
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, h * 0.65);
      ctx.lineTo(w * 0.25, h * 0.5);
      ctx.lineTo(w * 0.45, h * 0.62);
      ctx.lineTo(w * 0.7, h * 0.48);
      ctx.lineTo(w, h * 0.58);
      ctx.lineTo(w, h);
      ctx.fill();
      ctx.strokeStyle = '#EA9162';
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      // Infrared
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.5);
      skyGrad.addColorStop(0, '#1F0D06');
      skyGrad.addColorStop(1, '#3D1C0D');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h * 0.55);

      ctx.fillStyle = 'rgba(74, 34, 17, 0.7)';
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, h * 0.65);
      ctx.lineTo(w * 0.25, h * 0.5);
      ctx.lineTo(w * 0.45, h * 0.62);
      ctx.lineTo(w * 0.7, h * 0.48);
      ctx.lineTo(w, h * 0.58);
      ctx.lineTo(w, h);
      ctx.fill();

      ctx.strokeStyle = '#EA9162';
      ctx.lineWidth = 3.5;
      ctx.stroke();

      ctx.strokeStyle = '#F2B08E';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.25, h * 0.5);
      ctx.lineTo(w * 0.22, h * 0.42);
      ctx.moveTo(w * 0.7, h * 0.48);
      ctx.lineTo(w * 0.72, h * 0.4);
      ctx.stroke();

      drawDiffractionStar(ctx, w * 0.25, h * 0.5, 3, '#FFFFFF', true);
      drawDiffractionStar(ctx, w * 0.7, h * 0.48, 3, '#FFFFFF', true);
    }
  };

  // 5. Jupiter
  const renderJupiter = (ctx, w, h, band, tel) => {
    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);

    if (band === 'Visible') {
      ctx.fillStyle = '#26160F';
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.fill();

      const beltColors = ['#3D2014', '#170E09', '#472718', '#24140D', '#3D2014'];
      beltColors.forEach((color, idx) => {
        ctx.fillStyle = color;
        const y = -100 + idx * 45;
        ctx.fillRect(-140, y, 280, 25);
      });

      ctx.globalCompositeOperation = 'destination-in';
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      ctx.fillStyle = '#EA9162';
      ctx.beginPath();
      ctx.ellipse(50, 40, 24, 15, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Infrared
      ctx.fillStyle = '#170E0A';
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#F2B08E';
      ctx.beginPath();
      ctx.ellipse(0, -125, 45, 12, 0, 0, Math.PI * 2);
      ctx.ellipse(0, 125, 45, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.ellipse(50, 40, 22, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(234, 145, 98, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 230, 25, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  };

  // 6. WASP-96b Transmission
  const renderWasp96b = (ctx, w, h) => {
    const starGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 30, w * 0.5, h * 0.5, 180);
    starGrad.addColorStop(0, '#FFFFFF');
    starGrad.addColorStop(0.5, '#F2B08E');
    starGrad.addColorStop(1, '#3D1C0D');
    ctx.fillStyle = starGrad;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 180, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#080706';
    ctx.beginPath();
    ctx.arc(w * 0.62, h * 0.48, 55, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#EA9162';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.62, h * 0.48, 57, 0, Math.PI * 2);
    ctx.stroke();
  };

  const renderGenericObject = (ctx, w, h, band) => {
    ctx.fillStyle = '#18100C';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 100, 0, Math.PI * 2);
    ctx.fill();
  };

  // Mouse pan handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top)
      });
    }
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative overflow-hidden bg-[#080706] border border-[rgba(234,145,98,0.25)] rounded-xl select-none ${
        showCrosshair ? 'cursor-crosshair' : isDragging ? 'cursor-grabbing' : 'cursor-grab'
      } ${className}`}
      style={{ minHeight: '340px' }}
    >
      {/* Visual Content: Image if loaded, otherwise Canvas */}
      <div
        className="w-full h-full flex items-center justify-center transition-transform duration-75"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
        }}
      >
        {imageLoaded && !imageFailed && imageSrc ? (
          <img
            src={imageSrc}
            alt={altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain pointer-events-none"
          />
        ) : (
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain pointer-events-none"
          />
        )}
      </div>

      {/* Floating HUD controls in warm stellar styling */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 p-1 bg-[#120D0A]/85 backdrop-blur-md border border-[rgba(234,145,98,0.25)] rounded-lg z-10 shadow-[0_0_15px_rgba(8,7,6,0.8)]">
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
          aria-label="Zoom in"
          className="p-1.5 text-[#C7B8B0] hover:text-[#EA9162] hover:bg-[#18100C] rounded transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.25, 0.75))}
          aria-label="Zoom out"
          className="p-1.5 text-[#C7B8B0] hover:text-[#EA9162] hover:bg-[#18100C] rounded transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          aria-label="Reset zoom and pan"
          className="p-1.5 text-[#C7B8B0] hover:text-[#EA9162] hover:bg-[#18100C] rounded transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => setShowCrosshair(!showCrosshair)}
          aria-label="Toggle crosshair inspection"
          className={`p-1.5 rounded transition-colors ${
            showCrosshair
              ? 'text-[#EA9162] bg-[#18100C]'
              : 'text-[#C7B8B0] hover:text-[#EA9162] hover:bg-[#18100C]'
          }`}
        >
          <Crosshair className="w-4 h-4" />
        </button>
      </div>

      {/* Telemetry metadata footer in warm stellar styling */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#C7B8B0] pointer-events-none">
        <div className="flex items-center gap-2 bg-[#080706]/90 px-2 py-1 rounded border border-[rgba(234,145,98,0.30)]">
          <span className="text-[#EA9162] font-semibold">{telescopeId.toUpperCase()}</span>
          <span>·</span>
          <span>{wavelength}</span>
        </div>
        {showCrosshair && (
          <div className="bg-[#080706]/90 px-2 py-1 rounded border border-[rgba(234,145,98,0.30)] tabular-nums text-[#F2B08E]">
            X: {mousePos.x}px · Y: {mousePos.y}px · ZOOM: {Math.round(zoom * 100)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default AstronomicalCanvas;
