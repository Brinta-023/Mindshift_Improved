import { UserPlus, MessageCircle, RefreshCw, BookOpen, TrendingUp, AlertCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your secure space and begin your journey to mental wellness in minutes.',
    icon: UserPlus,
    emoji: '🌱',
  },
  {
    number: 2,
    title: 'Start Chatting',
    description: 'Connect with NIRA, your companion who listens without judgment and guides with empathy.',
    icon: MessageCircle,
    emoji: '🌿',
  },
  {
    number: 3,
    title: 'Reframe',
    description: 'Learn to transform negative thought patterns into constructive perspectives.',
    icon: RefreshCw,
    emoji: '🌿',
  },
  {
    number: 4,
    title: 'Record Your Journey',
    description: 'Capture your progress with gentle journaling that helps you reflect and grow.',
    icon: BookOpen,
    emoji: '🌿',
  },
  {
    number: 5,
    title: 'Monitor Growth',
    description: 'Track your progress and celebrate your achievements along the way.',
    icon: TrendingUp,
    emoji: '🌿',
  },
  {
    number: 6,
    title: 'Reach Help',
    description: 'Access immediate support and emergency resources whenever you need it.',
    icon: AlertCircle,
    emoji: '🌸',
  },
];

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [vineLength, setVineLength] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleSteps === 0) {
            let stepCount = 0;
            const stepTimer = setInterval(() => {
              stepCount++;
              setVisibleSteps(stepCount);
              setVineLength((stepCount / steps.length) * 100);

              if (stepCount >= steps.length) {
                clearInterval(stepTimer);
              }
            }, 500);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 px-6 bg-warm-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">
            Your Path to Growth
          </h2>
          <p className="text-xl text-gentle-gray/70 max-w-2xl mx-auto">
            A gentle, natural journey to better mental health
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-32 hidden md:block"
            style={{ zIndex: 0 }}
            preserveAspectRatio="none"
            viewBox="0 0 128 1200"
          >
            <defs>
              <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475b47" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#567056" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3c4c3c" stopOpacity="0.95" />
              </linearGradient>
              <filter id="vineShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 64 0 Q 64 80 72 160 T 64 320 Q 56 400 64 480 T 72 640 Q 64 720 64 800 T 64 960 Q 60 1040 64 1120 L 64 1200"
              fill="none"
              stroke="url(#vineGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#vineShadow)"
              style={{
                strokeDasharray: '1200',
                strokeDashoffset: vineLength > 0 ? 1200 - (vineLength * 12) : 1200,
                transition: 'stroke-dashoffset 0.5s ease-out',
              }}
            />

            {steps.map((_, index) => {
              const yPosition = (index / (steps.length - 1)) * 1100 + 50;
              const xOffset = index % 2 === 0 ? 8 : -8;
              const isVisible = index < visibleSteps;

              return (
                <g key={index} opacity={isVisible ? 1 : 0} style={{ transition: 'opacity 0.3s ease-out' }}>
                  <line
                    x1="64"
                    y1={yPosition}
                    x2={64 + xOffset * 4}
                    y2={yPosition}
                    stroke="#567056"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </g>
              );
            })}
          </svg>

          <div className="space-y-24 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = index < visibleSteps;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-8 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left md:order-3'}`}>
                    <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl border-2 border-forest/10 hover:shadow-2xl hover:border-forest/20 transition-all inline-block max-w-md ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse md:justify-end' : 'md:flex-row'}`}>
                        <span className="text-4xl">{step.emoji}</span>
                        <h3 className="text-2xl font-bold text-forest">{step.title}</h3>
                      </div>
                      <p className="text-gentle-gray/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0 hidden md:block md:order-2">
                    <div className={`w-20 h-20 bg-forest rounded-full flex items-center justify-center shadow-xl border-4 border-white ${
                      isVisible ? 'animate-unfurl-leaf' : 'opacity-0'
                    }`} style={{ animationDelay: `${index * 0.15}s` }}>
                      <Icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute inset-0 bg-forest/20 rounded-full blur-xl -z-10 animate-pulse-gentle"></div>
                  </div>

                  <div className="flex-1 hidden md:block md:order-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
