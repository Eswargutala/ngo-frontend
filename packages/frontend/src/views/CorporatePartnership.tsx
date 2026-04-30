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
  Target,
  Shield,
  Network,
  GraduationCap,
  Heart,
  Briefcase,
  Activity,
  Leaf,
  Home,
  DollarSign,
  UserPlus,
  Zap,
  Handshake,
  BarChart3,
  FileText,
  Eye,
  CheckCircle,
  ChevronDown,
  Send,
  Building2,
  Rocket,
  Building,
  Landmark,
  Download,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CorporatePartnership() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    partnershipInterest: '',
    message: '',
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
      await axios.post(`${BASE_URL}/forms/partnership`, formData);
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
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      industry: '',
      partnershipInterest: '',
      message: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('partnership-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadProposal = () => {
    // In a real application, this would trigger a PDF download
    alert(
      'Partnership proposal download will be available soon. Please contact us for more information.'
    );
  };

  const whyPartner = [
    { icon: Target, text: 'Proven grassroots impact' },
    { icon: Shield, text: 'Transparent operations' },
    { icon: TrendingUp, text: 'Scalable programs' },
    { icon: Network, text: 'Strong volunteer network' },
    { icon: BarChart3, text: 'Measurable outcomes' },
    { icon: Users, text: 'Community-level execution' },
  ];

  const partnershipAreas = [
    {
      icon: GraduationCap,
      emoji: '🎓',
      title: 'Education Support',
      items: ['Digital literacy', 'School programs'],
    },
    {
      icon: Heart,
      emoji: '👩‍💼',
      title: 'Women Empowerment',
      items: ['Skill training', 'Livelihood'],
    },
    {
      icon: Briefcase,
      emoji: '🎭',
      title: 'Skill Development',
      items: ['Training + cultural exposure'],
    },
    {
      icon: Activity,
      emoji: '🩺',
      title: 'Health Initiatives',
      items: ['Camps + awareness'],
    },
    {
      icon: Leaf,
      emoji: '🌿',
      title: 'Environment',
      items: ['Tree plantation', 'Clean campaigns'],
    },
    {
      icon: Home,
      emoji: '🌾',
      title: 'Rural Development',
      items: ['Community programs'],
    },
  ];

  const partnershipModels = [
    {
      icon: DollarSign,
      emoji: '💳',
      title: 'Funding Support',
      description: 'Sponsor programs',
    },
    {
      icon: UserPlus,
      emoji: '🧑‍🤝‍🧑',
      title: 'Employee Engagement',
      description: 'Volunteer opportunities',
    },
    {
      icon: Zap,
      emoji: '🎯',
      title: 'Project Sponsorship',
      description: 'Fund specific initiatives',
    },
    {
      icon: Handshake,
      emoji: '🤝',
      title: 'Long-Term Partnership',
      description: 'Ongoing collaboration',
    },
  ];

  const impactStats = [
    { emoji: '🎓', value: '1200+', label: 'Students' },
    { emoji: '🌍', value: '12+', label: 'Villages' },
    { emoji: '🤝', value: '60+', label: 'Volunteers' },
    { emoji: '📚', value: '150+', label: 'Sessions' },
  ];

  const valueProposition = [
    'CSR goal alignment',
    'Brand visibility',
    'Employee engagement',
    'Impact reports',
    'Recognition',
  ];

  const reportingItems = [
    'Detailed reports',
    'Fund utilization breakdown',
    'Regular updates',
    'Documentation',
  ];

  const workImages = [
    'https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBwYXJ0bmVyc2hpcCUyMG9mZmljZXxlbnwxfHx8fDE3NzQzNzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1748176952054-db738247a927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGNvcnBvcmF0ZSUyMGNvbGxhYm9yYXRpb24lMjBpbmRpYXxlbnwxfHx8fDE3NzQzNzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvcnBvcmF0ZSUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQzNzk2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1744854188498-4344f2504a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzb2NpYWwlMjByZXNwb25zaWJpbGl0eSUyMGNvbW11bml0eSUyMHdvcmt8ZW58MXx8fHwxNzc0Mzc5NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const whoCanPartner = [
    { icon: Building2, label: 'Corporates' },
    { icon: Rocket, label: 'Startups' },
    { icon: Building, label: 'Institutions' },
    { icon: Landmark, label: 'Foundations' },
  ];

  const faqs = [
    {
      question: 'Is this CSR only?',
      answer: 'No, open for all partnerships',
    },
    {
      question: 'Do you provide reports?',
      answer: 'Yes',
    },
    {
      question: 'Can we sponsor specific programs?',
      answer: 'Yes',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          {/* Hero Section - Split Layout */}
          <div className="mb-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-semibold text-[#111827] dark:text-white mb-4">
                🤝 Partner With Us for Meaningful Impact
              </h1>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Collaborate with us to create scalable, measurable, and sustainable social impact
                through corporate partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
                >
                  👉 Become a Partner
                </button>
                <button
                  onClick={handleDownloadProposal}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
                >
                  <Download size={18} />
                  👉 Download Proposal
                </button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-80">
              <ImageWithFallback
                src="images/partner.png"
                alt="Corporate partnership meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Why Partner With Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💡 Why Partner With Us
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {whyPartner.map((item, index) => (
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

          {/* Partnership Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📦 Partnership Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {partnershipAreas.map((area, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{area.emoji}</span>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-base text-[#6B7280] dark:text-[#9CA3AF] flex items-start"
                      >
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Models */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🔄 Partnership Models
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partnershipModels.map((model, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-[#F9FAFB] dark:bg-[#112F2B] text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                    <span className="text-3xl">{model.emoji}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#111827] dark:text-white mb-2">
                    {model.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">{model.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Snapshot */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📊 Impact Snapshot
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 border border-[#E5E7EB] dark:border-[#1F4D47]">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div className="text-3xl font-bold text-[#1E7A6E] dark:text-[#4FD1C5] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-base text-[#6B7280] dark:text-[#9CA3AF]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What You Get (Value Proposition) */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📈 What You Get
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <div className="grid sm:grid-cols-2 gap-4">
                {valueProposition.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-base text-[#111827] dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reporting & Transparency */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📄 Reporting & Transparency
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-5">We provide:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {reportingItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText
                      size={20}
                      className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-base text-[#111827] dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work in Action */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📸 Work in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {workImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Partnership work ${index + 1}`}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Partner */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🏢 Who Can Partner
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {whoCanPartner.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <partner.icon size={32} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                  <span className="text-base font-medium text-[#111827] dark:text-white">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Testimonial */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💬 Partner Testimonial
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-[#F9FAFB] dark:bg-[#112F2B]">
              <p className="text-xl font-semibold text-[#111827] dark:text-white mb-3">
                "A transparent and impactful collaboration."
              </p>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                Working together helped us achieve real CSR impact.
              </p>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] italic">
                — Corporate Partner
              </p>
            </div>
          </div>

          {/* Partnership Form */}
          <div id="partnership-form" className="mb-12">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                📝 Partnership Form
              </h2>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Fill out the form below to explore partnership opportunities with us
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-5 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-base text-green-800 dark:text-green-200">
                    Thank you for your interest! Our team will review your inquiry and contact you
                    shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
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
                      placeholder="your.email@company.com"
                    />
                  </div>

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
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      Industry *
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="e.g., IT, Manufacturing, Finance"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                      CSR / Partnership Interest *
                    </label>
                    <select
                      name="partnershipInterest"
                      value={formData.partnershipInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                    >
                      <option value="">Select interest area</option>
                      <option value="funding">Funding Support</option>
                      <option value="employee">Employee Engagement</option>
                      <option value="project">Project Sponsorship</option>
                      <option value="longterm">Long-Term Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Tell us about your partnership interests and objectives..."
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
                      👉 Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">❓ FAQs</h2>
            <div className="space-y-4">
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
              🚀 Let's Build Impact Together
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Join hands with us to create sustainable change and make a real difference in
              communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
              >
                Partner With Us
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
