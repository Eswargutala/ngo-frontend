'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, Monitor, Sprout, Heart, Users, MapPin, TrendingUp, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function RuralDevelopment() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Limited access to education and resources',
    'Lack of awareness about opportunities',
    'Poor infrastructure and basic facilities',
    'Limited income and employment options'
  ];

  const focus = [
    'Community awareness',
    'Education and skill support',
    'Sustainable development',
    'Improving quality of life'
  ];

  const approach = [
    'Working directly with local communities',
    'Conducting awareness sessions',
    'Supporting education and skill programs',
    'Encouraging self-reliance'
  ];

  const initiatives = [
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Helping students access learning opportunities'
    },
    {
      icon: Monitor,
      title: 'Digital Awareness',
      description: 'Introducing basic technology and internet usage'
    },
    {
      icon: Sprout,
      title: 'Environmental Awareness',
      description: 'Promoting sustainable practices'
    },
    {
      icon: Heart,
      title: 'Health Awareness',
      description: 'Spreading knowledge about hygiene and health'
    },
    {
      icon: Users,
      title: 'Skill Development',
      description: 'Encouraging income-generating skills'
    }
  ];

  const impact = [
    { icon: MapPin, label: 'Villages Reached', value: '45+' },
    { icon: Users, label: 'People Impacted', value: '8,000+' },
    { icon: BookOpen, label: 'Programs Conducted', value: '120+' },
    { icon: Handshake, label: 'Volunteers Involved', value: '200+' }
  ];

  const contributions = [
    {
      icon: Handshake,
      title: 'Volunteer',
      description: 'Work directly with communities'
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'Help expand rural initiatives'
    },
    {
      icon: TrendingUp,
      title: 'Spread Awareness',
      description: 'Encourage community participation'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHklMjBpbmRpYXxlbnwxfHx8fDE3NzQzNzM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759143103540-78298031a86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwZWR1Y2F0aW9uJTIwY2hpbGRyZW4lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQzNzM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768271179726-b5084b33f526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwYWdyaWN1bHR1cmUlMjBmYXJtaW5nfGVufDF8fHx8MTc3NDM3MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1734174050925-3dca7c6bbad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBhd2FyZW5lc3MlMjBzZXNzaW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0MzczNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1703922055338-1bf44533da53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhJTIwdmlsbGFnZSUyMGxpZmV8ZW58MXx8fHwxNzc0MzczNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwd29tZW4lMjBlbXBvd2VybWVudCUyMHJ1cmFsfGVufDF8fHx8MTc3NDM3MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-14 px-4">
        <div className={`max-w-[820px] mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-[42px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
            Strengthening Rural Communities
          </h1>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] leading-relaxed max-w-[680px] mx-auto">
            We work towards improving living conditions, awareness, and opportunities in rural areas through focused community-driven initiatives.
          </p>
          <a 
            href="/donate"
            className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white px-6 py-3 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
          >
            <Heart className="w-4 h-4" />
            Support Rural Development
          </a>
        </div>
      </section>

      {/* Powerful Quote */}
      <section className="py-6 px-4 bg-[#F0FDF4] dark:bg-[#15803D]/20 border-y border-[#BBF7D0] dark:border-[#166534]">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="text-[15px] font-medium text-[#166534] dark:text-[#86EFAC] font-['Inter',sans-serif] italic">
            "Strong villages build a strong nation."
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-14 px-4">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            The Problem
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-5 font-['Inter',sans-serif] leading-relaxed">
            Rural communities often face:
          </p>
          <ul className="space-y-2 mb-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">•</span>
                {problem}
              </li>
            ))}
          </ul>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            These challenges slow down overall development.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[760px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151] my-7"></div>
      </div>

      {/* Our Focus */}
      <section className="py-14 px-4">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            Our Focus
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            We focus on:
          </p>
          <ul className="space-y-2 mb-5">
            {focus.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#15803D] dark:text-[#22C55E] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-medium font-['Inter',sans-serif] leading-relaxed">
            Development begins with awareness and opportunity.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[760px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151] my-7"></div>
      </div>

      {/* Our Approach */}
      <section className="py-14 px-4">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            Our Approach
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-5 font-['Inter',sans-serif] leading-relaxed">
            Our approach is community-centered and practical:
          </p>
          <ul className="space-y-2">
            {approach.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[760px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151] my-7"></div>
      </div>

      {/* Key Initiatives */}
      <section className="py-14 px-4">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif]">
            Key Initiatives
          </h2>
          <div className="space-y-8">
            {initiatives.map((initiative, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  <initiative.icon className="w-6 h-6 text-[#15803D] dark:text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                      {initiative.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {initiative.description}
                    </p>
                  </div>
                </div>
                {index < initiatives.length - 1 && (
                  <div className="mt-8 border-t border-[#E5E7EB] dark:border-[#374151]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-14 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif] text-center">
            Impact
          </h2>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] text-center">
            Small efforts, meaningful change.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-[#15803D] dark:text-[#22C55E] mx-auto mb-2" />
                <p className="text-[32px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                  {item.value}
                </p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Contribute */}
      <section className="py-14 px-4">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif]">
            How You Can Contribute
          </h2>
          <div className="space-y-6">
            {contributions.map((contribution, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  <contribution.icon className="w-6 h-6 text-[#15803D] dark:text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                      {contribution.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {contribution.description}
                    </p>
                  </div>
                </div>
                {index < contributions.length - 1 && (
                  <div className="mt-6 border-t border-[#E5E7EB] dark:border-[#374151]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-14 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif] text-center">
            Our Work in Villages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <ImageWithFallback 
                  src={image}
                  alt={`Rural development activity ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 mb-8">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-[32px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Empowering Villages, Transforming Lives
          </h2>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] max-w-[520px] mx-auto">
            Join us in bringing sustainable development to rural communities.
          </p>
          <a 
            href="/volunteer"
            className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[15px]"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
