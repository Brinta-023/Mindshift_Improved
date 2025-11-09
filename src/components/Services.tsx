import { Bot, BookText, Heart, Target, Radio } from 'lucide-react';
import MoodIcon, { type MoodType } from './MoodIcon';

const services = [
  {
    title: 'Meet NIRA, your empathetic companion',
    description: 'A warm presence available 24/7, offering gentle conversations and compassionate support whenever you need someone to listen.',
    icon: Bot,
  },
  {
    title: 'A quiet place for your thoughts',
    description: 'Gentle prompts and reflective exercises help you process emotions and discover insights at your own pace.',
    icon: BookText,
  },
  {
    title: 'Understand your feelings',
    description: 'Visual insights into your emotional patterns help you recognize what you\'re experiencing and celebrate your progress.',
    icon: Heart,
  },
  {
    title: 'Map your unique journey',
    description: 'Personalized objectives based on your needs, with gentle milestones to keep you motivated and moving forward.',
    icon: Target,
  },
  {
    title: 'Guided Audio Reframing',
    description: 'Go beyond typing. Talk to NIRA with our new voice chat option. You can engage in 5-minute guided audio sessions where NIRA helps you actively challenge and shift difficult thought patterns, just by listening and speaking.',
    icon: Radio,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-warm-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-16 w-20 h-20 opacity-35 animate-float">
          <MoodIcon mood="energetic" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display-sm font-light text-warm-black mb-4">
            Your Personal Space for Growth
          </h2>
          <p className="text-lg text-gentle-gray max-w-2xl mx-auto">
            Everything you need to nurture your mental wellness, thoughtfully designed for your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-gray-200/50 hover:shadow-md transition-all group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >

                <div className="w-16 h-16 bg-warm-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-all shadow-sm relative">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-lg font-normal text-warm-black mb-3 relative">{service.title}</h3>
                <p className="text-gentle-gray leading-relaxed text-sm relative">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 rounded-b-lg">
                  <div className="h-full w-0 group-hover:w-full bg-warm-black transition-all duration-500 ease-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
