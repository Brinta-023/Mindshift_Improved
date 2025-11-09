import { QrCode, ArrowRight, Heart } from 'lucide-react';
import MoodIcon from './MoodIcon';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const navigate = useNavigate();

  const phrases = ['find your calm', "you're safe here"];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;
    setTypingText('');

    const typingInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setTypingText(currentPhrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-cream">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-14 h-14 opacity-50 animate-float">
          <MoodIcon mood="happy" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 opacity-45 animate-float">
          <MoodIcon mood="calm" style={{ animationDelay: '2.5s' }} />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-display font-light leading-tight tracking-tight">
              <span className="block text-warm-black mb-2">Your journey </span>
              <span className="block text-elegant-gray font-serif italic">to calm</span>
              <span className="block text-warm-black">starts with Serenica.</span>
            </h1>

            <p className="text-lg text-gentle-gray leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Gentle guidance, expert support, and a safe space to grow. You're not alone on this journey.
            </p>

            <div className="flex items-center justify-center gap-3 text-forest text-sm font-light pt-2" style={{ animationDelay: '0.4s' }}>
              <Heart className="w-4 h-4" />
              <span className="min-w-[140px] text-center">{typingText}<span className="animate-pulse">|</span></span>
              <Heart className="w-4 h-4" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-gray-200/50 max-w-lg mx-auto animate-fade-in transition-all duration-500" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-normal text-warm-black">Take the first step</h3>
                <p className="text-sm text-gentle-gray">with Serenica today.</p>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-warm-black focus:border-warm-black transition-all text-soft-gray placeholder:text-gentle-gray/50 bg-white"
                    required
                  />
                  <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group px-8 py-3.5 bg-warm-black text-white rounded-md hover:bg-elegant-gray transition-all font-normal flex items-center justify-center gap-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
