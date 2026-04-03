'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Heart, Users, Activity, Brain } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Health() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Limited access to healthcare',
    'Lack of awareness about hygiene and nutrition',
    'Delayed medical attention',
    'Financial barriers'
  ];

  const focus = [
    'Preventive healthcare',
    'Awareness and education',
    'Basic health support',
    'Community well-being'
  ];

  const approach = [
    'Conduct awareness sessions',
    'Organize basic health camps',
    'Promote hygiene practices',
    'Collaborate with local support systems'
  ];

  const activities = [
    {
      icon: Users,
      title: 'Health Awareness Sessions',
      description: 'Educating people about hygiene, nutrition, and common diseases.',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXdhcmVuZXNzJTIwc2Vzc2lvbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzQzNzIyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Heart,
      title: 'Health Camps',
      description: 'Providing basic check-ups and guidance through camps.',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwbWVkaWNhbCUyMGNoZWNrdXAlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0MzcyMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Activity,
      title: 'Hygiene Campaigns',
      description: 'Promoting cleanliness and healthy habits.',
      image: 'https://images.unsplash.com/photo-1585865162474-b90ce1d3c4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWdpZW5lJTIwY2FtcGFpZ24lMjBjbGVhbmxpbmVzcyUyMGhlYWx0aHxlbnwxfHx8fDE3NzQzNzIyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Brain,
      title: 'Mental Health Awareness',
      description: 'Encouraging open conversations and support.',
      image: 'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0JTIwY291bnNlbGluZ3xlbnwxfHx8fDE3NzQzNTMyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const impact = [
    { icon: Users, label: 'People Reached', value: '12,000+' },
    { icon: Heart, label: 'Health Camps Conducted', value: '95+' },
    { icon: Activity, label: 'Sessions Organized', value: '220+' },
    { icon: Users, label: 'Communities Impacted', value: '38+' }
  ];

  const contributions = [
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Join health awareness initiatives'
    },
    {
      icon: Heart,
      title: 'Donate',
      description: 'Support camps and resources'
    },
    {
      icon: Activity,
      title: 'Spread Awareness',
      description: 'Encourage healthy practices'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwbWVkaWNhbCUyMGNoZWNrdXAlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0MzcyMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770548037928-a29bfacc84ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwY29tbXVuaXR5JTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzQzNzIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1585865162474-b90ce1d3c4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWdpZW5lJTIwY2FtcGFpZ24lMjBjbGVhbmxpbmVzcyUyMGhlYWx0aHxlbnwxfHx8fDE3NzQzNzIyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0JTIwY291bnNlbGluZ3xlbnwxfHx8fDE3NzQzNTMyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770221797840-8f5a095ad7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29tbXVuaXR5JTIwY2FyZXxlbnwxfHx8fDE3NzQzNzIyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXdhcmVuZXNzJTIwc2Vzc2lvbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzQzNzIyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className={`max-w-[800px] mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-[42px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
            Access to Health is a Basic Right
          </h1>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] leading-relaxed max-w-[600px] mx-auto">
            We work to improve health awareness and access to basic healthcare services in underserved communities.
          </p>
          <a 
            href="/donate"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
          >
            <Heart className="w-4 h-4" />
            Support Health Initiatives
          </a>
        </div>
      </section>

      {/* Powerful Quote */}
      <section className="py-6 px-4 bg-[#EFF6FF] dark:bg-[#1E3A8A]/20 border-y border-[#BFDBFE] dark:border-[#1E40AF]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[15px] font-medium text-[#1E40AF] dark:text-[#93C5FD] font-['Inter',sans-serif] italic">
            "Prevention is better than cure — awareness makes it possible."
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            The Problem
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-5 font-['Inter',sans-serif] leading-relaxed">
            Many communities still face:
          </p>
          <ul className="space-y-2 mb-5">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">•</span>
                {problem}
              </li>
            ))}
          </ul>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
            These challenges affect daily life and long-term well-being.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[720px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151]"></div>
      </div>

      {/* Our Focus */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            Our Focus
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            We focus on:
          </p>
          <ul className="space-y-2 mb-5">
            {focus.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#2563EB] dark:text-[#3B82F6] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-medium font-['Inter',sans-serif] leading-relaxed">
            Awareness is the first step toward better health.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[720px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151]"></div>
      </div>

      {/* Our Approach */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            Our Approach
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] leading-relaxed">
            We follow a community-first approach:
          </p>
          <ul className="space-y-3">
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
      <div className="max-w-[720px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151]"></div>
      </div>

      {/* Key Activities */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif]">
            Key Activities
          </h2>
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={index}>
                <div className="flex items-start gap-3 mb-3">
                  <activity.icon className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                      {activity.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed mb-4">
                      {activity.description}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                {index < activities.length - 1 && (
                  <div className="mt-12 border-t border-[#E5E7EB] dark:border-[#374151]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif] text-center">
            Impact
          </h2>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] text-center">
            Improving lives, step by step.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-[#2563EB] dark:text-[#3B82F6] mx-auto mb-2" />
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

      {/* How You Can Help */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif]">
            How You Can Help
          </h2>
          <div className="space-y-8">
            {contributions.map((contribution, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  <contribution.icon className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6] flex-shrink-0 mt-0.5" />
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
                  <div className="mt-8 border-t border-[#E5E7EB] dark:border-[#374151]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif] text-center">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <ImageWithFallback 
                  src={image}
                  alt={`Health program activity ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 mb-8">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-[32px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Healthier Communities Start with Awareness
          </h2>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] max-w-[500px] mx-auto">
            Join us in making healthcare accessible to everyone.
          </p>
          <a 
            href="/volunteer"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[15px]"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
