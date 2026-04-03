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
  Globe,
  Brain,
  FileText,
  TrendingUp,
  Target,
  BarChart3,
  UserCheck,
  MessageSquare,
  CheckCircle,
  ChevronDown,
  Send,
  GraduationCap,
  Share2,
  Network,
  Star,
  Clock,
  AlertCircle
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Mentor() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    professionCollege: '',
    areaOfExpertise: '',
    experience: '',
    whyMentor: ''
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        await axios.post(`${BASE_URL}/forms/mentor`, formData);
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
      professionCollege: '',
      areaOfExpertise: '',
      experience: '',
      whyMentor: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('mentor-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToRoles = () => {
    const rolesElement = document.getElementById('roles');
    rolesElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whyBecomeMentor = [
    { icon: GraduationCap, text: 'Make real impact on students' },
    { icon: Share2, text: 'Share your knowledge' },
    { icon: Globe, text: 'Contribute to society' },
    { icon: Brain, text: 'Develop leadership skills' },
    { icon: Award, text: 'Recognition & certificate' },
    { icon: Network, text: 'Build meaningful connections' }
  ];

  const mentorRoles = [
    {
      icon: Target,
      emoji: '🎯',
      title: 'Career Guidance',
      tasks: ['Help students choose careers', 'Provide clarity']
    },
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Assessment Support',
      tasks: ['Guide based on student interests', 'Analyze responses']
    },
    {
      icon: Users,
      emoji: '🧑‍🏫',
      title: 'Mentorship Sessions',
      tasks: ['Conduct sessions', 'Share experience']
    },
    {
      icon: UserCheck,
      emoji: '🤝',
      title: 'Student Support',
      tasks: ['Answer queries', 'Encourage confidence']
    }
  ];

  const mentorshipSteps = [
    { number: '1', title: 'Apply', description: 'Submit application' },
    { number: '2', title: 'Screening', description: 'Review process' },
    { number: '3', title: 'Onboarding', description: 'Join the team' },
    { number: '4', title: 'Mentor Students', description: 'Guide & support' },
    { number: '5', title: 'Ongoing Support', description: 'Continued impact' }
  ];

  const whatYouGain = [
    'Leadership experience',
    'Real mentoring exposure',
    'Recognition',
    'Networking',
    'Personal growth'
  ];

  const impactStats = [
    { emoji: '🎓', value: '300+', label: 'Students Guided' },
    { emoji: '👨‍🏫', value: '40+', label: 'Mentors' },
    { emoji: '📚', value: 'Multiple', label: 'Sessions Conducted' }
  ];

  const mentorImages = [
    'https://images.unsplash.com/photo-1758270705696-ec9caffc73dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZW50b3JpbmclMjBjb2FjaGluZyUyMG1lZXRpbmclMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3NDM4MjM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1766867257943-0665537fb2dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGd1aWRhbmNlfGVufDF8fHx8MTc3NDM4MjM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwYWR2aWNlJTIwbWVudG9yc2hpcHxlbnwxfHx8fDE3NzQzODIzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2Vzc2lvbiUyMGxlYXJuaW5nJTIwZ3JvdXB8ZW58MXx8fHwxNzc0MzgyMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const testimonials = [
    {
      quote: 'A very fulfilling experience.',
      description: 'Helping students gave me a sense of purpose.',
      author: 'Mentor'
    },
    {
      quote: 'I learned while teaching.',
      description: 'Mentorship improved my communication and leadership.',
      author: 'Volunteer Mentor'
    }
  ];

  const faqs = [
    { question: 'Is it paid?', answer: 'No' },
    { question: 'Do I need experience?', answer: 'Preferred but not required' },
    { question: 'Is it online?', answer: 'Yes / Hybrid' },
    { question: 'Time commitment?', answer: 'Flexible' }
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
                👨‍🏫 Guide. Inspire. Transform.
              </h1>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Become a mentor and help students make informed career choices, build confidence, and shape their future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 Apply as Mentor
                </button>
                <button
                  onClick={scrollToRoles}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 View Responsibilities
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-80">
              <ImageWithFallback
                src={mentorImages[0]}
                alt="Mentoring students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Why Become a Mentor */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💡 Why Become a Mentor
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {whyBecomeMentor.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <item.icon size={24} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                  <span className="text-base text-[#111827] dark:text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Roles */}
          <div id="roles" className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🛠️ Mentor Roles
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {mentorRoles.map((role, index) => (
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
                      <li key={idx} className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              ⏱️ Mentorship Process
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
              {mentorshipSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-6 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl bg-[#F9FAFB] dark:bg-[#112F2B]"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                    <span className="text-xl font-bold text-white dark:text-[#0D1F1C]">{step.number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    {step.description}
                  </p>
                  {index < mentorshipSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-0.5 bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Become a Mentor */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🎯 Who Can Become a Mentor
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Eligibility */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                  ✅ Eligibility
                </h3>
                <ul className="space-y-3">
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <Star size={18} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    College students (senior years)
                  </li>
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <Star size={18} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    Professionals
                  </li>
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <Star size={18} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    Passion for guiding others
                  </li>
                </ul>
              </div>

              {/* Expectations */}
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle size={20} className="text-[#F4B400]" />
                  ⚠️ Expectations
                </h3>
                <ul className="space-y-3">
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <CheckCircle size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0" />
                    Regular interaction
                  </li>
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <CheckCircle size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0" />
                    Commitment to sessions
                  </li>
                  <li className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <CheckCircle size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0" />
                    Responsible guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mentor Impact */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📊 Mentor Impact
            </h2>
            <div className="grid grid-cols-3 gap-6 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 border border-[#E5E7EB] dark:border-[#1F4D47]">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{stat.emoji}</div>
                  <div className="text-3xl font-bold text-[#1E7A6E] dark:text-[#4FD1C5] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-base text-[#6B7280] dark:text-[#9CA3AF]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentors in Action */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📸 Mentors in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {mentorImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Mentor activity ${index + 1}`}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💬 Mentor Testimonials
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

          {/* What You Gain */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🎯 What You Gain
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <div className="grid sm:grid-cols-2 gap-4">
                {whatYouGain.map((gain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-[#111827] dark:text-white">{gain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mentor Application Form */}
          <div id="mentor-form" className="mb-12">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                📝 Mentor Application Form
              </h2>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Fill out the form below to apply as a mentor and help guide students
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-5 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-base text-green-800 dark:text-green-200">
                    Thank you for applying! We'll review your application and contact you soon.
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
                      Profession / College *
                    </label>
                    <input
                      type="text"
                      name="professionCollege"
                      value={formData.professionCollege}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your profession or college name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    Area of Expertise *
                  </label>
                  <select
                    name="areaOfExpertise"
                    value={formData.areaOfExpertise}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                  >
                    <option value="">Select your area of expertise</option>
                    <option value="career-guidance">Career Guidance</option>
                    <option value="technical-skills">Technical Skills</option>
                    <option value="soft-skills">Soft Skills</option>
                    <option value="academic-support">Academic Support</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="other">Other</option>
                  </select>
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
                    placeholder="Any relevant mentoring, teaching, or professional experience..."
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    Why do you want to mentor? *
                  </label>
                  <textarea
                    name="whyMentor"
                    value={formData.whyMentor}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Tell us what motivates you to become a mentor and guide students..."
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
                      👉 Apply as Mentor
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              ❓ FAQs
            </h2>
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
                      <p className="text-base text-[#6B7280] dark:text-[#9CA3AF]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-10 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-3xl font-semibold text-[#111827] dark:text-white mb-4">
              🚀 Help Shape Someone's Future
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Join our mentoring community and make a lasting impact on students' lives.
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
