'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Wrench, Drama, Globe, Users, GraduationCap, MessageCircle, TrendingUp, Heart, Handshake, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SkillDevelopment() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Lack of practical skills',
    'Limited exposure to creative fields',
    'Few employment opportunities',
    'Low confidence in communication'
  ];

  const vision = [
    'Skill-based independence',
    'Creative confidence',
    'Career readiness'
  ];

  const approaches = [
    {
      icon: Wrench,
      title: 'Practical Learning',
      description: 'Hands-on skill-based training'
    },
    {
      icon: Drama,
      title: 'Creative Exposure',
      description: 'Drama & performance-based learning'
    },
    {
      icon: Globe,
      title: 'Real-World Skills',
      description: 'Industry-relevant development'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Learning through teamwork'
    }
  ];

  const dramaPoints = [
    'Exposure to performing arts',
    'Confidence building',
    'Communication skills',
    'Cultural awareness'
  ];

  const activities = [
    {
      icon: Wrench,
      title: 'Skill Training',
      description: 'Hands-on sessions for real skills'
    },
    {
      icon: Drama,
      title: 'Drama & Theatre',
      description: 'Acting, storytelling, performance'
    },
    {
      icon: MessageCircle,
      title: 'Communication Skills',
      description: 'Public speaking & confidence'
    },
    {
      icon: TrendingUp,
      title: 'Personality Development',
      description: 'Overall growth and mindset'
    }
  ];

  const impact = [
    { icon: GraduationCap, label: 'Trained', value: '500+' },
    { icon: Drama, label: 'Drama Sessions', value: '50+' },
    { icon: Wrench, label: 'Workshops', value: '30+' },
    { icon: MapPin, label: 'Communities', value: '10+' }
  ];

  const involvement = [
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Help train and guide'
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'Fund resources'
    },
    {
      icon: Handshake,
      title: 'Collaborate',
      description: 'Partner with us'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1768796371633-ba921e535c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMHRyYWluaW5nJTIwd29ya3Nob3AlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQzNzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1764762169699-3b3d3841c92e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMHRoZWF0cmUlMjBwZXJmb3JtYW5jZSUyMGFjdGluZ3xlbnwxfHx8fDE3NzQzNzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765285262670-25e17357d982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbiUyMHNraWxsc3xlbnwxfHx8fDE3NzQzNzMxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2NhdGlvbmFsJTIwdHJhaW5pbmclMjBoYW5kd29yayUyMGNyYWZ0fGVufDF8fHx8MTc3NDM3MzEzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjB3b3Jrc2hvcCUyMGdyb3VwfGVufDF8fHx8MTc3NDM3MzEzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1769095207072-0c84d9b7b9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGVtcG93ZXJtZW50JTIwdHJhaW5pbmclMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzQzNzMxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section - Split Layout */}
      <section className="pt-20 pb-10 px-4">
        <div className={`max-w-[1100px] mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h1 className="text-[42px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
                Building Skills for Real Opportunities
              </h1>
              <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] leading-relaxed">
                Empowering individuals through practical training and creative exposure, including collaboration with the drama sector under the Ministry of Culture.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/registration"
                  className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] dark:bg-[#F97316] dark:hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
                >
                  Join Program
                </a>
                <a 
                  href="/volunteer"
                  className="inline-flex items-center gap-2 border border-[#EA580C] dark:border-[#F97316] text-[#EA580C] dark:text-[#F97316] hover:bg-[#EA580C] hover:text-white dark:hover:bg-[#F97316] px-5 py-2.5 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
                >
                  Become a Volunteer
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1768796371633-ba921e535c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMHRyYWluaW5nJTIwd29ya3Nob3AlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQzNzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Skill Development"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Quote */}
      <section className="py-5 px-4 bg-[#FFF7ED] dark:bg-[#EA580C]/20 border-y border-[#FDBA74] dark:border-[#C2410C]">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[15px] font-medium text-[#C2410C] dark:text-[#FDBA74] font-['Inter',sans-serif] italic">
            "Skills transform potential into opportunity."
          </p>
        </div>
      </section>

      {/* Problem + Vision - 2 Column Block */}
      <section className="py-10 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem */}
            <div className="bg-[#F9FAFB] dark:bg-[#0F3D3A]/30 rounded-xl p-6">
              <h2 className="text-[24px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
                The Challenge
              </h2>
              <ul className="space-y-2">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-2 text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    <span className="text-[#EA580C] dark:text-[#F97316] mt-1">•</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-[#F9FAFB] dark:bg-[#0F3D3A]/30 rounded-xl p-6">
              <h2 className="text-[24px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
                Our Goal
              </h2>
              <ul className="space-y-2 mb-4">
                {vision.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    <span className="text-[#EA580C] dark:text-[#F97316] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-medium font-['Inter',sans-serif] border-l-4 border-[#EA580C] dark:border-[#F97316] pl-3">
                Skills unlock real opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - 4 Card Grid */}
      <section className="py-10 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className="bg-[#F9FAFB] dark:bg-[#0F3D3A]/30 rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-transparent hover:border-[#EA580C] dark:hover:border-[#F97316]"
              >
                <approach.icon className="w-8 h-8 text-[#EA580C] dark:text-[#F97316] mb-3" />
                <h3 className="text-[18px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                  {approach.title}
                </h3>
                <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drama Collaboration - Highlight Section */}
      <section className="py-8 px-4 bg-[#FFF7ED] dark:bg-[#EA580C]/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="border-l-4 border-[#EA580C] dark:border-[#F97316] pl-6">
            <h2 className="text-[24px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
              Collaboration with Drama Sector
            </h2>
            <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-3 font-['Inter',sans-serif]">
              We collaborate with the drama sector under the Ministry of Culture to provide:
            </p>
            <ul className="grid md:grid-cols-2 gap-2">
              {dramaPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  <span className="text-[#EA580C] dark:text-[#F97316] mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Activities - Compact List Grid */}
      <section className="py-10 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            Key Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30 rounded-xl p-4">
                <activity.icon className="w-7 h-7 text-[#EA580C] dark:text-[#F97316] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[17px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                    {activity.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact - Dense Stats Bar */}
      <section className="py-8 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="text-center bg-white dark:bg-[#0B1F1D] rounded-lg p-4"
              >
                <item.icon className="w-8 h-8 text-[#EA580C] dark:text-[#F97316] mx-auto mb-2" />
                <p className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
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

      {/* Get Involved - Card Style */}
      <section className="py-10 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            Get Involved
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {involvement.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[#0F3D3A]/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-[#E5E7EB] dark:border-[#374151] hover:border-[#EA580C] dark:hover:border-[#F97316]"
              >
                <item.icon className="w-10 h-10 text-[#EA580C] dark:text-[#F97316] mb-3" />
                <h3 className="text-[20px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section - Compact Grid */}
      <section className="py-10 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <ImageWithFallback 
                  src={image}
                  alt={`Skill development activity ${index + 1}`}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Box Style */}
      <section className="py-10 px-4 mb-8">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-[#F9FAFB] dark:bg-[#0F3D3A]/30 rounded-2xl p-8 text-center">
            <h2 className="text-[32px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
              Skills Today. Opportunities Tomorrow.
            </h2>
            <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif]">
              Join us in building a skilled and empowered community.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="/registration"
                className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] dark:bg-[#F97316] dark:hover:bg-[#EA580C] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[15px]"
              >
                Join Now
              </a>
              <a 
                href="/donate"
                className="inline-flex items-center gap-2 border-2 border-[#EA580C] dark:border-[#F97316] text-[#EA580C] dark:text-[#F97316] hover:bg-[#EA580C] hover:text-white dark:hover:bg-[#F97316] px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[15px]"
              >
                Support Program
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
