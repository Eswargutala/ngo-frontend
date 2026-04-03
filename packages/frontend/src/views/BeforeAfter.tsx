'use client';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BeforeAfter() {
  const { t } = useThemeLanguage();

  const comparisons = [
    {
      emoji: '🎓',
      title: 'Education Transformation',
      category: 'Education',
      beforeImage: 'https://images.unsplash.com/photo-1759984782106-4b56d0aa05b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBkZXNrJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NDM3NTQwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tJTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzc1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      before: [
        'Low confidence',
        'No digital access',
        'Limited learning'
      ],
      after: [
        'Confident students',
        'Basic computer skills',
        'Active participation'
      ]
    },
    {
      emoji: '👩‍💼',
      title: 'Women Livelihood Growth',
      category: 'Women Empowerment',
      beforeImage: 'https://images.unsplash.com/photo-1504600922674-490c7cd27264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29yJTIwd29tYW4lMjBkZXBlbmRlbnQlMjBzdHJ1Z2dsZXxlbnwxfHx8fDE3NzQzNzUzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1684259499086-93cb3e555803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdvcmtpbmclMjBzZXdpbmclMjBlYXJuaW5nJTIwaW5kZXBlbmRlbmNlfGVufDF8fHx8MTc3NDM3NTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      before: [
        'No income source',
        'Financial dependence'
      ],
      after: [
        'Regular earnings',
        'Financial independence'
      ]
    },
    {
      emoji: '🎭',
      title: 'Confidence Development',
      category: 'Skill Development',
      beforeImage: 'https://images.unsplash.com/photo-1641395270543-ad912941198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHklMjBoZXNpdGFudCUyMHN0dWRlbnQlMjBuZXJ2b3VzfGVufDF8fHx8MTc3NDM3NTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1660795307992-5d91e318efc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBzdHVkZW50JTIwcGVyZm9ybWluZyUyMHN0YWdlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3NDM3NTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      before: [
        'Hesitation in speaking',
        'Low confidence'
      ],
      after: [
        'Stage participation',
        'Strong communication'
      ]
    },
    {
      emoji: '🩺',
      title: 'Health Awareness Change',
      category: 'Health Program',
      beforeImage: 'https://images.unsplash.com/photo-1761342612330-0fd6c3af70ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29yJTIwaHlnaWVuZSUyMHVuaGVhbHRoeSUyMHJ1cmFsJTIwY29uZGl0aW9uc3xlbnwxfHx8fDE3NzQzNzUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjaGVja3VwJTIwbWVkaWNhbCUyMGh5Z2llbmUlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzc0Mzc1Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      before: [
        'Lack of hygiene awareness',
        'Irregular checkups'
      ],
      after: [
        'Better hygiene habits',
        'Awareness of health'
      ]
    },
    {
      emoji: '🌿',
      title: 'Environmental Improvement',
      category: 'Environmental Program',
      beforeImage: 'https://images.unsplash.com/photo-1749805339958-4b1d0f16423d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHBvbGx1dGlvbiUyMGdhcmJhZ2UlMjBlbnZpcm9ubWVudGFsJTIwcHJvYmxlbXxlbnwxfHx8fDE3NzQzNzUzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1762395145069-7f4294725433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGVudmlyb25tZW50JTIwdHJlZSUyMHBsYW50YXRpb24lMjBncmVlbnxlbnwxfHx8fDE3NzQzNzUzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      before: [
        'Waste accumulation',
        'Low awareness'
      ],
      after: [
        'Clean surroundings',
        'Tree plantation'
      ]
    },
    {
      emoji: '🌾',
      title: 'Community Development',
      category: 'Rural Development',
      beforeImage: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHklMjBpbmRpYXxlbnwxfHx8fDE3NzQzNzM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1709744876813-3eeda0c6a2a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmUlMjBjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHZpbGxhZ2UlMjBpbXByb3ZlbWVudHxlbnwxfHx8fDE3NzQzNzUzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      before: [
        'Low awareness',
        'Limited opportunities'
      ],
      after: [
        'Active participation',
        'Improved awareness'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          
          {/* Header Section - Compact & Left Aligned */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#111827] dark:text-white mb-2">
              {t('Before & After')}
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Real change through action.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-7">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] space-y-3 hover:shadow-lg transition-all duration-300"
              >
                {/* Title */}
                <div className="flex items-center gap-2">
                  <span className="text-base">{comparison.emoji}</span>
                  <h3 className="font-semibold text-base text-[#111827] dark:text-white">
                    {comparison.title}
                  </h3>
                </div>

                {/* Image Pair - Side by Side */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <ImageWithFallback
                      src={comparison.beforeImage}
                      alt="Before"
                      className="h-[120px] w-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-[#6B7280]/90 text-white text-xs font-medium px-2 py-0.5 rounded">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <ImageWithFallback
                      src={comparison.afterImage}
                      alt="After"
                      className="h-[120px] w-full object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 bg-[#1E7A6E]/90 text-white text-xs font-medium px-2 py-0.5 rounded">
                      After
                    </div>
                  </div>
                </div>

                {/* Before/After Points - Side by Side */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {/* Before Column */}
                  <div>
                    <p className="font-medium text-[#6B7280] dark:text-[#9CA3AF] mb-1.5">
                      Before
                    </p>
                    <ul className="space-y-1">
                      {comparison.before.map((point, idx) => (
                        <li key={idx} className="text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                          <span className="mr-1.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After Column */}
                  <div>
                    <p className="font-medium text-[#1E7A6E] dark:text-[#4FD1C5] mb-1.5">
                      After
                    </p>
                    <ul className="space-y-1">
                      {comparison.after.map((point, idx) => (
                        <li key={idx} className="text-[#111827] dark:text-[#D1D5DB] flex items-start">
                          <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-1.5">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="text-center py-6">
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
              See more transformations
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200">
              Explore All Impact
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
