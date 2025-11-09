import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/signup');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2e] via-[#2d5f4f] to-[#1a3a2e]"></div>

        {/* Liquid glass morphing shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#3d7f6f]/40 to-[#2d5f4f]/40 rounded-full mix-blend-overlay filter blur-[100px] animate-liquid-1"></div>
          <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#4a9f8f]/30 to-[#3d7f6f]/30 rounded-full mix-blend-overlay filter blur-[120px] animate-liquid-2"></div>
          <div className="absolute -bottom-20 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#2d5f4f]/35 to-[#1a3a2e]/35 rounded-full mix-blend-overlay filter blur-[110px] animate-liquid-3"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#5abfa5]/25 to-[#3d7f6f]/25 rounded-full mix-blend-overlay filter blur-[100px] animate-liquid-4"></div>
        </div>

        {/* Glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[2px]"></div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 opacity-20 animate-glass-shine" style={{
          background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
          backgroundSize: '200% 100%'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            hey, feeling a little heavy lately?
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto text-white font-light">
            you're not alone. let's reframe those thoughts and reshape your world.
          </p>

          {/* Call-to-Action Button */}
          <div className="pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={handleStartJourney}
              className="px-12 py-5 bg-[#2d5f4f] text-white text-lg font-medium rounded-full hover:bg-[#3d7f6f] transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
