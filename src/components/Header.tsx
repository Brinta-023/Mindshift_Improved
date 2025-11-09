import { Brain, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm border-b border-gray-200/50 z-50 transition-colors">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-warm-black p-1.5 rounded-lg">
              <Brain className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <span className="text-xl font-normal text-warm-black tracking-tight">
              Serenica
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gentle-gray hover:text-warm-black transition-colors text-sm">About</a>
            <a href="#services" className="text-gentle-gray hover:text-warm-black transition-colors text-sm">Services</a>
            <a href="#resources" className="text-gentle-gray hover:text-warm-black transition-colors text-sm">Resources</a>
            <a href="#how-it-works" className="text-gentle-gray hover:text-warm-black transition-colors text-sm">How it Works</a>
            <a href="#faqs" className="text-gentle-gray hover:text-warm-black transition-colors text-sm">FAQs</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-gentle-gray" /> : <Moon className="w-5 h-5 text-gentle-gray" />}
            </button>
            <Link to="/login" className="px-4 py-2 text-gentle-gray hover:text-warm-black transition-colors text-sm">
              Login
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-warm-black text-white rounded-md hover:bg-elegant-gray transition-all text-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
