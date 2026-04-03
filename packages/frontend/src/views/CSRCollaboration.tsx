'use client';
import { useState } from 'react';
import axios from 'axios';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  Target, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Zap, 
  CheckCircle, 
  FileText, 
  Building2,
  Send,
  Download,
  Shield,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CSRCollaboration() {
  const { t } = useThemeLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    csrInterest: '',
    message: ''
  });
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
      await axios.post(`${API_URL}/forms/partnership`, {
        ...formData,
        partnershipInterest: formData.csrInterest, // map frontend form to backend schema
        industry: "CSR / Default", // required by schema but not in form
      });
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        csrInterest: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting CSR form', error);
      // Optional: Handle error presentation to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('partnership-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whyPartner = [
    { icon: Target, text: 'Proven grassroots impact' },
    { icon: Shield, text: 'Transparent fund utilization' },
    { icon: Zap, text: 'Focused program execution' },
    { icon: Users, text: 'Strong volunteer network' },
    { icon: TrendingUp, text: 'Scalable initiatives' },
    { icon: BarChart3, text: 'Real measurable outcomes' }
  ];

  const focusAreas = [
    {
      emoji: '🎓',
      title: 'Education',
      items: ['Digital literacy', 'School workshops', 'Career guidance']
    },
    {
      emoji: '👩‍💼',
      title: 'Women Empowerment',
      items: ['Skill training', 'Livelihood programs']
    },
    {
      emoji: '🎭',
      title: 'Skill Development',
      items: ['Practical training', 'Drama collaboration']
    },
    {
      emoji: '🩺',
      title: 'Health & Hygiene',
      items: ['Awareness campaigns', 'Health camps']
    },
    {
      emoji: '🌿',
      title: 'Environment',
      items: ['Tree plantation', 'Cleanliness drives']
    },
    {
      emoji: '🌾',
      title: 'Rural Development',
      items: ['Community upliftment', 'Awareness programs']
    }
  ];

  const collaborationModels = [
    {
      icon: Briefcase,
      emoji: '💳',
      title: 'Financial Support',
      description: 'Fund programs or specific initiatives'
    },
    {
      icon: Users,
      emoji: '🧑‍🤝‍🧑',
      title: 'Employee Engagement',
      description: 'Employee volunteering programs'
    },
    {
      icon: Target,
      emoji: '🎯',
      title: 'Project-Based CSR',
      description: 'Sponsor specific campaigns'
    },
    {
      icon: Handshake,
      emoji: '🤝',
      title: 'Long-Term Partnership',
      description: 'Ongoing collaboration for sustained impact'
    }
  ];

  const reportingPoints = [
    'Regular progress reports',
    'Clear fund utilization breakdown',
    'Impact measurement',
    'Documentation and updates'
  ];

  const workImages = [
    'https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2b2x1bnRlZXJzJTIwdGVhbSUyMGJ1aWxkaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3NDM3ODM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzQyNzgwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1625111381887-458fce74a923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOR08lMjBlZHVjYXRpb24lMjBwcm9ncmFtJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQzNzgzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1596609703724-d5335034ef54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3QlMjBjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHdvcmt8ZW58MXx8fHwxNzc0Mzc4MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const whoCanPartner = [
    'Corporates (CSR initiatives)',
    'Startups',
    'Institutions',
    'Foundations'
  ];

  const valueProposition = [
    'Achieve CSR goals',
    'Create measurable impact',
    'Engage employees',
    'Strengthen brand value'
  ];

  const documentationPoints = [
    'CSR agreement support',
    'Reports for compliance',
    'Financial transparency',
    'Program documentation'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          
          {/* Hero Section - Compact Professional */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#111827] dark:text-white mb-2">
              💼 Partner With Us for Social Impact
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4 max-w-3xl">
              Collaborate with Lakhil Raj Welfare Foundation to create meaningful, measurable, and sustainable impact through CSR initiatives.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                👉 Become a Partner
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-all duration-200"
              >
                <Download size={16} />
                Download CSR Deck
              </button>
            </div>
          </div>

          {/* Why Partner With Us */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              📌 Why Partner With Us
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {whyPartner.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#112F2B] hover:shadow-md transition-all duration-300"
                >
                  <item.icon size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                  <span className="text-sm text-[#111827] dark:text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CSR Focus Areas - Core Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              📦 CSR Focus Areas
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-xl">{area.emoji}</span>
                    <h3 className="text-sm font-semibold text-[#111827] dark:text-white">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Models */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              🔄 Collaboration Models
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {collaborationModels.map((model, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xl">{model.emoji}</span>
                    <h3 className="text-sm font-semibold text-[#111827] dark:text-white">
                      {model.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Reach - Stats Strip */}
          <div className="mb-8 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-sm font-semibold text-[#111827] dark:text-white mb-3 text-center">
              📊 Impact & Reach
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🎓 1200+</span> Students</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🌍 12+</span> Villages</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">🤝 60+</span> Volunteers</span>
              <span className="hidden sm:inline">•</span>
              <span><span className="font-semibold text-[#1E7A6E] dark:text-[#4FD1C5]">📚 150+</span> Sessions</span>
            </div>
          </div>

          {/* Reporting & Transparency */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              📈 Reporting & Transparency
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]">
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                We ensure:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {reportingPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#111827] dark:text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work in Action */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              📸 Work in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {workImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`CSR work ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Partner & Partner Value Proposition */}
          <div className="mb-8 grid md:grid-cols-2 gap-6">
            {/* Who Can Partner */}
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]">
              <h2 className="text-sm font-semibold text-[#111827] dark:text-white mb-3 flex items-center gap-2">
                <Building2 size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                🏢 Who Can Partner
              </h2>
              <ul className="space-y-2">
                {whoCanPartner.map((partner, index) => (
                  <li key={index} className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-start">
                    <CheckCircle size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Value Proposition */}
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]">
              <h2 className="text-sm font-semibold text-[#111827] dark:text-white mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-[#F4B400]" />
                💬 Partner Value Proposition
              </h2>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                Partnering with us helps you:
              </p>
              <ul className="space-y-2">
                {valueProposition.map((value, index) => (
                  <li key={index} className="text-sm text-[#111827] dark:text-white flex items-start">
                    <CheckCircle size={16} className="text-[#F4B400] mr-2 mt-0.5 flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documentation & Compliance */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
              📄 Documentation & Compliance
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-4 bg-white dark:bg-[#112F2B]">
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                We provide:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {documentationPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <FileText size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#111827] dark:text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact / Partnership Form */}
          <div id="partnership-form" className="mb-8">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B]">
              <h2 className="text-lg font-semibold text-[#111827] dark:text-white mb-2">
                📩 Partnership Inquiry
              </h2>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-5">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitSuccess && (
                <div className="mb-5 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for your interest! Our team will contact you soon to discuss partnership opportunities.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Enter contact person name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                      placeholder="email@company.com"
                    />
                  </div>

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
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                    CSR Interest Area *
                  </label>
                  <select
                    name="csrInterest"
                    value={formData.csrInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                  >
                    <option value="">Select CSR interest area</option>
                    <option value="education">Education</option>
                    <option value="women-empowerment">Women Empowerment</option>
                    <option value="skill-development">Skill Development</option>
                    <option value="health">Health & Hygiene</option>
                    <option value="environment">Environment</option>
                    <option value="rural-development">Rural Development</option>
                    <option value="all">All Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] dark:text-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                    placeholder="Tell us about your CSR goals and partnership interests..."
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
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-6 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
              🚀 Let's Build Impact Together
            </h2>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Join hands with us to create sustainable social change through meaningful CSR partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-5 py-2.5 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Partner With Us
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
