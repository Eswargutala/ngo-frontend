'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Users, Package, DollarSign, MapPin, Heart, TrendingUp, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function WomenEmpowerment() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Limited employment opportunities',
    'Financial dependence',
    'Lack of skill-based training',
    'Restricted access to markets'
  ];

  const vision = [
    'Financial independence for women',
    'Skill-based self-reliance',
    'Dignified employment opportunities'
  ];

  const approach = [
    '🧵 Training women in handmade bag production',
    '🤝 Providing consistent work opportunities',
    '📦 Supporting product distribution',
    '💰 Ensuring fair earnings'
  ];

  const activities = [
    {
      icon: Users,
      title: 'Skill Training',
      description: 'Women are trained to create high-quality handmade bags.',
      image: 'https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwdHJhaW5pbmclMjBza2lsbHN8ZW58MXx8fHwxNzc0MzcyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Package,
      title: 'Production',
      description: 'They actively work on making different types of bags.',
      image: 'https://images.unsplash.com/photo-1635790073975-ac99496914e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGFydGlzYW4lMjBoYW5kbWFkZSUyMGNyYWZ0JTIwd29ya3xlbnwxfHx8fDE3NzQzNzI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: DollarSign,
      title: 'Employment',
      description: 'We provide earning opportunities through this work.',
      image: 'https://images.unsplash.com/photo-1741176506057-84d2393218cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGVudHJlcHJlbmV1ciUyMHdvcmtpbmd8ZW58MXx8fHwxNzc0MzcyNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: TrendingUp,
      title: 'Distribution Support',
      description: 'We help in selling and reaching markets.',
      image: 'https://images.unsplash.com/photo-1770782912846-1242845351da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJhZ3MlMjB0ZXh0aWxlJTIwY3JhZnR8ZW58MXx8fHwxNzc0MzcyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const impact = [
    { icon: Users, label: 'Women Empowered', value: '350+' },
    { icon: Package, label: 'Bags Produced', value: '15,000+' },
    { icon: DollarSign, label: 'Income Generated', value: '₹25L+' },
    { icon: MapPin, label: 'Communities Impacted', value: '18+' }
  ];

  const contributions = [
    {
      icon: Heart,
      title: 'Support the Initiative',
      description: 'Help us expand training and production'
    },
    {
      icon: TrendingUp,
      title: 'Promote the Products',
      description: 'Encourage use of handmade bags'
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Collaborate to create more opportunities'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1635790073975-ac99496914e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGFydGlzYW4lMjBoYW5kbWFkZSUyMGNyYWZ0JTIwd29ya3xlbnwxfHx8fDE3NzQzNzI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770782912846-1242845351da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJhZ3MlMjB0ZXh0aWxlJTIwY3JhZnR8ZW58MXx8fHwxNzc0MzcyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwdHJhaW5pbmclMjBza2lsbHN8ZW58MXx8fHwxNzc0MzcyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1684259498917-b0cde0133e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjB3b3Jrc2hvcCUyMHdvbWVuJTIwZ3JvdXB8ZW58MXx8fHwxNzc0MzcyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1741176506057-84d2393218cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGVudHJlcHJlbmV1ciUyMHdvcmtpbmd8ZW58MXx8fHwxNzc0MzcyNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770364795029-20489cdf7b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMGJhZ3MlMjBhY2Nlc3NvcmllcyUyMHByb2R1Y3RzfGVufDF8fHx8MTc3NDM3MjQ5OHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className={`max-w-[800px] mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-[42px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
            Empowering Women Through Skill & Opportunity
          </h1>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] leading-relaxed max-w-[600px] mx-auto">
            We create sustainable livelihood opportunities for women by enabling them to craft handmade bags and become financially independent.
          </p>
          <a 
            href="/donate"
            className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] dark:bg-[#8B5CF6] dark:hover:bg-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
          >
            <Heart className="w-4 h-4" />
            Support This Initiative
          </a>
        </div>
      </section>

      {/* Powerful Quote */}
      <section className="py-6 px-4 bg-[#F5F3FF] dark:bg-[#5B21B6]/20 border-y border-[#DDD6FE] dark:border-[#6D28D9]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[15px] font-medium text-[#6D28D9] dark:text-[#C4B5FD] font-['Inter',sans-serif] italic">
            "When a woman earns, a family grows stronger."
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
            Many women in underserved communities face:
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
            This limits their ability to support themselves and their families.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[720px] mx-auto px-4">
        <div className="border-t border-[#E5E7EB] dark:border-[#374151]"></div>
      </div>

      {/* Our Vision */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
            Our Vision
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            We aim to build:
          </p>
          <ul className="space-y-2 mb-5">
            {vision.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#7C3AED] dark:text-[#8B5CF6] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-medium font-['Inter',sans-serif] leading-relaxed">
            Empowered women create stronger families and communities.
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
            We focus on skill development + opportunity creation:
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

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif]">
            What We Do
          </h2>
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={index}>
                <div className="flex items-start gap-3 mb-3">
                  <activity.icon className="w-6 h-6 text-[#7C3AED] dark:text-[#8B5CF6] flex-shrink-0 mt-0.5" />
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
            Creating independence through opportunity.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-[#7C3AED] dark:text-[#8B5CF6] mx-auto mb-2" />
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
                  <contribution.icon className="w-6 h-6 text-[#7C3AED] dark:text-[#8B5CF6] flex-shrink-0 mt-0.5" />
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
                  alt={`Women empowerment activity ${index + 1}`}
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
            Empower a Woman, Empower a Community
          </h2>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] max-w-[500px] mx-auto">
            Join us in creating sustainable livelihoods and financial independence.
          </p>
          <a 
            href="/volunteer"
            className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] dark:bg-[#8B5CF6] dark:hover:bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[15px]"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
