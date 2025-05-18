'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";


const Hero=()=>{
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
   const canvasRef = useRef<HTMLCanvasElement>(null);
    
    // Animation for particles
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions
      const setCanvasDimensions = () => {
        const container = canvas.parentElement;
        if (container) {
          canvas.width = container.clientWidth;
          canvas.height = container.clientHeight;
        }
      };
      
      setCanvasDimensions();
      window.addEventListener('resize', setCanvasDimensions);
      
      // Particle properties
      const particlesArray: Particle[] = [];
      const numberOfParticles = 50;
      
      // Particle class
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
          this.color = `rgba(66, 99, 235, ${Math.random() * 0.5})`;
        }
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          if (this.size > 0.2) this.size -= 0.01;
          
          // Boundary check
          if (this.x < 0 || this.x > canvas.width) {
            this.speedX = -this.speedX;
          }
          
          if (this.y < 0 || this.y > canvas.height) {
            this.speedY = -this.speedY;
          }
        }
        
        draw() {
          if (!ctx) return;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Create particles
      const init = () => {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      };
      
      init();
      
      // Connect particles with lines
      const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = a; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              opacityValue = 1 - (distance / 100);
              ctx.strokeStyle = `rgba(66, 99, 235, ${opacityValue * 0.2})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      };
      
      // Animation loop
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
      }});
  return(
<motion.section 
        style={{ opacity, scale }}
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
       
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unlock the Power of <span className="text-blue-600">AI</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
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
              className="px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-white border border-gray-300 text-gray-700 text-lg font-medium hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Demo
            </a>
          </motion.div>
        </div>
        
        {/* Animated Hero Image */}
        <motion.div 
          className="mt-16 relative h-64 sm:h-80 md:h-96 lg:h-[500px] max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* This would be replaced with actual images/animations */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-2xl flex items-center justify-center">
                  <div className="text-xl font-semibold text-blue-600">AI Dashboard Visualization</div>
                </div>
                <motion.div 
                  className="absolute top-[20%] left-[20%] w-16 h-16 bg-blue-200 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute top-[70%] right-[25%] w-12 h-12 bg-purple-200 rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
  )
}

export default Hero;