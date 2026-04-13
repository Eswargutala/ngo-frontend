'use client';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, MessageSquare, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Testimonials() {
  const { t } = useThemeLanguage();

  const videoTestimonials = [
    {
      title: 'This program gave me clarity.',
      description: 'A student shares how career guidance helped in choosing the right path.',
      category: '🎓 Student Story',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    },
    {
      title: 'Now I earn with dignity.',
      description: 'A participant explains how skill training created income opportunities.',
      category: '👩‍💼 Women Empowerment',
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    },
  ];

  const textTestimonials = [
    {
      emoji: '🎓',
      quote: 'Now I know what I want to become.',
      text: 'I’m grateful for the support I received. It truly made a difference in my life',
      author: 'Ravi Kumar',
      role: 'Student',
      avatar:
        'https://images.unsplash.com/photo-1647934786533-f3c15896410b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDM3NjU0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      emoji: '🎯',
      quote: 'This program changed my thinking.',
      text: 'Their guidance changed my life and gave me hope for a better future.',
      author: 'Anjali',
      role: 'Women Empoverment',
      avatar:
        'https://images.unsplash.com/photo-1761125050322-bbfc155571bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0Mzc2NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      emoji: '🎭',
      quote: 'I am confident on stage now.',
      text: 'Drama sessions helped me overcome fear and express myself.',
      author: 'Student Participant',
      role: 'Skill Development',
      avatar:
        'https://images.unsplash.com/photo-1756885375569-f04400d99cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBpbmRpYSUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzQzNzY1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      emoji: '🩺',
      quote: 'We follow better hygiene practices now.',
      text: 'Awareness sessions helped our community improve daily habits.',
      author: 'Community Member',
      role: 'Health',
      avatar:
        'https://images.unsplash.com/photo-1634090217673-aaa14784727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGNvbW11bml0eSUyMG1lbWJlcnxlbnwxfHx8fDE3NzQzNzY1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      emoji: '🌾',
      quote: 'Positive changes are visible.',
      text: 'People are more aware and active in improving the village.',
      author: 'Local Resident',
      role: 'Rural Development',
      avatar:
        'https://images.unsplash.com/photo-1656070487177-8e19a04cf426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBydXJhbCUyMHZpbGxhZ2UlMjByZXNpZGVudCUyMGVsZGVyfGVufDF8fHx8MTc3NDM3NjU0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      emoji: '🤝',
      quote: 'A meaningful experience.',
      text: 'Working with the NGO helped me grow personally and contribute to society.',
      author: 'Volunteer',
      role: 'Volunteer',
      avatar:
        'https://images.unsplash.com/photo-1758599668209-783bd3691ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB5b3VuZyUyMHBlcnNvbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0Mzc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const shortStories = [
    {
      emoji: '🎓',
      title: 'Journey of Growth',
      description:
        'A student who once struggled with communication is now actively participating in school activities and mentoring others.',
    },
    {
      emoji: '👩‍💼',
      title: 'Financial Independence',
      description:
        'A woman who had no income source is now earning through handmade bag production and supporting her family.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          {/* Header Section - Compact with Action Links */}
          <div className="mb-7">
            <h1 className="text-2xl font-semibold text-[#111827] dark:text-white mb-2">
              {t('Voices from the Community')}
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
              Real experiences from students, volunteers, and communities impacted by our work.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <button className="inline-flex items-center gap-1.5 text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline">
                <ArrowRight size={14} />
                View All Stories
              </button>
              <button className="inline-flex items-center gap-1.5 text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline">
                <MessageSquare size={14} />
                Submit Your Feedback
              </button>
            </div>
          </div>

          {/* Featured Video Testimonials - Top Priority */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Featured Video Testimonials
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {videoTestimonials.map((video, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 space-y-2 bg-white dark:bg-[#112F2B]"
                >
                  {/* Video Embed */}
                  <div className="relative w-full h-40 bg-gradient-to-br from-[#1E7A6E]/20 to-[#F4B400]/20 dark:from-[#1E7A6E]/30 dark:to-[#F4B400]/30 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-[#0D1F1C]/90 backdrop-blur-sm rounded-md">
                      <span className="text-xs font-medium text-[#111827] dark:text-white">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-sm font-semibold text-[#111827] dark:text-white">
                    "{video.title}"
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">{video.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text Testimonials - Main Grid */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Text Testimonials
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {textTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex gap-3 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]"
                >
                  {/* Avatar - Small Circular */}
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Category Emoji */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{testimonial.emoji}</span>
                      <span className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                        {testimonial.role}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-sm font-semibold text-[#111827] dark:text-white">
                      "{testimonial.quote}"
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                      {testimonial.text}
                    </p>

                    {/* Attribution */}
                    <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-2 italic">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Short Story Testimonials - Mini Case Format */}
          <div className="mb-7">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              Short Story Testimonials
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {shortStories.map((story, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  {/* Title with Emoji */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{story.emoji}</span>
                    <h3 className="text-sm font-semibold text-[#111827] dark:text-white">
                      {story.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {story.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators - Inline Strip */}
          <div className="mb-7 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl border border-[#E5E7EB] dark:border-[#1F4D47]">
            <p className="text-sm text-center text-[#6B7280] dark:text-[#9CA3AF]">
              Trusted by{' '}
              <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">
                1200+ students
              </span>{' '}
              •{' '}
              <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">
                60+ volunteers
              </span>{' '}
              •{' '}
              <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">12+ villages</span>
            </p>
          </div>

          {/* Rating / Feedback Summary */}
          <div className="mb-7 text-center">
            <div className="inline-flex items-center gap-2 p-4 bg-white dark:bg-[#112F2B] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} className="fill-[#F4B400] text-[#F4B400]" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#111827] dark:text-white">
                  Average Rating
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  Based on student and volunteer feedback
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section - Compact */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-6 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Be part of these experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/volunteer"
                className="inline-flex items-center px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Join as Volunteer
              </a>
              <a
                href="/donate"
                className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
