import { Shield, Award, Users } from 'lucide-react';
import MoodIcon from './MoodIcon';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-12 w-20 h-20 opacity-35 animate-float">
          <MoodIcon mood="peaceful" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-display-sm font-light text-warm-black">
                About Serenica
              </h2>
            </div>
            <div className="space-y-4 text-base text-gentle-gray leading-relaxed">
              <p>
                Serenica is dedicated to making evidence-based mental health support accessible to everyone.
                Our platform combines thoughtful artificial intelligence with proven therapeutic techniques
                to help you navigate life's challenges with confidence and clarity.
              </p>
              <p>
                Founded by mental health professionals and researchers, Serenica is built on the principles
                of cognitive behavioral therapy and positive psychology. Our companion NIRA is designed with
                thousands of therapeutic conversations in mind, continuously refined to provide empathetic,
                personalized support.
              </p>
              <p>
                We believe that mental wellness should be within reach for everyone, which is why we've created
                a safe, judgment-free space where you can explore your thoughts, build resilience, and develop
                healthier thinking patterns at your own pace.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 relative">
                <div className="w-14 h-14 bg-warm-black rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-warm-black mb-2">Privacy First</h3>
                  <p className="text-sm text-gentle-gray leading-relaxed">
                    Your data is encrypted and protected with bank-level security. We never share your personal information.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 relative">
                <div className="w-14 h-14 bg-warm-black rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Award className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-warm-black mb-2">Science-Backed</h3>
                  <p className="text-sm text-gentle-gray leading-relaxed">
                    Built on proven therapeutic methods and validated by mental health experts and researchers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4 relative">
                <div className="w-14 h-14 bg-warm-black rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-warm-black mb-2">Community Support</h3>
                  <p className="text-sm text-gentle-gray leading-relaxed">
                    Join thousands of users on their wellness journey, supported by our dedicated team of professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
