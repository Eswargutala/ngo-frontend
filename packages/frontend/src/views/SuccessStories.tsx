'use client';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SuccessStories() {
  const { t } = useThemeLanguage();

  const stories = [
    {
      emoji: '🎓',
      title: "Ravi's Journey to Confidence",
      description: 'Ravi, a student from a rural village, struggled with English and basic computer skills. Through our education program, he gained confidence and now actively participates in school activities.',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1693747204085-4a24565515b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHN0dWRlbnQlMjBzdHVkeWluZyUyMGluZGlhfGVufDF8fHx8MTc3NDM3NTE1MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      emoji: '🎯',
      title: 'Finding the Right Path',
      description: 'Anjali was unsure about her future after 10th. With proper mentorship and assessment, she discovered her interest and is now pursuing her chosen path with clarity.',
      category: 'Career Guidance',
      image: 'https://images.unsplash.com/photo-1650525217641-891e936d3486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2FyZWVyJTIwZ3VpZGFuY2UlMjBjb3Vuc2VsaW5nfGVufDF8fHx8MTc3NDM3NTE1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      emoji: '👩‍💼',
      title: 'From Dependence to Independence',
      description: 'Meena learned bag-making skills and now earns a steady income, supporting her family and gaining financial independence.',
      category: 'Women Empowerment',
      image: 'https://images.unsplash.com/photo-1641810290430-c24d021d4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNld2luZyUyMGhhbmRtYWRlJTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzc1MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      emoji: '🎭',
      title: 'Confidence Through Creativity',
      description: 'Through drama workshops, students developed confidence, communication skills, and the courage to express themselves.',
      category: 'Skill Development',
      image: 'https://images.unsplash.com/photo-1616992805251-7d30ea87b5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRyYW1hJTIwdGhlYXRyZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3NDM3NTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      emoji: '🌾',
      title: 'A More Aware Community',
      description: 'Awareness sessions helped villagers understand education, health, and opportunities, leading to positive community changes.',
      category: 'Rural Development',
      image: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwaW5kaWElMjBydXJhbHxlbnwxfHx8fDE3NzQzNzUxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      emoji: '🩺',
      title: 'Health Awareness Saves Lives',
      description: 'Health camps and awareness sessions encouraged early check-ups and better hygiene practices in the community.',
      category: 'Health Program',
      image: 'https://images.unsplash.com/photo-1624903715293-afe920c6adad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwcnVyYWwlMjBpbmRpYSUyMG1lZGljYWx8ZW58MXx8fHwxNzc0Mzc1MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
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
              {t('Success Stories')}
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Real people. Real impact.
            </p>
          </div>

          {/* Stories Grid - Horizontal Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-7">
            {stories.map((story, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-4 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
              >
                {/* Image - 40% on desktop, full width on mobile */}
                <div className="sm:w-[40%] flex-shrink-0">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[130px] object-cover rounded-lg"
                  />
                </div>

                {/* Content - 60% on desktop, full width on mobile */}
                <div className="sm:w-[60%] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">{story.emoji}</span>
                      <span className="text-xs font-medium text-[#1E7A6E] dark:text-[#4FD1C5] uppercase tracking-wide">
                        {story.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base text-[#111827] dark:text-white mb-1.5">
                      {story.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-3">
                      {story.description}
                    </p>
                  </div>

                  <button
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E7A6E] dark:text-[#4FD1C5] hover:gap-2.5 transition-all duration-200 mt-3 self-start"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA - View All Stories */}
          <div className="text-center py-6">
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
              Explore more inspiring journeys
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200">
              View All Stories
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
