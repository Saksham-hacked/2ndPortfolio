import { useState, useRef } from "react";

export default function ImageRevealEffect() {
  const [maskPosition, setMaskPosition] = useState({ x: -100, y: -100 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      setMaskPosition({ x: e.clientX - left, y: e.clientY - top });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[400px] h-[400px] overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMaskPosition({ x: -100, y: -100 })}
    >
      {/* High-Resolution Image */}
      <img
        src="../public/myImages/nonpixcelatedNoBg.png"
        alt="High Res"
        className="w-full h-full object-cover"
      />

      {/* Pixelated Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(../public/myImages/colouredMinecraftnoBg.png)`,
        //   maskImage: `radial-gradient(circle 500px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 90%)`,
          maskImage: `radial-gradient( circle at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 90%)`,

          WebkitMaskImage: `radial-gradient(circle closest-corner  at ${maskPosition.x}px ${maskPosition.y}px, transparent 10%, black 70%)`,
        }}
      />
    </div>
  );
}
