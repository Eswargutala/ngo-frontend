'use client';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, UserPlus, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Programs() {
  const { t } = useThemeLanguage();

  const programs = [
    {
      title: 'Education Program',
      emoji: '🎓',
      description: 'Learning support, digital education, and career awareness.',
      focus: ['English learning', 'Digital literacy', 'School workshops'],
      link: '/education',
      image: 'https://images.unsplash.com/photo-1709290749293-c6152a187b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHN0dWRlbnRzJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tJTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzc0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Career Guidance',
      emoji: '🎯',
      description: 'Helping students choose the right career through mentorship and assessments.',
      focus: ['Career awareness', 'Assessments', 'Mentorship'],
      link: '/career-guidance',
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwc3R1ZGVudHMlMjBtZW50b3Jpbmd8ZW58MXx8fHwxNzc0Mzc0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Environmental Program',
      emoji: '🌿',
      description: 'Promoting sustainability, awareness, and community action.',
      focus: ['Tree plantation', 'Cleanliness drives', 'Awareness'],
      link: '/environmental',
      image: 'https://images.unsplash.com/photo-1652554928610-56b95ea677f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGVudmlyb25tZW50JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzc0Mzc0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Health Program',
      emoji: '🩺',
      description: 'Improving health awareness and access in communities.',
      focus: ['Health camps', 'Hygiene awareness', 'Community support'],
      link: '/health',
      image: 'https://images.unsplash.com/photo-1773597579506-67ef572eb71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwZG9jdG9yJTIwcnVyYWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0Mzc0ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Women Empowerment',
      emoji: '👩‍💼',
      description: 'Providing livelihood through handmade bag production.',
      focus: ['Skill training', 'Employment', 'Production'],
      link: '/women-empowerment',
      image: 'https://images.unsplash.com/photo-1641810290430-c24d021d4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNld2luZyUyMGhhbmRtYWRlJTIwY3JhZnRzfGVufDF8fHx8MTc3NDM3NDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Skill Development',
      emoji: '🎭',
      description: 'Building practical and creative skills with drama collaboration.',
      focus: ['Skill training', 'Drama activities', 'Personality development'],
      link: '/skill-development',
      image: 'https://images.unsplash.com/photo-1741681001273-db60e15e623d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMHRoZWF0cmUlMjBzdHVkZW50cyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3NDM3NDgzOHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Rural Development',
      emoji: '🌾',
      description: 'Improving awareness, education, and living conditions in villages.',
      focus: ['Community support', 'Awareness', 'Skill programs'],
      link: '/rural-development',
      image: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwZGV2ZWxvcG1lbnQlMjBjb21tdW5pdHklMjBpbmRpYXxlbnwxfHx8fDE3NzQzNzQ4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const impactStats = [
    { label: '1000+ Students', icon: '🎓' },
    { label: '10+ Villages', icon: '🌍' },
    { label: '50+ Volunteers', icon: '🤝' },
    { label: '100+ Sessions', icon: '📚' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          
          {/* Header Section - Compact */}
          <div className="mb-7">
            <h1 className="text-2xl font-semibold text-[#111827] dark:text-white mb-2">
              {t('Our Programs')}
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Focused initiatives creating real impact across education, skills, health, and communities.
            </p>
          </div>

          {/* Programs Grid - Horizontal Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-7">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-4 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
              >
                {/* Image - 40% on desktop, full width on mobile */}
                <div className="sm:w-[40%] flex-shrink-0">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[140px] object-cover rounded-lg"
                  />
                </div>

                {/* Content - 60% on desktop, full width on mobile */}
                <div className="sm:w-[60%] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">{program.emoji}</span>
                      <h3 className="font-semibold text-base text-[#111827] dark:text-white">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-2.5">
                      {program.description}
                    </p>

                    <ul className="text-sm text-[#374151] dark:text-[#D1D5DB] space-y-1">
                      {program.focus.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={program.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E7A6E] dark:text-[#4FD1C5] hover:gap-2.5 transition-all duration-200 mt-3"
                  >
                    View Program
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Strip - Inline */}
          <div className="mb-7 py-5 px-5 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {impactStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <span>{stat.icon}</span>
                  <span className="font-medium text-[#111827] dark:text-white whitespace-nowrap">
                    {stat.label}
                  </span>
                  {index < impactStats.length - 1 && (
                    <span className="hidden sm:inline-block text-[#D1D5DB] dark:text-[#4B5563] ml-4">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Compact */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-[#111827] dark:text-white mb-4">
              Want to contribute?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/volunteer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-colors duration-200"
              >
                <UserPlus size={18} />
                Join as Volunteer
              </a>
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#0D1F1C] hover:bg-[#F3F4F6] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#1E7A6E] dark:border-[#4FD1C5] rounded-lg text-sm font-medium transition-colors duration-200"
              >
                <Heart size={18} />
                Support Programs
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
