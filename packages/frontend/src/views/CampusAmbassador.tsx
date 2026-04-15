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
  Megaphone,
  Target,
  Calendar,
  BarChart3,
  CheckCircle,
  ChevronDown,
  Send,
  Star,
  Trophy,
  FileText,
  Network,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CampusAmbassador() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    courseYear: '',
    city: '',
    why: '',
    experience: '',
    areaOfInterest: '',
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
      await axios.post(`${BASE_URL}/forms/campus-ambassador`, formData);
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
      collegeName: '',
      courseYear: '',
      city: '',
      why: '',
      experience: '',
      areaOfInterest: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToRoles = () => {
    const rolesElement = document.getElementById('roles');
    rolesElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whyBecome = [
    { icon: GraduationCap, text: 'Leadership experience' },
    { icon: Award, text: 'Certificate & recognition' },
    { icon: Network, text: 'Networking opportunities' },
    { icon: TrendingUp, text: 'Real project exposure' },
    { icon: Globe, text: 'Social impact' },
    { icon: Brain, text: 'Skill development' },
  ];

  const roles = [
    {
      icon: Megaphone,
      emoji: '📢',
      title: 'Promotion',
      tasks: ['Spread awareness in college', 'Share initiatives'],
    },
    {
      icon: Target,
      emoji: '🎯',
      title: 'Student Engagement',
      tasks: ['Connect students with NGO', 'Organize participation'],
    },
    {
      icon: Calendar,
      emoji: '📅',
      title: 'Event Coordination',
      tasks: ['Help conduct workshops', 'Manage activities'],
    },
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Reporting',
      tasks: ['Share updates and progress'],
    },
  ];

  const programSteps = [
    { number: '1', title: 'Apply', description: 'Fill the form' },
    { number: '2', title: 'Short Selection', description: 'Quick review' },
    { number: '3', title: 'Onboarding', description: 'Join the team' },
    { number: '4', title: 'Start Activities', description: 'Create impact' },
    { number: '5', title: 'Get Recognition', description: 'Earn rewards' },
  ];

  const eligibility = ['College student', 'Active and motivated', 'Good communication'];

  const expectations = ['Weekly contribution', 'Event participation', 'Responsibility'];

  const benefits = [
    'Certificate of completion',
    'Letter of recommendation',
    'Top performer recognition',
    'Leadership experience',
    'Networking opportunities',
  ];

  const ambassadorImages = [
    'https://images.unsplash.com/photo-1558503902-11ef7728b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBjYW1wdXMlMjB1bml2ZXJzaXR5JTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzc4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1542868727-2666cd25399c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBldmVudCUyMGNhbXB1cyUyMGFjdGl2aXR5fGVufDF8fHx8MTc3NDM3ODcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwd29ya3Nob3AlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzc0Mzc4NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxlYWRlcnMlMjBzdHVkZW50cyUyMGdyb3VwJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzc0Mzc4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const testimonials = [
    {
      quote: 'Amazing leadership experience.',
      description: 'I learned communication and teamwork.',
      author: 'College Student',
    },
    {
      quote: 'Helped me grow beyond academics.',
      description: 'Real exposure and impact.',
      author: 'Ambassador',
    },
  ];

  const faqs = [
    { question: 'Is it paid?', answer: 'No' },
    { question: 'Will I get a certificate?', answer: 'Yes' },
    { question: 'Duration?', answer: 'Flexible' },
    { question: 'Remote or offline?', answer: 'Both' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* Hero Section - Compact Split Layout */}
          <div className="mb-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-semibold text-[#111827] dark:text-white mb-3">
                🎓 I got a chance to lead and learn
              </h1>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-5">
                Lead change in your college. Represent our NGO, build leadership skills, and create
                real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
                >
                  👉 Apply Now
                </button>
                <button
                  onClick={scrollToRoles}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
                >
                  👉 View Responsibilities
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-72">
              <ImageWithFallback
                src={ambassadorImages[0]}
                alt="Campus students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Why Become a Campus Ambassador */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              💡 Why Become a Campus Ambassador
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {whyBecome.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#112F2B] hover:shadow-md transition-all duration-300"
                >
                  <item.icon
                    size={20}
                    className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0"
                  />
                  <span className="text-sm text-[#111827] dark:text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roles & Responsibilities */}
          <div id="roles" className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              🛠️ Roles & Responsibilities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-5 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{role.emoji}</span>
                    <h3 className="text-base font-semibold text-[#111827] dark:text-white">
                      {role.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
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

          {/* Program Structure (How It Works) */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              ⏱️ Program Structure
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {programSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-5 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                    <span className="text-lg font-bold text-white dark:text-[#0D1F1C]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">{step.description}</p>
                  {index < programSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Requirements */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              🎯 Eligibility & Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Eligibility */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-5 bg-white dark:bg-[#112F2B]">
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />✅
                  Eligibility
                </h3>
                <ul className="space-y-2">
                  {eligibility.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expectations */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-5 bg-white dark:bg-[#112F2B]">
                <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <Star size={18} className="text-[#F4B400]" />
                  ⚠️ Expectations
                </h3>
                <ul className="space-y-2">
                  {expectations.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                    >
                      <Star size={16} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits & Rewards */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              📊 Benefits & Rewards
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-5 bg-white dark:bg-[#112F2B]">
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Trophy size={16} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#111827] dark:text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ambassadors in Action */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              📸 Ambassadors in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ambassadorImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Ambassador activity ${index + 1}`}
                    className="w-full h-36 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Ambassador Testimonials */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">
              💬 Ambassador Testimonials
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-5 bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <p className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                    {testimonial.description}
                  </p>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="application-form" className="mb-10">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                📝 Application Form
              </h2>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Fill out the form below to join our Campus Ambassador Program
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for applying! We'll review your application and get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="+91 94677 63541"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      College Name *
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your college name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Course / Year *
                    </label>
                    <input
                      type="text"
                      name="courseYear"
                      value={formData.courseYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="e.g., B.Tech 2nd Year"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="promotion">Promotion</option>
                    <option value="events">Events</option>
                    <option value="leadership">Leadership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                    Why do you want to join? *
                  </label>
                  <textarea
                    name="why"
                    value={formData.why}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Tell us what motivates you to become a campus ambassador..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                    Experience (Optional)
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Any relevant experience in leadership, volunteering, or event management..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E7A6E] hover:bg-[#166558] text-white px-6 py-3.5 rounded-lg text-base font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Apply Now
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-5">❓ FAQs</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg overflow-hidden bg-white dark:bg-[#112F2B]"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-[#F9FAFB] dark:hover:bg-[#0D1F1C] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#111827] dark:text-white text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
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
                    <div className="px-5 pb-3.5">
                      <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
              🚀 Start Your Leadership Journey
            </h2>
            <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-5">
              Join hundreds of students creating real change in their communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Apply Now
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
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
