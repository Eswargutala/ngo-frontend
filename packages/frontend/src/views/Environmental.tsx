'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Leaf, TreePine, Recycle, School, Users, MapPin, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Environmental() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Pollution in air and water',
    'Increasing plastic waste',
    'Lack of awareness in rural areas',
    'Climate-related impacts on daily life'
  ];

  const vision = [
    'Cleaner communities',
    'Environmentally aware students',
    'Sustainable habits in daily life'
  ];

  const approach = [
    { icon: Leaf, text: 'Community awareness campaigns' },
    { icon: School, text: 'School-based environmental sessions' },
    { icon: Recycle, text: 'Promoting sustainable practices' },
    { icon: TreePine, text: 'Tree plantation drives' }
  ];

  const activities = [
    {
      icon: Leaf,
      title: 'Awareness Drives',
      description: 'Educating communities about environmental issues.',
      image: 'https://images.unsplash.com/photo-1721143913155-672caf43df3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudmlyb25tZW50YWwlMjBlZHVjYXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzc0MzcxMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: TreePine,
      title: 'Tree Plantation',
      description: 'Planting trees in local areas to improve green cover.',
      image: 'https://images.unsplash.com/photo-1752169580565-c2515f8973f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGVudmlyb25tZW50YWwlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzc0MzcxMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Recycle,
      title: 'Cleanliness Campaigns',
      description: 'Encouraging clean surroundings and waste management.',
      image: 'https://images.unsplash.com/photo-1758599669008-fb6f8eda6f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmxpbmVzcyUyMGNhbXBhaWduJTIwY29tbXVuaXR5JTIwY2xlYW51cHxlbnwxfHx8fDE3NzQzNzExMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: School,
      title: 'School Programs',
      description: 'Teaching students about sustainability and responsibility.',
      image: 'https://images.unsplash.com/photo-1623059190081-3045101c6498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhJTIwdmlsbGFnZSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3NDM3MTEwOHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const impact = [
    { icon: TreePine, label: 'Trees Planted', value: '5,000+' },
    { icon: Users, label: 'People Reached', value: '8,500+' },
    { icon: School, label: 'Schools Covered', value: '28+' },
    { icon: Recycle, label: 'Campaigns Conducted', value: '65+' }
  ];

  const contributions = [
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Participate in campaigns and drives'
    },
    {
      icon: Heart,
      title: 'Donate',
      description: 'Support materials and activities'
    },
    {
      icon: TrendingUp,
      title: 'Spread Awareness',
      description: 'Encourage others to act responsibly'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1752169580565-c2515f8973f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGVudmlyb25tZW50YWwlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzc0MzcxMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758599669008-fb6f8eda6f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmxpbmVzcyUyMGNhbXBhaWduJTIwY29tbXVuaXR5JTIwY2xlYW51cHxlbnwxfHx8fDE3NzQzNzExMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1721143913155-672caf43df3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGVudmlyb25tZW50YWwlMjBlZHVjYXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzc0MzcxMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1771172195097-d61aa2103b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjB3YXN0ZSUyMG1hbmFnZW1lbnQlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzc0MzcxMTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1689606646730-312a90287c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMG5hdHVyZSUyMHN1c3RhaW5hYmlsaXR5JTIwZWFydGh8ZW58MXx8fHwxNzc0MzcxMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1623059190081-3045101c6498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhJTIwdmlsbGFnZSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3NDM3MTEwOHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className={`max-w-[800px] mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-[42px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
            Protecting Nature, Preserving the Future
          </h1>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] leading-relaxed max-w-[600px] mx-auto">
            We work towards environmental awareness, sustainability, and community-driven action to build a greener tomorrow.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white px-6 py-3 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
            >
              <Leaf className="w-4 h-4" />
              Join the Movement
            </a>
            <a 
              href="/volunteer"
              className="inline-flex items-center gap-2 border border-[#16A34A] dark:border-[#22C55E] text-[#16A34A] dark:text-[#22C55E] px-6 py-3 rounded-lg font-medium hover:bg-[#16A34A] hover:text-white dark:hover:bg-[#22C55E] dark:hover:text-[#0B1F1D] transition-colors font-['Inter',sans-serif] text-[14px]"
            >
              <Users className="w-4 h-4" />
              Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Powerful Quote */}
      <section className="py-6 px-4 bg-[#F0FDF4] dark:bg-[#14532D]/20 border-y border-[#BBF7D0] dark:border-[#166534]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[15px] font-medium text-[#166534] dark:text-[#86EFAC] font-['Inter',sans-serif] italic">
            "We do not inherit the Earth from our ancestors; we borrow it from our children."
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
            Environmental challenges are growing rapidly:
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
            Small actions at the local level can create meaningful change.
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
            We aim to create:
          </p>
          <ul className="space-y-2 mb-5">
            {vision.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                <span className="text-[#16A34A] dark:text-[#22C55E] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-medium font-['Inter',sans-serif] leading-relaxed">
            Our focus is on awareness, action, and long-term impact.
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
            We believe in simple, actionable steps.
          </p>
          <div className="space-y-4">
            {approach.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-[#16A34A] dark:text-[#22C55E] flex-shrink-0 mt-0.5" />
                <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
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
                  <activity.icon className="w-6 h-6 text-[#16A34A] dark:text-[#22C55E] flex-shrink-0 mt-0.5" />
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
            Small steps, real impact.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-[#16A34A] dark:text-[#22C55E] mx-auto mb-2" />
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
      <section className="py-16 px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-8 font-['Poppins',sans-serif]">
            How You Can Contribute
          </h2>
          <div className="space-y-8">
            {contributions.map((contribution, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  <contribution.icon className="w-6 h-6 text-[#16A34A] dark:text-[#22C55E] flex-shrink-0 mt-0.5" />
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
                  alt={`Environmental activity ${index + 1}`}
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
            Every Small Action Counts
          </h2>
          <p className="text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mb-8 font-['Inter',sans-serif] max-w-[500px] mx-auto">
            Join us in building a cleaner and greener future.
          </p>
          <a 
            href="/volunteer"
            className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[15px]"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
