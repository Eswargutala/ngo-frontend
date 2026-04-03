'use client';
import { useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;
import { 
  GraduationCap,
  Monitor,
  Leaf,
  HeartPulse,
  Award,
  Briefcase,
  Target,
  Users,
  Building2,
  Globe,
  CheckCircle,
  ChevronDown,
  Send,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Hash
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function RequestWorkshop() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    workshopType: '',
    participants: '',
    preferredDate: '',
    message: ''
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
        await axios.post(`${BASE_URL}/forms/workshop`, formData);
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
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      location: '',
      workshopType: '',
      participants: '',
      preferredDate: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('workshop-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToPrograms = () => {
    const programsElement = document.getElementById('workshop-types');
    programsElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whatWeOffer = [
    { icon: GraduationCap, text: 'Career guidance sessions' },
    { icon: Monitor, text: 'Digital literacy workshops' },
    { icon: Leaf, text: 'Environmental awareness' },
    { icon: HeartPulse, text: 'Health & hygiene sessions' },
    { icon: Award, text: 'Skill development activities' },
    { icon: Briefcase, text: 'Women empowerment programs' }
  ];

  const workshopTypes = [
    {
      icon: Target,
      emoji: '🎯',
      title: 'Career Guidance Workshop',
      description: 'Helping students choose the right career path'
    },
    {
      icon: Monitor,
      emoji: '💻',
      title: 'Digital Awareness Workshop',
      description: 'Basic computer and internet skills'
    },
    {
      icon: Leaf,
      emoji: '🌿',
      title: 'Environmental Workshop',
      description: 'Awareness about sustainability'
    },
    {
      icon: HeartPulse,
      emoji: '🩺',
      title: 'Health Awareness Workshop',
      description: 'Hygiene and health education'
    }
  ];

  const whoCanRequest = [
    'Schools',
    'Colleges',
    'NGOs',
    'Community groups'
  ];

  const impactStats = [
    { emoji: '🎓', value: '1000+', label: 'Students' },
    { emoji: '🏫', value: '30+', label: 'Institutions' },
    { emoji: '📚', value: '100+', label: 'Workshops' }
  ];

  const workshopImages = [
    'https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tJTIwaW5kaWElMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQzODM4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759456629070-8e222ab878ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHNlc3Npb24lMjBzZW1pbmFyJTIwZWR1Y2F0aW9uJTIwZ3JvdXB8ZW58MXx8fHwxNzc0MzgzODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1773270196888-0cdacb07edae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMGRldmVsb3BtZW50JTIwd29ya3Nob3AlMjBoYW5kcy1vbnxlbnwxfHx8fDE3NzQzODM4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGl0ZXJhY3klMjBjb21wdXRlciUyMHRyYWluaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzc0MzgzODI3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const testimonials = [
    {
      quote: 'Very informative session.',
      description: 'Students found it helpful and engaging.',
      author: 'School Teacher'
    },
    {
      quote: 'Great initiative.',
      description: 'It helped students understand real opportunities.',
      author: 'Institution'
    }
  ];

  const workshopTypeOptions = [
    'Career Guidance',
    'Digital Awareness',
    'Environmental Workshop',
    'Health Awareness',
    'Skill Development',
    'Women Empowerment',
    'Other'
  ];

  const faqs = [
    { question: 'Is it free?', answer: 'It depends on collaboration. We work with institutions to make workshops accessible, and costs can be discussed based on requirements.' },
    { question: 'Do you travel to locations?', answer: 'Yes, we travel to schools, colleges, and community centers across different locations to conduct workshops.' },
    { question: 'Can we customize workshops?', answer: 'Yes, we can customize workshops based on your specific needs, audience, and objectives.' },
    { question: 'Duration?', answer: 'Workshop duration is flexible, typically ranging from 2 hours to full-day sessions, depending on the topic and requirements.' }
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
                🏫 Bring Our Workshops to Your Institution
              </h1>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Request a workshop for your school, college, or community and help students gain awareness, skills, and guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 Request Now
                </button>
                <button
                  onClick={scrollToPrograms}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 View Programs
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-80">
              <ImageWithFallback
                src={workshopImages[0]}
                alt="Workshop session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💡 What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {whatWeOffer.map((item, index) => (
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

          {/* Workshop Types */}
          <div id="workshop-types" className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📦 Workshop Types
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {workshopTypes.map((workshop, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{workshop.emoji}</span>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white">
                      {workshop.title}
                    </h3>
                  </div>
                  <p className="text-base text-[#6B7280] dark:text-[#9CA3AF]">
                    {workshop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Request */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🧑‍🏫 Who Can Request
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <div className="grid sm:grid-cols-2 gap-4">
                {whoCanRequest.map((entity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                    <span className="text-base text-[#111827] dark:text-white">{entity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workshop Impact */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📊 Workshop Impact
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

          {/* Workshops in Action */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📸 Workshops in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {workshopImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Workshop ${index + 1}`}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Feedback (Mini Testimonials) */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💬 Feedback
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

          {/* Request Form */}
          <div id="workshop-form" className="mb-12">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                📝 Request Form
              </h2>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Fill out the form below to request a workshop for your institution
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-5 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-base text-green-800 dark:text-green-200">
                    Thank you for your request! We'll review it and contact you soon to schedule the workshop.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      <Building2 size={16} className="inline mr-2" />
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      <User size={16} className="inline mr-2" />
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter contact person name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      <Mail size={16} className="inline mr-2" />
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

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      <Phone size={16} className="inline mr-2" />
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
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                    placeholder="City, State"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      <Target size={16} className="inline mr-2" />
                      Type of Workshop *
                    </label>
                    <select
                      name="workshopType"
                      value={formData.workshopType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                    >
                      <option value="">Select workshop type</option>
                      {workshopTypeOptions.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      <Hash size={16} className="inline mr-2" />
                      Number of Participants *
                    </label>
                    <input
                      type="number"
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Expected number of participants"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Message / Requirements (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Any specific requirements or additional information..."
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
                      👉 Submit Request
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
                      openFAQ === index ? 'max-h-40' : 'max-h-0'
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
              🚀 Empower Students Through Knowledge
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Bring valuable workshops to your institution and make a difference in students' lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
              >
                Request Workshop
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
