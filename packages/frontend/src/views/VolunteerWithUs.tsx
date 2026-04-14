'use client';
import { useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  Heart,
  TrendingUp,
  Award,
  Users,
  Globe,
  Code,
  Megaphone,
  Palette,
  GraduationCap,
  ChevronDown,
  Send,
  ArrowRight,
  Rocket,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;

export default function VolunteerWithUs() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    areaOfInterest: '',
    why: '',
    availability: '',
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${BASE_URL}/forms/volunteer`, formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      areaOfInterest: '',
      why: '',
      availability: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('volunteer-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToRoles = () => {
    const rolesElement = document.getElementById('roles');
    rolesElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whyVolunteer = [
    { icon: Globe, text: 'Real-world experience' },
    { icon: GraduationCap, text: 'Skill development' },
    { icon: Users, text: 'Team collaboration' },
    { icon: Award, text: 'Certificate & recognition' },
    { icon: Heart, text: 'Social impact' },
    { icon: Rocket, text: 'Leadership opportunities' },
  ];

  const volunteerRoles = [
    {
      icon: GraduationCap,
      emoji: '🎓',
      title: 'Teaching & Mentorship',
      tasks: ['Teach English / digital skills', 'Guide students'],
    },
    {
      icon: Code,
      emoji: '💻',
      title: 'Technical Team',
      tasks: ['Web development', 'UI/UX design', 'App support'],
    },
    {
      icon: Megaphone,
      emoji: '📢',
      title: 'Outreach Team',
      tasks: ['Conduct awareness sessions', 'Organize events'],
    },
    {
      icon: Palette,
      emoji: '🎨',
      title: 'Creative Team',
      tasks: ['Social media content', 'Posters & campaigns'],
    },
  ];

  const processSteps = [
    { number: '1', title: 'Apply', description: 'Fill the form below' },
    { number: '2', title: 'Short Interaction', description: 'Quick review call' },
    { number: '3', title: 'Onboarding', description: 'Join the team' },
    { number: '4', title: 'Start Working', description: 'Create impact' },
  ];

  const expectations = [
    'Minimum weekly contribution',
    'Active participation',
    'Responsibility towards tasks',
  ];

  const benefits = ['Learning experience', 'Certificate', 'Real project exposure'];

  const testimonials = [
    {
      quote: 'A meaningful experience.',
      description:
        'This experience taught me teamwork, responsibility, and the joy of helping others.',
      author: 'Volunteer',
    },
    {
      quote: 'I learned more than I expected.',
      description: 'It was more than volunteering—it was life-changing.',
      author: 'Student Volunteer',
    },
  ];

  const activityImages = [
    '/images/voulenteer1.jpeg',
    '/images/voulenteer2.jpeg',
    '/images/voulenteer3.jpeg',
    '/images/voulenteer4.jpeg',
  ];

  const faqs = [
    { question: 'Is it paid?', answer: "No, it's volunteer-based" },
    { question: 'Will I get a certificate?', answer: 'Yes' },
    { question: 'Can beginners join?', answer: 'Yes' },
    { question: 'Online or offline?', answer: 'Both' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          {/* Hero Section - Expanded but Tight */}
          <div className="mb-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl font-semibold text-[#111827] dark:text-white mb-3">
                Be the Change. Start with Yourself.
              </h1>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                Join our mission to empower students, support communities, and create real impact
                through meaningful work.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
                >
                  👉 Apply Now
                </button>
                <button
                  onClick={scrollToRoles}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
                >
                  👉 Explore Roles
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-64">
              <ImageWithFallback
                src="/images/voulenteer.jpeg"
                alt="Community volunteers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Why Volunteer With Us - Grid */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              💡 Why Volunteer With Us
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {whyVolunteer.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#112F2B] hover:shadow-md transition-all duration-300"
                >
                  <item.icon
                    size={18}
                    className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0"
                  />
                  <span className="text-sm text-[#111827] dark:text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Roles - Detailed Section */}
          <div id="roles" className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              🛠️ Volunteer Roles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {volunteerRoles.map((role, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-xl">{role.emoji}</span>
                    <h3 className="text-sm font-semibold text-[#111827] dark:text-white">
                      {role.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {role.tasks.map((task, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                      >
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works - Process Flow */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              🔄 How It Works
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-4 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                    <span className="text-base font-bold text-white dark:text-[#0D1F1C]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-1.5 w-3 h-0.5 bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Commitment & Expectations - 2 Columns */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              ⏱️ Commitment & Expectations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* What We Expect */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]">
                <h3 className="text-sm font-semibold text-[#111827] dark:text-white mb-3">
                  What we expect:
                </h3>
                <ul className="space-y-2">
                  {expectations.map((item, index) => (
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

              {/* What You Get */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]">
                <h3 className="text-sm font-semibold text-[#111827] dark:text-white mb-3">
                  What you get:
                </h3>
                <ul className="space-y-2">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                    >
                      <ArrowRight size={16} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Volunteer Impact - Proof Section */}
          <div className="mb-8 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-sm font-semibold text-[#111827] dark:text-white mb-3 text-center">
              📊 Volunteer Impact
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              <span>
                <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🤝 60+</span>{' '}
                Volunteers
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🎓 1200+</span>{' '}
                Students Impacted
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🌍 12+</span>{' '}
                Villages
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                <span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">📚 150+</span>{' '}
                Sessions
              </span>
            </div>
          </div>

          {/* Volunteers in Action */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              📸 Volunteers in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activityImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Volunteer activity ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Testimonials - Mini */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              💬 Volunteer Testimonials
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <p className="text-sm font-semibold text-[#111827] dark:text-white mb-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                    {testimonial.description}
                  </p>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] italic">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form - Main Conversion Section */}
          <div id="volunteer-form" className="mb-8">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
              <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-2">
                📝 Application Form
              </h2>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-5">
                Fill out the form to join our volunteer community
              </p>

              {submitSuccess && (
                <div className="mb-5 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for applying! We'll review your application and get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="+91 94677 63541"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="teaching">Teaching & Mentorship</option>
                    <option value="tech">Technical Team</option>
                    <option value="outreach">Outreach Team</option>
                    <option value="creative">Creative Team</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                    Why do you want to join? *
                  </label>
                  <textarea
                    name="why"
                    value={formData.why}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Tell us what motivates you..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                    Availability (Hours per week) *
                  </label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                    placeholder="e.g., 3-5 hours"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E7A6E] hover:bg-[#166558] text-white px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Join as Volunteer
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQs - Compact */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">❓ FAQs</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg overflow-hidden bg-white dark:bg-[#112F2B]"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#F9FAFB] dark:hover:bg-[#0D1F1C] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#111827] dark:text-white text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-[#1E7A6E] dark:text-[#4FD1C5] transition-transform duration-300 flex-shrink-0 ml-2 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-24' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 pb-3">
                      <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-6 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
              🚀 Start Your Journey With Us
            </h2>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Be part of a movement that creates real change.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Apply Now
              </button>
              <a
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
