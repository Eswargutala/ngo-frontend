'use client';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Download, Calendar, ArrowRight, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AnnualReport() {
  const { t } = useThemeLanguage();

  const missionInAction = [
    'Expanding educational access',
    'Providing career clarity to students',
    'Creating livelihood opportunities',
    'Promoting awareness in communities'
  ];

  const programImpact = [
    {
      emoji: '🎓',
      name: 'Education Program',
      stats: ['500+ students supported', 'English + digital literacy sessions', 'Conducted in rural areas']
    },
    {
      emoji: '🎯',
      name: 'Career Guidance',
      stats: ['300+ students guided', 'MCQ-based assessments conducted', 'Mentorship sessions organized']
    },
    {
      emoji: '👩‍💼',
      name: 'Women Empowerment',
      stats: ['50+ women trained', 'Handmade bag production initiated', 'Income opportunities created']
    },
    {
      emoji: '🎭',
      name: 'Skill Development',
      stats: ['150+ participants', 'Drama workshops with cultural collaboration', 'Focus on communication & confidence']
    },
    {
      emoji: '🩺',
      name: 'Health Program',
      stats: ['10+ health camps', 'Hygiene awareness sessions', '400+ people reached']
    },
    {
      emoji: '🌿',
      name: 'Environmental Program',
      stats: ['Tree plantation drives', 'Cleanliness campaigns', 'Awareness sessions']
    },
    {
      emoji: '🌾',
      name: 'Rural Development',
      stats: ['10 villages impacted', 'Multi-program implementation', 'Community engagement']
    }
  ];

  const growthComparison = [
    { metric: 'Students Reached', year2024: '600', year2025: '1200' },
    { metric: 'Volunteers', year2024: '25', year2025: '60' },
    { metric: 'Programs', year2024: '3', year2025: '7' },
    { metric: 'Villages', year2024: '5', year2025: '12' }
  ];

  const financialData = [
    { category: 'Donations Received', amount: '2,50,000' },
    { category: 'Program Expenses', amount: '1,80,000' },
    { category: 'Operational Costs', amount: '50,000' },
    { category: 'Savings / Balance', amount: '20,000' }
  ];

  const activityImages = [
    'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMHN0dWRlbnRzJTIwZWR1Y2F0aW9uJTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzc2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1683463170494-3cc8be265d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhhbmRtYWRlJTIwY3JhZnRzJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzQzNzYzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwbWVkaWNhbCUyMGNoZWNrdXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc3NDM3NjMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758599668360-48ba8ba71b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudGFsJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzQyOTIyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763809678475-890d69780c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGNvbW11bml0eSUyMGdhdGhlcmluZyUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3NDM3NjMwOHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const achievements = [
    'Successfully expanded to new regions',
    'Strengthened volunteer engagement',
    'Launched new programs (skill + women empowerment)',
    'Increased student participation',
    'Built strong community trust'
  ];

  const challenges = [
    'Limited funding resources',
    'Accessibility issues in remote areas',
    'Awareness gaps among communities',
    'Volunteer coordination challenges'
  ];

  const learnings = [
    'Need for stronger local partnerships',
    'Importance of continuous engagement',
    'Value of structured mentorship systems',
    'Digital tools can scale impact'
  ];

  const futureRoadmap = [
    'Expand to 20+ villages',
    'Increase student reach to 2500+',
    'Strengthen women livelihood programs',
    'Launch digital platforms for guidance',
    'Improve monitoring & reporting systems'
  ];

  const acknowledgments = [
    'Our volunteers',
    'Donors and supporters',
    'Community members',
    'Partner organizations'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          
          {/* Header Section - Compact with Buttons */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-[#111827] dark:text-white mb-2">
                {t('Annual Report 2025')}
              </h1>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                A detailed overview of our programs, impact, and financial activities during the year.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200">
                <Download size={16} />
                Download Full Report
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200">
                <Calendar size={16} />
                Previous Reports
              </button>
            </div>
          </div>

          {/* Quick Highlights - Top Strip */}
          <div className="mb-7 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl border border-[#E5E7EB] dark:border-[#1F4D47]">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🎓 1200+</span> Students Reached</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🌍 12+</span> Villages Covered</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🤝 60+</span> Volunteers</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">📚 150+</span> Sessions Conducted</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">💳 ₹2.5L+</span> Funds Utilized</span>
            </div>
          </div>

          {/* About the Year */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-3">
              About the Year
            </h2>
            <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF] space-y-2 leading-relaxed">
              <p>The year 2025 marked significant growth for Lakhil Raj Welfare Foundation. We expanded our reach across multiple programs including education, career guidance, and skill development.</p>
              <p>Our focus remained on delivering accessible, practical, and impactful initiatives to underserved communities.</p>
              <p>We strengthened our volunteer network and increased engagement at the grassroots level.</p>
            </div>
          </div>

          {/* Mission in Action - Compact Bullets */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-3">
              Mission in Action
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {missionInAction.map((item, index) => (
                <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                  <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Program-wise Impact - Grid */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Program-wise Detailed Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {programImpact.map((program, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{program.emoji}</span>
                    <h3 className="font-semibold text-sm text-[#111827] dark:text-white">
                      {program.name}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {program.stats.map((stat, idx) => (
                      <li key={idx} className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                        • {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Comparison - Compact Table */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Growth Comparison (Before vs Now)
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
                  {growthComparison.map((row, index) => (
                    <tr key={index} className={index < growthComparison.length - 1 ? 'border-b border-[#E5E7EB] dark:border-[#1F4D47]' : ''}>
                      <td className="px-4 py-3 text-[#6B7280] dark:text-[#9CA3AF]">
                        {row.metric}
                      </td>
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

          {/* Financial Summary - Compact Table with Notes */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Financial Summary (Detailed)
            </h2>
            <div className="overflow-x-auto border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl mb-3">
              <table className="w-full text-sm">
                <thead className="bg-[#F9FAFB] dark:bg-[#112F2B]">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-[#111827] dark:text-white border-b border-[#E5E7EB] dark:border-[#1F4D47]">
                      Category
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-[#111827] dark:text-white border-b border-[#E5E7EB] dark:border-[#1F4D47]">
                      Amount (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#0D1F1C]">
                  {financialData.map((row, index) => (
                    <tr key={index} className={index < financialData.length - 1 ? 'border-b border-[#E5E7EB] dark:border-[#1F4D47]' : ''}>
                      <td className="px-4 py-3 text-[#6B7280] dark:text-[#9CA3AF]">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-[#111827] dark:text-white">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-3 text-xs text-[#6B7280] dark:text-[#9CA3AF] space-y-1">
              <p><strong className="text-[#111827] dark:text-white">💡 Notes:</strong></p>
              <p>• Majority funds used for program execution</p>
              <p>• Minimal administrative cost</p>
              <p>• Focus on maximum impact per rupee</p>
            </div>
          </div>

          {/* Activities Snapshot - Images Grid */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Activities Snapshot
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {activityImages.map((image, index) => (
                <ImageWithFallback
                  key={index}
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-28 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Three Column Layout for Achievements, Challenges, and Learnings */}
          <div className="grid sm:grid-cols-3 gap-6 mb-7">
            {/* Key Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-lg font-semibold text-[#111827] dark:text-white">
                  Key Achievements
                </h2>
              </div>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Faced */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={18} className="text-[#F4B400]" />
                <h2 className="text-lg font-semibold text-[#111827] dark:text-white">
                  Challenges Faced
                </h2>
              </div>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <span className="text-[#F4B400] mr-2 mt-0.5">⚠</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-[#F4B400]" />
                <h2 className="text-lg font-semibold text-[#111827] dark:text-white">
                  Learnings
                </h2>
              </div>
              <ul className="space-y-2">
                {learnings.map((learning, index) => (
                  <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5">💡</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Future Roadmap 2026 */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-3">
              Future Roadmap (2026)
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {futureRoadmap.map((goal, index) => (
                <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                  <ArrowRight size={16} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Acknowledgment */}
          <div className="mb-7 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-5 bg-[#F9FAFB] dark:bg-[#112F2B]">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-3">
              Acknowledgment
            </h2>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
              We sincerely thank:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-3">
              {acknowledgments.map((item, index) => (
                <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                  <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">🤝</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#111827] dark:text-white font-medium italic">
              Your support makes this impact possible.
            </p>
          </div>

          {/* CTA Section - Compact */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-6 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Help us continue this journey.
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
