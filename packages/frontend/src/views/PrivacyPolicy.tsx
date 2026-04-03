'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Lock, Eye, CreditCard, FileText, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigationItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'scope', label: 'Scope' },
    { id: 'data-collection', label: 'Data Collection' },
    { id: 'usage', label: 'How We Use Data' },
    { id: 'payments', label: 'Payments' },
    { id: 'sharing', label: 'Data Sharing' },
    { id: 'security', label: 'Security' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-white dark:bg-[#0B1F1D] py-8 md:py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sticky Navigation - Desktop Only */}
            <aside className="hidden lg:block w-[240px] flex-shrink-0">
              <nav className="sticky top-24 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-[14px] transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-[#1E7A6E] text-white font-medium'
                        : 'text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F9FAFB] dark:hover:bg-[#112F2B] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 max-w-[800px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-[36px] md:text-[44px] font-bold text-[#111827] dark:text-[#E5E7EB] leading-tight mb-3">
                  Privacy Policy
                </h1>
                <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                  Lakhil Raj Welfare Foundation
                </p>
                <p className="text-[13px] text-[#9CA3AF] dark:text-[#6B7280]">
                  Last Updated: March 24, 2026
                </p>
                <div className="mt-6 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>
              </div>

              {/* Section 1: Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  1. Introduction
                </h2>
                <div className="space-y-4 text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF]">
                  <p>
                    Lakhil Raj Welfare Foundation ("we", "our", "us") is committed to protecting the privacy and personal data of individuals who interact with us — including donors, volunteers, students, and website visitors.
                  </p>
                  <p className="font-medium text-[#111827] dark:text-[#E5E7EB]">This Privacy Policy explains:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>What information we collect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>How we use it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>How we protect it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>Your rights regarding your data</span>
                    </li>
                  </ul>
                  <p className="font-medium text-[#111827] dark:text-[#E5E7EB] mt-6">This policy is especially applicable when you:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>Donate via UPI QR or Razorpay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>Participate in our programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5] mt-1 flex-shrink-0" />
                      <span>Visit our website</span>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 2: Scope */}
              <section id="scope" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  2. Scope of Policy
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  This Privacy Policy applies to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <div className="w-8 h-8 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[18px]">🌐</span>
                    </div>
                    <span className="text-[14px] text-[#111827] dark:text-[#E5E7EB]">Official website</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <div className="w-8 h-8 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[18px]">💳</span>
                    </div>
                    <span className="text-[14px] text-[#111827] dark:text-[#E5E7EB]">Donation systems</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <div className="w-8 h-8 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[18px]">📱</span>
                    </div>
                    <span className="text-[14px] text-[#111827] dark:text-[#E5E7EB]">Communication channels</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <div className="w-8 h-8 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[18px]">🎓</span>
                    </div>
                    <span className="text-[14px] text-[#111827] dark:text-[#E5E7EB]">NGO programs & events</span>
                  </div>
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 3: Information Collection */}
              <section id="data-collection" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  3. Information We Collect
                </h2>
                
                {/* 3.1 Personal Information */}
                <div className="mb-6">
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    3.1 Personal Information
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                    We may collect:
                  </p>
                  <ul className="space-y-2">
                    {['Full Name', 'Email Address', 'Phone Number', 'Address (if required)'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3.2 Donation Data */}
                <div className="mb-6">
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    3.2 Donation & Transaction Data
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                    When you donate:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['Donation Amount', 'Payment Method (UPI / Card / Net Banking)', 'Transaction ID / Reference ID', 'Payment status'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Important Box */}
                  <div className="bg-[#F9FAFB] dark:bg-[#112F2B] border-l-4 border-[#F4B400] rounded-lg p-4">
                    <p className="text-[14px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2">
                      ⚠️ We do NOT store sensitive financial data like:
                    </p>
                    <ul className="space-y-1.5">
                      {['Card number', 'CVV', 'UPI PIN'].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
                          <span className="text-red-500">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3.3 Automatic Data */}
                <div className="mb-6">
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    3.3 Automatically Collected Data
                  </h3>
                  <ul className="space-y-2">
                    {['IP address', 'Device type', 'Browser details', 'Pages visited', 'Time spent on website'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3.4 Voluntary Information */}
                <div>
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    3.4 Voluntary Information
                  </h3>
                  <ul className="space-y-2">
                    {['Feedback forms', 'Messages during donation', 'Survey responses', 'Event participation details'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 4: How We Use Data */}
              <section id="usage" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  4. How We Use Your Information
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  We use your data for:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '🧾', title: 'Donation Management', items: ['Process payments', 'Generate receipts', 'Track contributions'] },
                    { icon: '📢', title: 'Communication', items: ['Share updates', 'Inform about NGO activities', 'Send donation confirmations'] },
                    { icon: '📊', title: 'Improvement', items: ['Improve website usability', 'Analyze engagement'] },
                    { icon: '⚖️', title: 'Legal Compliance', items: ['Maintain financial records', 'Meet audit and taxation requirements'] }
                  ].map((category, index) => (
                    <div key={index} className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[20px]">{category.icon}</span>
                        <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB]">
                          {category.title}
                        </h3>
                      </div>
                      <ul className="space-y-1.5 ml-7">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 5: Payment Processing */}
              <section id="payments" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  5. Payment Processing (Razorpay + UPI)
                </h2>
                
                {/* Razorpay */}
                <div className="mb-6">
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    5.1 Razorpay Integration
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                    We use Razorpay as a secure payment gateway.
                  </p>
                  
                  {/* Secure Badge */}
                  <div className="bg-gradient-to-r from-[#1E7A6E]/10 to-[#4FD1C5]/10 dark:from-[#1E7A6E]/20 dark:to-[#4FD1C5]/20 rounded-lg p-4 mb-4 border border-[#1E7A6E]/20 dark:border-[#4FD1C5]/20">
                    <div className="flex items-center gap-3">
                      <Lock className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                      <div>
                        <p className="text-[15px] font-semibold text-[#111827] dark:text-[#E5E7EB]">
                          🔒 Secure Payment Processing
                        </p>
                        <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                          All transactions are encrypted and handled by trusted payment providers
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-3">
                    {['All transactions are encrypted', 'Razorpay handles sensitive data'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                    We receive only:
                  </p>
                  <ul className="space-y-2">
                    {['Transaction ID', 'Amount', 'Status'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* UPI QR */}
                <div className="mb-6">
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    5.2 UPI QR Payments
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-3">
                    When donating via QR:
                  </p>
                  <ul className="space-y-2">
                    {['Payment is processed by your bank', 'We only receive limited data:', 'Sender name (if visible)', 'Transaction reference'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security Assurance */}
                <div>
                  <h3 className="text-[18px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-3">
                    5.3 Payment Security Assurance
                  </h3>
                  <ul className="space-y-2">
                    {['SSL-secured website', 'Trusted payment providers', 'No storage of sensitive financial credentials'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 6: Sharing */}
              <section id="sharing" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  6. Sharing of Information
                </h2>
                
                {/* Important Box */}
                <div className="bg-[#F9FAFB] dark:bg-[#112F2B] border-l-4 border-[#1E7A6E] dark:border-[#4FD1C5] rounded-lg p-4 mb-4">
                  <p className="text-[15px] font-semibold text-[#111827] dark:text-[#E5E7EB]">
                    We do NOT sell your data.
                  </p>
                </div>

                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  We only share data with:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: '💳', text: 'Payment processors (Razorpay, banks)' },
                    { icon: '⚖️', text: 'Legal authorities (if required)' },
                    { icon: '📊', text: 'Internal accounting systems' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                      <span className="text-[20px]">{item.icon}</span>
                      <span className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 7: Security */}
              <section id="security" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  7. Data Security
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  We implement:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { icon: '🔐', text: 'SSL encryption' },
                    { icon: '🔒', text: 'Restricted access' },
                    { icon: '🛡️', text: 'Secure databases' }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg text-center">
                      <span className="text-[24px]">{item.icon}</span>
                      <span className="text-[14px] text-[#111827] dark:text-[#E5E7EB] font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#FEF3C7] dark:bg-[#92400E]/20 border-l-4 border-[#F59E0B] rounded-lg p-4">
                  <p className="text-[14px] text-[#92400E] dark:text-[#FCD34D]">
                    <strong>However:</strong> No digital system is 100% secure.
                  </p>
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 8: Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  8. Cookies & Tracking
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  We use cookies to:
                </p>
                <ul className="space-y-2">
                  {['Improve performance', 'Remember preferences', 'Analyze traffic'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 9: Third-Party Services */}
              <section id="third-party" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  9. Third-Party Services
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  We may use:
                </p>
                <ul className="space-y-2 mb-4">
                  {['Razorpay (payments)', 'Hosting providers', 'Analytics tools'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] italic">
                  We are not responsible for their independent policies.
                </p>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 10: Children's Privacy */}
              <section id="children" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  Since we work with students:
                </p>
                <ul className="space-y-2">
                  {['Data is collected responsibly', 'Used only for educational purposes', 'No misuse or commercial use'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 11: Your Rights */}
              <section id="rights" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  11. Your Rights
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  You can:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Eye, title: 'Access your data', desc: 'Request a copy of your information' },
                    { icon: FileText, title: 'Correct information', desc: 'Update inaccurate details' },
                    { icon: Shield, title: 'Request deletion', desc: 'Remove your data from our systems' },
                    { icon: Lock, title: 'Withdraw consent', desc: 'Opt-out of data collection' }
                  ].map((right, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47]">
                      <div className="w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <right.icon className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1">
                          {right.title}
                        </h3>
                        <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                          {right.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 12: Data Retention */}
              <section id="retention" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  12. Data Retention
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  We retain data:
                </p>
                <ul className="space-y-2">
                  {['For legal compliance', 'For donation records', 'For reporting and transparency'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 13: Refund Policy */}
              <section id="refunds" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  13. Refund Policy
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                    Donations are non-refundable
                  </li>
                  <li className="flex items-center gap-3 text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5]"></div>
                    Duplicate payments → contact within 7 days
                  </li>
                </ul>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 14: Changes to Policy */}
              <section id="changes" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  14. Changes to Policy
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#6B7280] dark:text-[#9CA3AF]">
                  We may update this policy periodically. Changes will be reflected with a new "Last Updated" date.
                </p>
              </section>

              <div className="my-8 h-[1px] bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>

              {/* Section 15: Contact */}
              <section id="contact" className="mb-12">
                <h2 className="text-[24px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-4">
                  15. Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <Mail className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1">Email</p>
                      <a href="mailto:tech.lakhilraj@gmail.com" className="text-[15px] text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline">
                        tech.lakhilraj@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <Phone className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1">Phone</p>
                      <a href="tel:+918058060375" className="text-[15px] text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline">
                        +91 94677 63541
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg">
                    <MapPin className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1">Address</p>
                      <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF]">
                        IIIT Bhagalpur, Bihar 813210, India
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Acknowledgment */}
              <div className="bg-gradient-to-r from-[#1E7A6E]/5 to-[#4FD1C5]/5 dark:from-[#1E7A6E]/10 dark:to-[#4FD1C5]/10 rounded-lg p-6 text-center border border-[#1E7A6E]/10 dark:border-[#4FD1C5]/10">
                <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.7]">
                  By using our website, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
