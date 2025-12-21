import { useEffect, useRef } from "react";

export default function BrushCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let lastX = 0;
    let lastY = 0;
    let hasLast = false;

    const onDown = (e: MouseEvent) => {
      if (e.button !== 0) return;

      drawing.current = true;
      hasLast = false;

      // ✅ prevent text selection immediately
      e.preventDefault();
    };

    const onUp = () => {
      drawing.current = false;
      hasLast = false;

      // ✅ remove any trail instantly when you stop
      ctx.clearRect(0, 0, width, height);
    };

    const onMove = (e: MouseEvent) => {
      if (!drawing.current) return;

      ctx.strokeStyle = "rgba(237,120,107,0.95)";
      ctx.lineWidth = 10;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(237,120,107,0.9)";

      ctx.beginPath();
      if (!hasLast) {
        ctx.moveTo(e.clientX, e.clientY);
        hasLast = true;
      } else {
        ctx.moveTo(lastX, lastY);
      }
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      lastX = e.clientX;
      lastY = e.clientY;

      // ✅ keep the browser from starting selection/drag behavior
      e.preventDefault();
    };

    // ✅ block selection/drag ONLY while drawing
    const prevent = (e: Event) => {
      if (drawing.current) e.preventDefault();
    };

    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("selectstart", prevent);
    window.addEventListener("dragstart", prevent);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("selectstart", prevent);
      window.removeEventListener("dragstart", prevent);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
