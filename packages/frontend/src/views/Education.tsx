'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookOpen, Laptop, Target, School, Users, MapPin, Award, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Education() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Lack of quality education',
    'No access to digital tools',
    'Limited career awareness',
    'Language barriers',
    'Financial constraints'
  ];

  const approaches = [
    {
      icon: MapPin,
      title: 'Community-Based Teaching',
      description: 'Classes in villages and open spaces'
    },
    {
      icon: Laptop,
      title: 'Digital Education',
      description: 'Basic computer skills\nInternet awareness'
    },
    {
      icon: BookOpen,
      title: 'English Learning (Akshar Program)',
      description: 'Weekend classes\nFocus on speaking & writing'
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Mentorship for classes 8–10\nReal-life career exposure'
    }
  ];

  const programs = [
    {
      icon: BookOpen,
      title: 'Akshar Program',
      description: 'Teaching English to students in villages through weekend classes.',
      image: 'https://images.unsplash.com/photo-1665479342112-5c94c97fafc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGVhcm5pbmclMjBsYW5ndWFnZSUyMGNsYXNzfGVufDF8fHx8MTc3NDM1OTM4NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Laptop,
      title: 'Digital Literacy Program',
      description: 'Helping students understand computers, internet, and basic tools.',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGRpZ2l0YWwlMjBsaXRlcmFjeSUyMHRyYWluaW5nfGVufDF8fHx8MTc3NDM1OTM4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Target,
      title: 'Career Guidance Initiative',
      description: 'Helping students choose the right career path through mentorship.',
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwbWVudG9yaW5nJTIwc3R1ZGVudHMlMjBjYXJlZXJ8ZW58MXx8fHwxNzc0MzU5Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: School,
      title: 'School Workshops',
      description: 'Conducting sessions in government schools on technology, awareness, and skill development.',
      image: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc0MzU5Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const impact = [
    { icon: Users, label: 'Students Reached', value: '2,500+' },
    { icon: MapPin, label: 'Villages Covered', value: '35+' },
    { icon: Award, label: 'Volunteers Involved', value: '120+' },
    { icon: School, label: 'Workshops Conducted', value: '180+' }
  ];

  const helpOptions = [
    {
      icon: Users,
      title: 'Become a Volunteer',
      description: 'Teach, mentor, or contribute your skills.',
      cta: 'Join Now',
      link: '/volunteer'
    },
    {
      icon: Heart,
      title: 'Donate',
      description: 'Support education resources, materials, and expansion.',
      cta: 'Donate Now',
      link: '/donate'
    },
    {
      icon: TrendingUp,
      title: 'Spread Awareness',
      description: 'Help us reach more students.',
      cta: 'Share',
      link: '#'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NDI2NDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770843093640-c44ae557928b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGVkdWNhdGlvbiUyMGNoaWxkcmVuJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzc0MzU5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGRpZ2l0YWwlMjBsaXRlcmFjeSUyMHRyYWluaW5nfGVufDF8fHx8MTc3NDM1OTM4NHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4">
        <div className={`max-w-[900px] mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
                Empowering Minds Through Education
              </h1>
              <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] leading-relaxed">
                We provide quality education, digital skills, and career guidance to underprivileged students — helping them build a brighter future.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/volunteer"
                  className="inline-flex items-center gap-2 bg-[#1E7A6E] hover:bg-[#155950] dark:bg-[#4FD1C5] dark:hover:bg-[#38B2A3] text-white px-5 py-2.5 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
                >
                  Join as Volunteer
                </a>
                <a 
                  href="/donate"
                  className="inline-flex items-center gap-2 border border-[#1E7A6E] dark:border-[#4FD1C5] text-[#1E7A6E] dark:text-[#4FD1C5] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1E7A6E] hover:text-white dark:hover:bg-[#4FD1C5] dark:hover:text-[#0B1F1D] transition-colors font-['Inter',sans-serif] text-[14px]"
                >
                  Support Education
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NDI2NDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students learning in classroom"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            About the Program
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            The Education Program by Lakhil Raj Welfare Foundation focuses on bridging the gap between opportunity and access.
          </p>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            We work with students from rural and underserved communities, providing them with:
          </p>
          <ul className="space-y-2 mb-4">
            {['Basic education support', 'English learning', 'Digital literacy', 'Career guidance'].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-[14px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-medium font-['Inter',sans-serif]">
            Our goal is simple: Make every student confident, skilled, and future-ready.
          </p>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Problem We Solve
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            Many students in rural areas face:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10"
              >
                <p className="text-[14px] text-red-800 dark:text-red-200 font-['Inter',sans-serif]">
                  {problem}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] italic">
            These challenges stop talented students from reaching their true potential.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Our Approach
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] leading-relaxed">
            We believe in practical and accessible learning.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30"
              >
                <approach.icon className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5] mb-3" />
                <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                  {approach.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] whitespace-pre-line">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Under Education */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            Programs Under Education
          </h2>
          <div className="space-y-5">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-[180px_1fr] gap-4 p-4 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30"
              >
                <div className="rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <program.icon className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                    <h3 className="text-[17px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif] text-center">
            Our Impact
          </h2>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] text-center">
            Real change, real numbers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg bg-[#F9FAFB] dark:bg-[#0F3D3A] text-center"
              >
                <item.icon className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5] mx-auto mb-2" />
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

      {/* How You Can Help */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            How You Can Help
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {helpOptions.map((option, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30"
              >
                <option.icon className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5] mb-3" />
                <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                  {option.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif]">
                  {option.description}
                </p>
                <a 
                  href={option.link}
                  className="inline-flex items-center gap-1 text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-2 transition-all font-['Inter',sans-serif]"
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            Gallery
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <ImageWithFallback 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#1E7A6E] dark:bg-[#0F3D3A] rounded-xl p-8 text-center">
            <h2 className="text-[32px] font-bold text-white dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
              Every Child Deserves Education
            </h2>
            <p className="text-[15px] text-white/90 dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif]">
              Be a part of this mission and help us create a better future.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="/donate"
                className="inline-flex items-center gap-2 bg-white text-[#1E7A6E] dark:bg-[#4FD1C5] dark:text-[#0B1F1D] px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[14px]"
              >
                Donate Now
              </a>
              <a 
                href="/volunteer"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E7A6E] dark:hover:bg-[#4FD1C5] dark:hover:text-[#0B1F1D] transition-all font-['Inter',sans-serif] text-[14px]"
              >
                Join as Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}