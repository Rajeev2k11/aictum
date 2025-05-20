'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    const particlesArray: Particle[] = [];
    const numberOfParticles = 50;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(147, 69, 224, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    const connect = () => {
      if (!ctx) return;
      let opacityValue = 1;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            opacityValue = 1 - distance / 100;
            ctx.strokeStyle = `rgba(147, 69, 224, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connect();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-[#1A1325] via-[#473062] to-[#0C0C11] text-white"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock the Power of <span className="text-[#9345E0]">AI</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Build intelligent conversational experiences with our AI platform.
          Transform your business with cutting-edge conversational AI solutions.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-[#9345E0] text-white text-lg font-medium hover:bg-[#7d35c4] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-white text-[#1A1325] border border-gray-300 text-lg font-medium hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a Demo
          </a>
        </motion.div>
      </div>

      {/* Animated Box Section */}
      <motion.div
        className="mt-16 relative h-64 sm:h-80 md:h-96 lg:h-[500px] max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden bg-[#9345E0] shadow-2xl flex items-center justify-center">
          <div className="text-xl font-semibold text-white z-10">AI Dashboard Visualization</div>

          <motion.div
            className="absolute top-[20%] left-[20%] w-16 h-16 bg-white/10 rounded-full"
            animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute top-[70%] right-[25%] w-12 h-12 bg-white/10 rounded-full"
            animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
