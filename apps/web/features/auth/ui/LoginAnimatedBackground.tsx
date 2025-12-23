'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

interface StockLine {
  points: number[];
  targetPoints: number[];
  baseY: number;
  color: { r: number; g: number; b: number };
  opacity: number;
  speed: number;
}

interface Ticker {
  x: number;
  y: number;
  value: number;
  targetValue: number;
  opacity: number;
  isUp: boolean;
  size: number;
}

interface FloatingParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
}

export const LoginAnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = resolvedTheme === 'dark';

    // 색상 팔레트 (금융/주식 테마)
    const colors = {
      up: isDark ? { r: 34, g: 197, b: 94 } : { r: 22, g: 163, b: 74 }, // 녹색 (상승)
      down: isDark ? { r: 239, g: 68, b: 68 } : { r: 220, g: 38, b: 38 }, // 빨간색 (하락)
      neutral: isDark ? { r: 100, g: 116, b: 139 } : { r: 71, g: 85, b: 105 }, // 슬레이트
      accent: isDark ? { r: 59, g: 130, b: 246 } : { r: 37, g: 99, b: 235 }, // 블루
      grid: isDark ? { r: 51, g: 65, b: 85 } : { r: 203, g: 213, b: 225 },
    };

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initializeElements();
    };

    // 주가 라인 데이터
    const stockLines: StockLine[] = [];
    const tickers: Ticker[] = [];
    const particles: FloatingParticle[] = [];

    const initializeElements = () => {
      stockLines.length = 0;
      tickers.length = 0;
      particles.length = 0;

      // 3개의 주가 라인 생성
      const lineConfigs = [
        { baseY: height * 0.3, color: colors.up, opacity: isDark ? 0.15 : 0.1, speed: 0.8 },
        { baseY: height * 0.5, color: colors.accent, opacity: isDark ? 0.12 : 0.08, speed: 1.0 },
        { baseY: height * 0.7, color: colors.down, opacity: isDark ? 0.1 : 0.06, speed: 0.6 },
      ];

      lineConfigs.forEach((config) => {
        const pointCount = Math.ceil(width / 20) + 1;
        const points: number[] = [];
        const targetPoints: number[] = [];

        for (let i = 0; i < pointCount; i++) {
          const variation = (Math.random() - 0.5) * 80;
          points.push(config.baseY + variation);
          targetPoints.push(config.baseY + variation);
        }

        stockLines.push({
          points,
          targetPoints,
          baseY: config.baseY,
          color: config.color,
          opacity: config.opacity,
          speed: config.speed,
        });
      });

      // 티커 (가격 표시) 생성
      const tickerCount = Math.floor(width / 300);
      for (let i = 0; i < tickerCount; i++) {
        const isUp = Math.random() > 0.5;
        tickers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          value: Math.random() * 1000 + 100,
          targetValue: Math.random() * 1000 + 100,
          opacity: 0,
          isUp,
          size: Math.random() * 0.5 + 0.5,
        });
      }

      // 플로팅 파티클 생성
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
          size: Math.random() * 2 + 1,
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 미세한 그리드 그리기
    const drawGrid = () => {
      const gridSpacing = 60;
      const opacity = isDark ? 0.04 : 0.06;

      ctx.strokeStyle = `rgba(${colors.grid.r}, ${colors.grid.g}, ${colors.grid.b}, ${opacity})`;
      ctx.lineWidth = 1;

      // 수평선
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 수직선
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    // 주가 라인 그리기
    const drawStockLine = (line: StockLine) => {
      const segmentWidth = width / (line.points.length - 1);

      // 라인 그리기
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${line.color.r}, ${line.color.g}, ${line.color.b}, ${line.opacity * 1.5})`;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      line.points.forEach((y, i) => {
        const x = i * segmentWidth;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          // 부드러운 곡선
          const prevX = (i - 1) * segmentWidth;
          const prevY = line.points[i - 1];
          const cpX = (prevX + x) / 2;
          ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
        }
      });
      ctx.stroke();

      // 그라데이션 영역 채우기
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, line.baseY - 100, 0, height);
      gradient.addColorStop(0, `rgba(${line.color.r}, ${line.color.g}, ${line.color.b}, ${line.opacity * 0.5})`);
      gradient.addColorStop(0.5, `rgba(${line.color.r}, ${line.color.g}, ${line.color.b}, ${line.opacity * 0.2})`);
      gradient.addColorStop(1, `rgba(${line.color.r}, ${line.color.g}, ${line.color.b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // 티커 업데이트 및 그리기
    const updateAndDrawTickers = () => {
      tickers.forEach((ticker) => {
        // 값 업데이트
        if (Math.random() < 0.01) {
          ticker.targetValue = Math.random() * 1000 + 100;
          ticker.isUp = ticker.targetValue > ticker.value;
        }
        ticker.value += (ticker.targetValue - ticker.value) * 0.02;

        // 페이드 인/아웃
        if (Math.random() < 0.005) {
          ticker.opacity = ticker.opacity > 0.5 ? 0 : 1;
        }
        ticker.opacity += (ticker.opacity > 0.5 ? 1 : 0 - ticker.opacity) * 0.02;

        // 위치 업데이트
        ticker.y -= 0.2;
        if (ticker.y < -50) {
          ticker.y = height + 50;
          ticker.x = Math.random() * width;
        }

        // 그리기
        if (ticker.opacity > 0.05) {
          const color = ticker.isUp ? colors.up : colors.down;
          const alpha = ticker.opacity * (isDark ? 0.15 : 0.1);

          ctx.font = `${12 * ticker.size}px "SF Mono", Monaco, monospace`;
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;

          const sign = ticker.isUp ? '+' : '-';
          const percent = (Math.random() * 5).toFixed(2);
          ctx.fillText(`${sign}${percent}%`, ticker.x, ticker.y);
        }
      });
    };

    // 파티클 업데이트 및 그리기
    const updateAndDrawParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // 화면 밖으로 나가면 반대편에서 다시 시작
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // 그리기
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(${colors.accent.r}, ${colors.accent.g}, ${colors.accent.b}, ${p.opacity})`);
        gradient.addColorStop(1, `rgba(${colors.accent.r}, ${colors.accent.g}, ${colors.accent.b}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // 주가 라인 포인트 업데이트
    const updateStockLines = () => {
      stockLines.forEach((line) => {
        // 새로운 타겟 포인트 생성 (가끔씩)
        if (Math.random() < 0.02) {
          const index = Math.floor(Math.random() * line.targetPoints.length);
          const variation = (Math.random() - 0.5) * 60;
          line.targetPoints[index] = line.baseY + variation;
        }

        // 부드럽게 타겟으로 이동
        line.points.forEach((_, i) => {
          line.points[i] += (line.targetPoints[i] - line.points[i]) * 0.01 * line.speed;
        });

        // 웨이브 효과 추가
        const waveOffset = Math.sin(timeRef.current * 0.5 * line.speed) * 5;
        line.points.forEach((_, i) => {
          line.points[i] += Math.sin(i * 0.1 + timeRef.current * line.speed) * 0.5 + waveOffset * 0.1;
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      timeRef.current += 0.016;

      // 배경 그라데이션
      const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.7);
      if (isDark) {
        bgGradient.addColorStop(0, 'rgba(15, 23, 42, 0.3)');
        bgGradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
      } else {
        bgGradient.addColorStop(0, 'rgba(241, 245, 249, 0.5)');
        bgGradient.addColorStop(1, 'rgba(241, 245, 249, 0)');
      }
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 요소들 그리기
      drawGrid();
      updateStockLines();
      stockLines.forEach(drawStockLine);
      updateAndDrawParticles();
      updateAndDrawTickers();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resolvedTheme, mounted]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: mounted ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
    />
  );
};
