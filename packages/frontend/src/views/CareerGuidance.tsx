'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Target, Users, TrendingUp, Award, School, FileText, MessageCircle, 
  BarChart, Lightbulb, AlertCircle, CheckCircle, MapPin, Heart,
  ArrowRight, ChevronDown, ChevronUp, Compass, Activity
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CareerGuidance() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const problems = [
    'Lack of career awareness',
    'Decisions influenced by society or family pressure',
    'Limited exposure to real opportunities',
    'No proper mentorship'
  ];

  const withoutGuidance = [
    'Talent gets wasted',
    'Students lose confidence',
    'Wrong career choices lead to dissatisfaction'
  ];

  const withGuidance = [
    'Students gain clarity',
    'Make informed decisions',
    'Build confidence and direction'
  ];

  const solutions = [
    { icon: Target, text: 'Personalized guidance' },
    { icon: BarChart, text: 'Data-driven assessments' },
    { icon: Users, text: 'Mentor support' },
    { icon: TrendingUp, text: 'Exposure to real careers' }
  ];

  const steps = [
    {
      number: 1,
      title: 'Awareness Session',
      description: 'We visit schools and introduce career options.',
      icon: School
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'Students take simple MCQ-based tests to understand interests, strengths, and skills.',
      icon: FileText
    },
    {
      number: 3,
      title: 'Analysis',
      description: 'We analyze responses and identify suitable career paths.',
      icon: BarChart
    },
    {
      number: 4,
      title: 'Mentorship',
      description: 'Students receive guidance from experienced mentors.',
      icon: Users
    },
    {
      number: 5,
      title: 'Follow-Up',
      description: 'We track progress and support decision-making.',
      icon: Activity
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Every student gets tailored recommendations based on their unique profile.'
    },
    {
      icon: BarChart,
      title: 'Career Assessment',
      description: 'Simple MCQ-based evaluation system to identify strengths and interests.'
    },
    {
      icon: Users,
      title: 'Mentor Support',
      description: 'Guidance from experienced mentors with real-world expertise.'
    },
    {
      icon: TrendingUp,
      title: 'Real-World Exposure',
      description: 'Students learn about actual careers and opportunities.'
    },
    {
      icon: Activity,
      title: 'Continuous Tracking',
      description: 'Follow-up sessions to track progress and refine career paths.'
    }
  ];

  const programs = [
    {
      icon: School,
      title: 'School Visits',
      items: ['Awareness sessions', 'Interactive discussions'],
      image: 'https://images.unsplash.com/photo-1602145095452-aba06946ed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBydXJhbCUyMGluZGlhfGVufDF8fHx8MTc3NDM3MDMyNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: FileText,
      title: 'Career Assessment Tests',
      items: ['MCQ-based', 'Easy to understand'],
      image: 'https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Nlc3NtZW50JTIwdGVzdCUyMGV4YW1pbmF0aW9uJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzQzNzAzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Users,
      title: 'Mentorship Sessions',
      items: ['One-on-one or group', 'Real guidance'],
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBndWlkaW5nJTIwc3R1ZGVudCUyMGNvdW5zZWxpbmd8ZW58MXx8fHwxNzc0MzcwMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: BarChart,
      title: 'Career Reports',
      items: ['Personalized suggestions', 'Clear roadmap'],
      image: 'https://images.unsplash.com/photo-1694208616674-4cd4b63744ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkbWFwJTIwam91cm5leSUyMHBhdGglMjBzdWNjZXNzfGVufDF8fHx8MTc3NDM3MDMyNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: MessageCircle,
      title: 'Workshops',
      items: ['Skill building', 'Confidence development'],
      image: 'https://images.unsplash.com/photo-1773270196888-0cdacb07edae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNhcmVlciUyMGRldmVsb3BtZW50JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc0MzcwMzI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const targetAudience = [
    { icon: Users, text: 'Students (Class 8–10)' },
    { icon: School, text: 'Government school students' },
    { icon: MapPin, text: 'Rural & underserved communities' }
  ];

  const impact = [
    { icon: Users, label: 'Students Guided', value: '1,800+' },
    { icon: School, label: 'Schools Visited', value: '45+' },
    { icon: FileText, label: 'Assessments Conducted', value: '1,500+' },
    { icon: Award, label: 'Mentors Involved', value: '85+' }
  ];

  const testimonials = [
    {
      text: "I didn't know what to do after 10th. Now I have clarity and confidence.",
      author: 'Priya, Student'
    },
    {
      text: 'The mentorship helped me understand my strengths and choose the right path.',
      author: 'Rahul, Student'
    },
    {
      text: 'Being a mentor in this program has been incredibly rewarding.',
      author: 'Anjali, Volunteer Mentor'
    }
  ];

  const helpOptions = [
    {
      icon: Users,
      title: 'Become a Mentor',
      description: 'Help students choose the right path with your experience.',
      cta: 'Join as Mentor',
      link: '/volunteer'
    },
    {
      icon: Heart,
      title: 'Support the Program',
      description: 'Help us reach more schools and guide more students.',
      cta: 'Donate Now',
      link: '/donate'
    },
    {
      icon: TrendingUp,
      title: 'Spread Awareness',
      description: 'Share with students and communities who need guidance.',
      cta: 'Share',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'Is this program free?',
      answer: 'Yes, completely free for students. Our mission is to make career guidance accessible to all.'
    },
    {
      question: 'How are careers suggested?',
      answer: 'Based on a combination of interest assessment, aptitude tests, and personalized mentor input.'
    },
    {
      question: 'Can volunteers join as mentors?',
      answer: 'Absolutely! We welcome professionals and educators to join our mentorship program.'
    },
    {
      question: 'Is it offline or online?',
      answer: 'Both. We conduct offline sessions at schools and offer online mentorship for follow-ups.'
    },
    {
      question: 'What age group is this for?',
      answer: 'We primarily focus on students in Class 8–10, where career decisions start taking shape.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0B1F1D]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 bg-gradient-to-br from-[#F9FAFB] via-[#FFFFFF] to-[#F0F9FF] dark:from-[#0B1F1D] dark:via-[#0F3D3A] dark:to-[#0B1F1D]">
        <div className={`max-w-[900px] mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif] leading-tight">
                Right Guidance. Right Career. Right Future.
              </h1>
              <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] leading-relaxed">
                We help students make informed career decisions through mentorship, awareness, and real-world insights.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/volunteer"
                  className="inline-flex items-center gap-2 bg-[#1E7A6E] hover:bg-[#155950] dark:bg-[#4FD1C5] dark:hover:bg-[#38B2A3] text-white px-5 py-2.5 rounded-lg font-medium transition-colors font-['Inter',sans-serif] text-[14px]"
                >
                  <Users className="w-4 h-4" />
                  Join as Mentor
                </a>
                <a 
                  href="#assessment"
                  className="inline-flex items-center gap-2 border border-[#1E7A6E] dark:border-[#4FD1C5] text-[#1E7A6E] dark:text-[#4FD1C5] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1E7A6E] hover:text-white dark:hover:bg-[#4FD1C5] dark:hover:text-[#0B1F1D] transition-colors font-['Inter',sans-serif] text-[14px]"
                >
                  <BarChart className="w-4 h-4" />
                  Take Career Assessment
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2FyZWVyJTIwcGxhbm5pbmclMjB0aGlua2luZyUyMGZ1dHVyZXxlbnwxfHx8fDE3NzQzNzAzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student planning career"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Quote */}
      <section className="py-6 px-4 bg-[#FEF3C7] dark:bg-[#78350F]/20">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[16px] font-medium text-[#92400E] dark:text-[#FCD34D] font-['Inter',sans-serif] italic">
            "A wrong career choice can cost years — the right guidance can change a life."
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Problem Statement
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif] leading-relaxed">
            In many rural and semi-urban areas, students face:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10 flex items-start gap-2"
              >
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-[14px] text-red-800 dark:text-red-200 font-['Inter',sans-serif]">
                  {problem}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] italic">
            As a result, many students choose the wrong career path.
          </p>
        </div>
      </section>

      {/* Why Career Guidance Matters */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Why Career Guidance Matters
          </h2>
          <p className="text-[15px] text-[#111827] dark:text-[#E5E7EB] mb-5 font-['Inter',sans-serif] font-medium">
            Career decisions define a student's future.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-900/5">
              <h3 className="text-[16px] font-semibold text-red-900 dark:text-red-200 mb-3 font-['Poppins',sans-serif]">
                Without Proper Guidance:
              </h3>
              <ul className="space-y-2">
                {withoutGuidance.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[14px] text-red-800 dark:text-red-300 font-['Inter',sans-serif]">
                    <span className="text-red-500 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-900/5">
              <h3 className="text-[16px] font-semibold text-green-900 dark:text-green-200 mb-3 font-['Poppins',sans-serif]">
                With Proper Guidance:
              </h3>
              <ul className="space-y-2">
                {withGuidance.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[14px] text-green-800 dark:text-green-300 font-['Inter',sans-serif]">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Our Solution
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-5 font-['Inter',sans-serif] leading-relaxed">
            Our Career Guidance Program is designed to provide:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30 text-center hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5] transition-colors"
              >
                <solution.icon className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5] mx-auto mb-2" />
                <p className="text-[13px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
            We focus on students from <strong className="text-[#1E7A6E] dark:text-[#4FD1C5]">Class 8–10</strong>, where decisions begin to shape the future.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            How It Works
          </h2>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1E7A6E]/20 dark:bg-[#4FD1C5]/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white dark:bg-[#0B1F1D] p-4 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30">
                      <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                        Step {step.number}: {step.title}
                      </h3>
                      <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white dark:text-[#0B1F1D]" />
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30 hover:shadow-md dark:hover:shadow-[#4FD1C5]/10 transition-all"
              >
                <feature.icon className="w-7 h-7 text-[#1E7A6E] dark:text-[#4FD1C5] mb-3" />
                <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Activities */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            Programs & Activities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-32 overflow-hidden">
                  <ImageWithFallback 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <program.icon className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                    <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                      {program.title}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {program.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
            Target Audience
          </h2>
          <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] mb-5 font-['Inter',sans-serif]">
            We focus on:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {targetAudience.map((audience, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30 flex items-center gap-3"
              >
                <audience.icon className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                <p className="text-[14px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                  {audience.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-8 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif] text-center">
            Our Impact
          </h2>
          <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif] text-center">
            Changing lives through guidance.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impact.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg bg-white dark:bg-[#0B1F1D] border border-[#E5E7EB] dark:border-[#1E7A6E]/30 text-center hover:scale-105 transition-transform"
              >
                <item.icon className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5] mx-auto mb-2" />
                <p className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
                  {item.value}
                </p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif] text-center">
            What Students Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg bg-[#F9FAFB] dark:bg-[#0F3D3A] border border-[#E5E7EB] dark:border-[#1E7A6E]/30"
              >
                <p className="text-[14px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif] mb-3 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            Get Involved
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {helpOptions.map((option, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30"
              >
                <option.icon className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5] mb-3" />
                <h3 className="text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
                  {option.title}
                </h3>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif]">
                  {option.description}
                </p>
                <a 
                  href={option.link}
                  className="inline-flex items-center gap-1 text-[13px] text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-2 transition-all font-['Inter',sans-serif]"
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 bg-[#F9FAFB] dark:bg-[#0F3D3A]/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-6 font-['Poppins',sans-serif]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[#0B1F1D] rounded-lg border border-[#E5E7EB] dark:border-[#1E7A6E]/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-[#F9FAFB] dark:hover:bg-[#0F3D3A] transition-colors"
                >
                  <span className="text-[15px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-gradient-to-r from-[#1E7A6E] to-[#155950] dark:from-[#0F3D3A] dark:to-[#1E7A6E] rounded-xl p-8 text-center">
            <Compass className="w-12 h-12 text-white dark:text-[#4FD1C5] mx-auto mb-4" />
            <h2 className="text-[32px] font-bold text-white dark:text-[#E5E7EB] mb-3 font-['Poppins',sans-serif]">
              Help a Student Choose the Right Future
            </h2>
            <p className="text-[15px] text-white/90 dark:text-[#9CA3AF] mb-6 font-['Inter',sans-serif]">
              Every student deserves the right guidance. Be part of their journey.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="/volunteer"
                className="inline-flex items-center gap-2 bg-white text-[#1E7A6E] dark:bg-[#4FD1C5] dark:text-[#0B1F1D] px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-['Inter',sans-serif] text-[14px]"
              >
                Become a Mentor
              </a>
              <a 
                href="/donate"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E7A6E] dark:hover:bg-[#4FD1C5] dark:hover:text-[#0B1F1D] transition-all font-['Inter',sans-serif] text-[14px]"
              >
                Support This Program
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
