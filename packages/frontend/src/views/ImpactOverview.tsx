'use client';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ImpactOverview() {
  const { t } = useThemeLanguage();

  const programImpact = [
    {
      emoji: '🎓',
      name: 'Education',
      impacts: ['Students trained', 'Digital skills improved', 'Confidence increased'],
    },
    {
      emoji: '🎯',
      name: 'Career Guidance',
      impacts: ['Students gained clarity', 'Career decisions improved'],
    },
    {
      emoji: '👩‍💼',
      name: 'Women Empowerment',
      impacts: ['Income generation started', 'Financial independence'],
    },
    {
      emoji: '🎭',
      name: 'Skill Development',
      impacts: ['Communication improved', 'Confidence built'],
    },
    {
      emoji: '🩺',
      name: 'Health',
      impacts: ['Hygiene awareness increased', 'Better health practices'],
    },
    {
      emoji: '🌿',
      name: 'Environment',
      impacts: ['Clean surroundings', 'Tree plantation drives'],
    },
    {
      emoji: '🌾',
      name: 'Rural Development',
      impacts: ['Community awareness', 'Better participation'],
    },
  ];

  const successStories = [
    {
      quote: 'Now I know my career path.',
      description: 'A student who gained clarity through mentorship.',
    },
    {
      quote: 'I earn and support my family.',
      description: 'A woman empowered through skill training.',
    },
  ];

  const growthData = [
    { metric: 'Students', year2024: '600', year2025: '1200' },
    { metric: 'Volunteers', year2024: '25', year2025: '60' },
    { metric: 'Programs', year2024: '3', year2025: '7' },
    { metric: 'Villages', year2024: '5', year2025: '12' },
  ];

  const activityImages = [
    'https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB3b3Jrc2hvcCUyMHN0dWRlbnRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc0MzUxMDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMHRyYWluaW5nJTIwd29ya3Nob3AlMjBoYW5kcyUyMGNyYWZ0c3xlbnwxfHx8fDE3NzQzNzY5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwdm9sdW50ZWVycyUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzc0Mzc2OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763809678475-890d69780c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwZGV2ZWxvcG1lbnQlMjBydXJhbCUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQzNzY5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const impactMeaning = [
    'Students gain confidence and direction',
    'Women become financially independent',
    'Communities become more aware',
    'Villages move towards development',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          {/* Header Section - Compact & Left Aligned */}
          <div className="mb-7">
            <h1 className="text-2xl font-semibold text-[#111827] dark:text-white mb-2">
              {t('Our Impact')}
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Measuring the change we create across education, skills, health, and communities.
            </p>
          </div>

          {/* Program-wise Impact - Grid */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Program-wise Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {programImpact.map((program, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{program.emoji}</span>
                    <h3 className="font-semibold text-sm text-[#111827] dark:text-white">
                      {program.name}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {program.impacts.map((impact, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                      >
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">✓</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories - Mini Section */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Success Stories
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <p className="text-sm font-semibold text-[#111827] dark:text-white mb-2">
                    "{story.quote}"
                  </p>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">{story.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Over Time - Compact Table */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
              Growth Over Time
            </h2>
            <div className="overflow-x-auto border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-[#F9FAFB] dark:bg-[#112F2B]">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-[#111827] dark:text-white border-b border-[#E5E7EB] dark:border-[#1F4D47]">
                      Metric
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-[#111827] dark:text-white border-b border-[#E5E7EB] dark:border-[#1F4D47]">
                      2024
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-[#111827] dark:text-white border-b border-[#E5E7EB] dark:border-[#1F4D47]">
                      2025
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#0D1F1C]">
                  {growthData.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        index < growthData.length - 1
                          ? 'border-b border-[#E5E7EB] dark:border-[#1F4D47]'
                          : ''
                      }
                    >
                      <td className="px-4 py-3 text-[#6B7280] dark:text-[#9CA3AF]">{row.metric}</td>
                      <td className="px-4 py-3 text-center font-medium text-[#111827] dark:text-white">
                        {row.year2024}
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">
                        {row.year2025}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activities Snapshot */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Activities Snapshot
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activityImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-28 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* What This Impact Means */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-3">
              What This Impact Means
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-[#F9FAFB] dark:bg-[#112F2B]">
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                Our work has helped:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {impactMeaning.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                  >
                    <ArrowRight
                      size={16}
                      className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section - Compact */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-6 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Help us create more impact.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/donate"
                className="inline-flex items-center px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Donate
              </a>
              <a
                href="/volunteer"
                className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
