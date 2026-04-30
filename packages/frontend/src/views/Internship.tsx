'use client';
import { useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;
import {
  Award,
  Users,
  TrendingUp,
  Globe,
  Brain,
  GraduationCap,
  Code,
  Palette,
  Megaphone,
  FileText,
  CheckCircle,
  ChevronDown,
  Send,
  Clock,
  Calendar,
  Target,
  Briefcase,
  BarChart3,
  Star,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Internship() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    courseYear: '',
    areaOfInterest: '',
    why: '',
    experience: '',
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
      await axios.post(`${BASE_URL}/forms/internship`, formData);
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
      college: '',
      courseYear: '',
      areaOfInterest: '',
      why: '',
      experience: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('internship-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToRoles = () => {
    const rolesElement = document.getElementById('roles');
    rolesElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whyJoin = [
    { icon: GraduationCap, text: 'Real-world experience' },
    { icon: Award, text: 'Certificate of completion' },
    { icon: Users, text: 'Team collaboration' },
    { icon: TrendingUp, text: 'Skill development' },
    { icon: Globe, text: 'Social impact' },
    { icon: Brain, text: 'Hands-on learning' },
  ];

  const internshipRoles = [
    {
      icon: Code,
      emoji: '💻',
      title: 'Web Development',
      tasks: ['Build website features', 'Work on real projects'],
    },
    {
      icon: Palette,
      emoji: '🎨',
      title: 'UI/UX Design',
      tasks: ['Design pages and flows', 'Improve user experience'],
    },
    {
      icon: Megaphone,
      emoji: '📢',
      title: 'Marketing & Outreach',
      tasks: ['Social media', 'Awareness campaigns'],
    },
    {
      icon: FileText,
      emoji: '📊',
      title: 'Research & Content',
      tasks: ['Create content', 'Analyze programs'],
    },
  ];

  const internshipSteps = [
    { number: '1', title: 'Apply', description: 'Submit application' },
    { number: '2', title: 'Selection', description: 'Review process' },
    { number: '3', title: 'Onboarding', description: 'Join the team' },
    { number: '4', title: 'Work on Tasks', description: 'Real projects' },
    { number: '5', title: 'Evaluation & Certificate', description: 'Get recognized' },
  ];

  const whatYouGain = [
    'Practical project experience',
    'Portfolio building',
    'Team collaboration skills',
    'Leadership exposure',
    'Certificate',
  ];

  const impactStats = [
    { emoji: '👨‍💻', value: '100+', label: 'Interns' },
    { emoji: '📚', value: '50+', label: 'Projects' },
    { emoji: '🌍', value: 'Real', label: 'Community Impact' },
  ];

  const internImages = [
    'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBsYXB0b3AlMjBjb21wdXRlciUyMGNvbGxlZ2UlMjBpbmRpYXxlbnwxfHx8fDE3NzQzODIxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    '/images/voulenteer5.jpeg',
    '/images/voulenteer6.jpeg',
    '/images/voulenteer7.jpg',
  ];

  const testimonials = [
    {
      quote: 'Great learning experience.',
      description: 'I learned by doing real work, not just theory.',
      author: 'Eswar',
    },
    {
      quote: 'Helped me to build my portfolio.',
      description: 'It helped me build my skills and think more practically.',
      author: 'Aditya Raj',
    },
  ];

  const faqs = [
    { question: 'Is it paid?', answer: "No, it's learning-based" },
    { question: 'Will I get a certificate?', answer: 'Yes' },
    { question: 'Is it remote?', answer: 'Yes / Hybrid' },
    { question: 'Can beginners apply?', answer: 'Yes' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          {/* Hero Section - Compact Split Layout */}
          <div className="mb-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-semibold text-[#111827] dark:text-white mb-4">
                💼 Learn. Contribute. Grow.
              </h1>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Join our internship program and gain real-world experience, develop skills, and
                create meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 Apply Now
                </button>
                <button
                  onClick={scrollToRoles}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 View Roles
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-80">
              <ImageWithFallback
                src="/images/voulenteer5.jpeg"
                alt="Students working on internship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Why Join Our Internship */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💡 Why Join Our Internship
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {whyJoin.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <item.icon
                    size={24}
                    className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0"
                  />
                  <span className="text-base text-[#111827] dark:text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Roles */}
          <div id="roles" className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🛠️ Internship Roles
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {internshipRoles.map((role, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{role.emoji}</span>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white">
                      {role.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {role.tasks.map((task, idx) => (
                      <li
                        key={idx}
                        className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
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

          {/* Internship Structure */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              ⏱️ Internship Structure
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
              {internshipSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-6 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                    <span className="text-xl font-bold text-white dark:text-[#0D1F1C]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">{step.description}</p>
                  {index < internshipSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-0.5 bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Commitment */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📅 Duration & Commitment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Duration */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />⏳ Duration
                </h3>
                <ul className="space-y-3">
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <CheckCircle
                      size={18}
                      className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0"
                    />
                    1–2 Months
                  </li>
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <CheckCircle
                      size={18}
                      className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0"
                    />
                    Flexible
                  </li>
                </ul>
              </div>

              {/* Commitment */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <Target size={20} className="text-[#F4B400]" />
                  📌 Commitment
                </h3>
                <ul className="space-y-3">
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <Star size={18} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    Weekly contribution
                  </li>
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <Star size={18} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    Task completion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What You Will Gain */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🎯 What You Will Gain
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <div className="grid sm:grid-cols-2 gap-4">
                {whatYouGain.map((gain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-base text-[#111827] dark:text-white">{gain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Internship Impact */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📊 Internship Impact
            </h2>
            <div className="grid grid-cols-3 gap-6 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 border border-[#E5E7EB] dark:border-[#1F4D47]">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{stat.emoji}</div>
                  <div className="text-3xl font-bold text-[#1E7A6E] dark:text-[#4FD1C5] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-base text-[#6B7280] dark:text-[#9CA3AF]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interns in Action */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📸 Interns in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {internImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Intern activity ${index + 1}`}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Intern Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💬 Intern Testimonials
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <p className="text-lg font-semibold text-[#111827] dark:text-white mb-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                    {testimonial.description}
                  </p>
                  <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] italic">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="internship-form" className="mb-12">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                📝 Application Form
              </h2>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Fill out the form below to apply for our internship program
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-5 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-base text-green-800 dark:text-green-200">
                    Thank you for applying! We'll review your application and get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="+91 94677 63541"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      College *
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your college/university name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Course / Year *
                    </label>
                    <input
                      type="text"
                      name="courseYear"
                      value={formData.courseYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="e.g., B.Tech 3rd Year"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Area of Interest *
                    </label>
                    <select
                      name="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                    >
                      <option value="">Select your area of interest</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="marketing">Marketing & Outreach</option>
                      <option value="research-content">Research & Content</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    Why do you want to join? *
                  </label>
                  <textarea
                    name="why"
                    value={formData.why}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Tell us what motivates you to join our internship program..."
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    Experience (Optional)
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Any relevant skills, projects, or previous experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E7A6E] hover:bg-[#166558] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      👉 Apply for Internship
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">❓ FAQs</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg overflow-hidden bg-white dark:bg-[#112F2B]"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F9FAFB] dark:hover:bg-[#0D1F1C] transition-colors"
                  >
                    <span className="text-base font-medium text-[#111827] dark:text-white text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#1E7A6E] dark:text-[#4FD1C5] transition-transform duration-300 flex-shrink-0 ml-3 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-32' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-base text-[#6B7280] dark:text-[#9CA3AF]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-10 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-3xl font-semibold text-[#111827] dark:text-white mb-4">
              🚀 Start Your Learning Journey
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Join our internship program and gain hands-on experience while making a real
              difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
              >
                Apply Now
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
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
