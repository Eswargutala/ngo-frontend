'use client';
import { useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Heart,
  Users,
  Globe,
  TrendingUp,
  Award,
  Sparkles,
  DollarSign,
  RepeatIcon,
  Gift,
  HandHeart,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Leaf,
  Target,
  CheckCircle,
  ChevronDown,
  Send,
  Lock,
  FileCheck,
  Shield,
  AlertCircle,
  QrCode,
  CreditCard
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function IndividualSupport() {
  const { t } = useThemeLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonateRazorpay = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate Razorpay payment gateway integration
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form
    setSelectedAmount(null);
    setCustomAmount('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const scrollToDonation = () => {
    const donationElement = document.getElementById('donation-section');
    donationElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const predefinedAmounts = [100, 500, 1000, 2000];

  const whySupportMatters = [
    { icon: GraduationCap, text: 'Helps educate students' },
    { icon: Briefcase, text: 'Supports women livelihood' },
    { icon: Globe, text: 'Promotes community development' },
    { icon: HeartPulse, text: 'Improves health awareness' },
    { icon: Award, text: 'Builds skills and confidence' },
    { icon: Sparkles, text: 'Creates long-term impact' }
  ];

  const supportWays = [
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'One-Time Donation',
      description: 'Support ongoing initiatives'
    },
    {
      icon: RepeatIcon,
      emoji: '🔁',
      title: 'Monthly Contribution',
      description: 'Provide consistent support'
    },
    {
      icon: Gift,
      emoji: '🎁',
      title: 'Sponsor a Program',
      description: 'Fund a specific initiative'
    },
    {
      icon: HandHeart,
      emoji: '🤝',
      title: 'Volunteer Your Time',
      description: 'Contribute skills and effort'
    }
  ];

  const contributionAreas = [
    '📚 Education programs',
    '👩‍👜 Women empowerment',
    '🩺 Health initiatives',
    '🌿 Environmental activities',
    '🎭 Skill development'
  ];

  const impactStats = [
    { emoji: '🎓', value: '1200+', label: 'Students' },
    { emoji: '👩', value: '50+', label: 'Women Empowered' },
    { emoji: '🌍', value: '12+', label: 'Villages' },
    { emoji: '📚', value: '150+', label: 'Sessions' }
  ];

  const impactImages = [
    'https://images.unsplash.com/photo-1712231872585-7ff87adc7bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb24lMjBoZWxwaW5nJTIwaGFuZHMlMjBpbmRpYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzQzODMyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760001552685-fa470d9cd473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlJTIwc29jaWFsJTIwd29ya3xlbnwxfHx8fDE3NzQzODMyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwc2Nob29sJTIwaW5kaWF8ZW58MXx8fHwxNzc0MzgzMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1723564211731-21ceb97443a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzJTIwdHJhaW5pbmclMjBpbmRpYXxlbnwxfHx8fDE3NzQzODMyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const testimonials = [
    {
      quote: 'Feels great to contribute.',
      description: 'Knowing my support creates real impact is rewarding.',
      author: 'Donor'
    },
    {
      quote: 'Transparent and meaningful.',
      description: 'I trust their work and continue supporting.',
      author: 'Supporter'
    }
  ];

  const trustPoints = [
    { icon: Shield, text: 'Secure payment gateway (Razorpay)' },
    { icon: Lock, text: 'No storage of sensitive payment data' },
    { icon: FileCheck, text: 'Transparent fund usage' },
    { icon: CheckCircle, text: 'Regular updates' }
  ];

  const faqs = [
    { question: 'Is my donation secure?', answer: 'Yes, we use Razorpay, a secure and trusted payment gateway to process all donations.' },
    { question: 'Will I get a receipt?', answer: 'Yes, you will receive a donation receipt via email immediately after successful payment.' },
    { question: 'Can I donate monthly?', answer: 'Yes, we support both one-time and monthly recurring donations.' },
    { question: 'Where is the money used?', answer: 'Your donation supports our programs and operations including education, women empowerment, health, and community development.' }
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
                💛 Your Support Can Change Lives
              </h1>
              <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Every contribution helps us provide education, guidance, and opportunities to those who need it the most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToDonation}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
                >
                  💳 Donate Now
                </button>
                <a
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
                >
                  🤝 Become a Volunteer
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] h-80">
              <ImageWithFallback
                src={impactImages[0]}
                alt="Supporting community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Why Your Support Matters */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💡 Why Your Support Matters
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {whySupportMatters.map((item, index) => (
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

          {/* Ways You Can Support */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💳 Ways You Can Support
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {supportWays.map((way, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{way.emoji}</span>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white">
                      {way.title}
                    </h3>
                  </div>
                  <p className="text-base text-[#6B7280] dark:text-[#9CA3AF]">
                    {way.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Where Your Contribution Goes */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📊 Where Your Contribution Goes
            </h2>
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <div className="space-y-3">
                {contributionAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                    <span className="text-base text-[#111827] dark:text-white">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact of Your Support */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📈 Impact of Your Support
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 border border-[#E5E7EB] dark:border-[#1F4D47]">
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

          {/* Your Impact in Action */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              📸 Your Impact in Action
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {impactImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#1F4D47] hover:scale-105 transition-transform duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Impact ${index + 1}`}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Supporter Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              💬 Supporter Testimonials
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

          {/* Donation Section */}
          <div id="donation-section" className="mb-12">
            <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-8 bg-white dark:bg-[#112F2B]">
              <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                💳 Donation Section
              </h2>
              <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                Choose an amount and complete your donation to make a difference
              </p>

              {submitSuccess && (
                <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg p-5 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-base text-green-800 dark:text-green-200">
                    Thank you for your generous donation! Your receipt has been sent to your email.
                  </p>
                </div>
              )}

              <form onSubmit={handleDonateRazorpay}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Amount Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
                      Select or Enter Amount
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`px-6 py-4 rounded-lg border-2 text-lg font-semibold transition-all duration-200 ${
                            selectedAmount === amount
                              ? 'border-[#1E7A6E] dark:border-[#4FD1C5] bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 text-[#1E7A6E] dark:text-[#4FD1C5]'
                              : 'border-[#E5E7EB] dark:border-[#1F4D47] text-[#111827] dark:text-white hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5]'
                          }`}
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-base font-medium text-[#111827] dark:text-white mb-2">
                        Custom Amount
                      </label>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        min="1"
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                        placeholder="Enter custom amount"
                      />
                    </div>
                  </div>

                  {/* Right: Form Fields */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#111827] dark:text-white mb-4">
                      Your Details
                    </h3>
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
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                        placeholder="Any message or dedication (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1E7A6E] hover:bg-[#166558] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard size={20} />
                        👉 Donate via Razorpay
                      </>
                    )}
                  </button>
                  <a
                    href="/donate/upi"
                    className="w-full bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <QrCode size={20} />
                    👉 Donate via UPI QR
                  </a>
                </div>
              </form>

            </div>
          </div>

          {/* Trust & Transparency */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-6">
              🔐 Trust & Transparency
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#112F2B]"
                >
                  <point.icon size={24} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                  <span className="text-base text-[#111827] dark:text-white">{point.text}</span>
                </div>
              ))}
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
              🚀 Be the Reason Someone Smiles
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Your support today can transform lives tomorrow. Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToDonation}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-base font-medium transition-all duration-200"
              >
                Donate Now
              </button>
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg text-base font-medium transition-all duration-200"
              >
                Get Involved
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
