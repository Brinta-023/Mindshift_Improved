import { Bot, User, Mic, Smile, ArrowRight } from 'lucide-react';
import MoodIcon from './MoodIcon';
import { useState, useEffect } from 'react';

export default function MeetNira() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  const messages = [
    { type: 'bot', text: "hi there 🌿 i'm nira — i'm here to listen, no rush." },
    { type: 'user', text: "i've been feeling pretty heavy lately..." },
    { type: 'bot', text: "i hear you. that sounds really tough. want to tell me what's been weighing on you?" },
    { type: 'user', text: "just everything... work, life, it all feels like too much" },
    { type: 'bot', text: "it's okay to feel that way. let's take this one step at a time, together 💙" }
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <section className="py-24 px-6 bg-cream relative overflow-hidden">
      <div className="absolute top-1/4 right-16 w-20 h-20 opacity-35 animate-float">
        <MoodIcon mood="creative" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-display-sm font-light text-warm-black">
            Meet NIRA, Your Companion
          </h2>
          <p className="text-lg text-gentle-gray max-w-2xl mx-auto">
            A gentle presence, here to hold space for you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 overflow-hidden">
              <div className="bg-warm-black p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle">
                    <Bot className="w-8 h-8 text-forest" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-normal text-base">NIRA</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white/90 text-sm">Here with you</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6 h-[450px] overflow-y-auto bg-white">
                {messages.slice(0, visibleMessages).map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 animate-fade-in ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                      message.type === 'bot'
                        ? 'bg-gray-200'
                        : 'bg-gray-300'
                    }`}>
                      {message.type === 'bot' ? (
                        <Bot className="w-6 h-6 text-warm-black" strokeWidth={1.5} />
                      ) : (
                        <User className="w-6 h-6 text-warm-black" strokeWidth={1.5} />
                      )}
                    </div>
                    <div className={`max-w-[75%] ${message.type === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                      <div className={`px-6 py-4 rounded-2xl ${
                        message.type === 'bot'
                          ? 'bg-gray-100 text-soft-gray'
                          : 'bg-warm-black text-white'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                      <span className="text-xs text-gentle-gray/40 mt-2 px-2">
                        Just now
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <button className="p-3 hover:bg-gray-100 rounded-full transition-all" title="voice input">
                    <Mic className="w-5 h-5 text-gentle-gray" strokeWidth={1.5} />
                  </button>
                  <button className="p-3 hover:bg-gray-100 rounded-full transition-all" title="add emoji">
                    <Smile className="w-5 h-5 text-gentle-gray" strokeWidth={1.5} />
                  </button>
                  <input
                    type="text"
                    placeholder="Share what's on your mind..."
                    className="flex-1 px-6 py-3.5 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-warm-black focus:border-warm-black transition-all text-sm text-soft-gray placeholder:text-gentle-gray/50 bg-white"
                    disabled
                  />
                  <button className="w-12 h-12 bg-warm-black text-white rounded-full hover:bg-elegant-gray transition-all flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-mint-300/20 rounded-full blur-3xl animate-breathing"></div>
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-sage-300/20 rounded-full blur-3xl animate-breathing" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        <div className="text-center mt-12 flex items-center justify-center gap-2 animate-pulse-gentle">
          <span className="text-forest/50 text-sm lowercase">you're doing great</span>
        </div>
      </div>
    </section>
  );
}
