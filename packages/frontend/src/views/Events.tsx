'use client';
import { useState, useMemo } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const BASE_URL = API_URL.endsWith('/api/v1') ? API_URL : `${API_URL}/api/v1`;
import { 
  Calendar,
  MapPin,
  Tag,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  X
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  image: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'past';
  featured?: boolean;
}

export default function Events() {
  const { t } = useThemeLanguage();
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');
  const [selectedType, setSelectedType] = useState('All');
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const types = ['All', 'Workshops', 'Campaigns', 'Awareness', 'Training'];

  const events: Event[] = [
    {
      id: 1,
      title: 'Career Guidance Workshop',
      date: 'March 15, 2025',
      location: 'Bhagalpur',
      type: 'Workshops',
      image: 'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMG1lbnRvcnNoaXAlMjBjb3Vuc2VsaW5nfGVufDF8fHx8MTc3NDM4NDc5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Helping students explore career options and make informed decisions.',
      status: 'upcoming',
      featured: true
    },
    {
      id: 2,
      title: 'Tree Plantation Drive',
      date: 'April 5, 2025',
      location: 'Village Area',
      type: 'Campaigns',
      image: 'https://images.unsplash.com/photo-1721457616561-701d25702874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBjYW1wYWlnbiUyMHZvbHVudGVlcnMlMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzQzODQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Join us in creating a greener environment through collective action.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Health Awareness Camp',
      date: 'Feb 20, 2025',
      location: 'Rural Community',
      type: 'Awareness',
      image: 'https://images.unsplash.com/photo-1653508311259-692e4ddadaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwbWVkaWNhbCUyMGF3YXJlbmVzcyUyMGNoZWNrdXB8ZW58MXx8fHwxNzc0Mzg0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spreading awareness about hygiene and preventive healthcare.',
      status: 'ongoing'
    },
    {
      id: 4,
      title: 'Digital Literacy Training',
      date: 'March 22, 2025',
      location: 'Community Center',
      type: 'Training',
      image: 'https://images.unsplash.com/photo-1774292476423-c3ee7ea107b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2tpbGxzJTIwY29tcHV0ZXIlMjB0cmFpbmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0Mzg0NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Building essential digital skills for the modern world.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Women Empowerment Workshop',
      date: 'April 12, 2025',
      location: 'Bhagalpur',
      type: 'Workshops',
      image: 'https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNraWxscyUyMHRyYWluaW5nJTIwZW1wb3dlcm1lbnQlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzQzODQ3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Skill development and empowerment training for women.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Community Gathering',
      date: 'March 30, 2025',
      location: 'Village Square',
      type: 'Awareness',
      image: 'https://images.unsplash.com/photo-1769618096619-834a3f28b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NDMzOTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bringing community members together for collective growth.',
      status: 'upcoming'
    },
    {
      id: 7,
      title: 'Environmental Awareness Session',
      date: 'April 18, 2025',
      location: 'Schools',
      type: 'Awareness',
      image: 'https://images.unsplash.com/photo-1760992003940-575677a51d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwYXdhcmVuZXNzJTIwc3VzdGFpbmFiaWxpdHklMjBncmVlbnxlbnwxfHx8fDE3NzQzODQ3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Teaching students about sustainability and conservation.',
      status: 'upcoming'
    },
    {
      id: 8,
      title: 'Volunteer Training Program',
      date: 'March 8, 2025',
      location: 'Foundation Office',
      type: 'Training',
      image: 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZ3xlbnwxfHx8fDE3NzQzMzk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Equipping volunteers with skills and knowledge to serve better.',
      status: 'upcoming'
    },
    {
      id: 9,
      title: 'Education Workshop',
      date: 'Jan 15, 2025',
      location: 'Bhagalpur',
      type: 'Workshops',
      image: 'https://images.unsplash.com/photo-1719159381916-062fa9f435a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhd2FyZW5lc3MlMjBzZXNzaW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDM4NDc5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Interactive learning session for students.',
      status: 'past'
    },
    {
      id: 10,
      title: 'Skill Development Training',
      date: 'Dec 20, 2024',
      location: 'Community Hall',
      type: 'Training',
      image: 'https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXIlMjB0cmFpbmluZyUyMGV2ZW50JTIwcGVvcGxlfGVufDF8fHx8MTc3NDM4NDc4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hands-on training for skill development.',
      status: 'past'
    }
  ];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesTab = event.status === selectedTab;
      const matchesType = selectedType === 'All' || event.type === selectedType;
      return matchesTab && matchesType;
    });
  }, [selectedTab, selectedType]);

  const featuredEvent = events.find(event => event.featured && event.status === selectedTab);
  const regularEvents = filteredEvents.filter(event => !event.featured);
  const displayedEvents = regularEvents.slice(0, visibleEvents);
  const hasMoreEvents = visibleEvents < regularEvents.length;

  const upcomingTimeline = events.filter(e => e.status === 'upcoming').slice(0, 5);

  const handleLoadMore = () => {
    setVisibleEvents(prev => prev + 6);
  };

  const handleTabClick = (tab: 'upcoming' | 'ongoing' | 'past') => {
    setSelectedTab(tab);
    setVisibleEvents(8);
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    setVisibleEvents(8);
  };

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
    setFormSubmitted(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      try {
        await axios.post(`${BASE_URL}/forms/event-registration`, {
          ...formData,
          eventId: selectedEvent ? selectedEvent.id : null,
          eventName: selectedEvent ? selectedEvent.title : 'General'
        });
        setFormSubmitted(true);
        setTimeout(() => {
          setShowRegistrationForm(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit application. Please try again.');
        return;
      }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-[#111827] dark:text-white mb-3">
              📅 Events & Workshops
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Explore our upcoming and past events, workshops, and community activities.
            </p>
          </div>

          {/* Filter + Tabs */}
          <div className="mb-10">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-5">
              {(['upcoming', 'ongoing', 'past'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                    selectedTab === tab
                      ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0D1F1C]'
                      : 'bg-white dark:bg-[#112F2B] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#1F4D47] hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeClick(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-[#F4B400] text-[#111827]'
                      : 'bg-[#F9FAFB] dark:bg-[#112F2B] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#1F4D47] hover:border-[#F4B400]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Event */}
          {featuredEvent && selectedType === 'All' && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  Featured Event
                </h2>
              </div>
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl overflow-hidden bg-white dark:bg-[#112F2B] hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto">
                    <ImageWithFallback
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 text-[#1E7A6E] dark:text-[#4FD1C5]">
                        {featuredEvent.type}
                      </span>
                      <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1">
                        <Calendar size={14} />
                        {featuredEvent.date}
                      </span>
                      <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1">
                        <MapPin size={14} />
                        {featuredEvent.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-5">
                      {featuredEvent.description}
                    </p>
                    <button
                      onClick={() => handleRegister(featuredEvent)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg font-medium transition-all duration-200 w-fit"
                    >
                      Register Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Grid: Events + Timeline */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            
            {/* Events Grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white capitalize">
                  {selectedTab} Events
                </h2>
                <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  ({filteredEvents.length})
                </span>
              </div>

              {displayedEvents.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
                    No events found in this category.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {displayedEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl overflow-hidden bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="h-48 overflow-hidden">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <h3 className="text-lg font-semibold text-[#111827] dark:text-white line-clamp-1">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {event.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {event.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Tag size={12} />
                            {event.type}
                          </span>
                        </div>
                        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-2">
                          {event.description}
                        </p>
                        <button
                          onClick={() => handleRegister(event)}
                          className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                            event.status === 'upcoming'
                              ? 'bg-[#1E7A6E] hover:bg-[#166558] text-white'
                              : event.status === 'ongoing'
                              ? 'bg-[#F4B400] hover:bg-[#D99F00] text-[#111827]'
                              : 'bg-[#F9FAFB] dark:bg-[#0D1F1C] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#1F4D47]'
                          }`}
                        >
                          {event.status === 'upcoming' ? 'Register Now' : event.status === 'ongoing' ? 'Join Event' : 'View Details'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More */}
              {hasMoreEvents && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
                  >
                    Load More Events
                  </button>
                </div>
              )}
            </div>

            {/* Timeline Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  Upcoming Timeline
                </h2>
              </div>
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B] sticky top-6">
                <div className="space-y-5">
                  {upcomingTimeline.map((item, index) => (
                    <div key={item.id} className="relative pl-6">
                      {/* Timeline line */}
                      {index !== upcomingTimeline.length - 1 && (
                        <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-[#E5E7EB] dark:bg-[#1F4D47]"></div>
                      )}
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] border-2 border-white dark:border-[#112F2B]"></div>
                      
                      <div>
                        <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                          {item.date}
                        </p>
                        <h4 className="text-sm font-semibold text-[#111827] dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                          📍 {item.location}
                        </p>
                        <button
                          onClick={() => handleRegister(item)}
                          className="inline-flex items-center gap-1 text-xs text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-2 transition-all duration-200"
                        >
                          Register <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-10 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
              Stay updated with our events
            </h2>
            <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Join our community to receive updates about upcoming events and activities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg font-medium transition-all duration-200">
                <Users size={18} />
                Join Community
              </button>
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
              >
                Volunteer
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#112F2B] rounded-xl max-w-md w-full p-6 relative border border-[#E5E7EB] dark:border-[#1F4D47]">
            <button
              onClick={() => setShowRegistrationForm(false)}
              className="absolute top-4 right-4 p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#0D1F1C] rounded-lg transition-colors"
            >
              <X size={20} className="text-[#6B7280] dark:text-[#9CA3AF]" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                  Registration Successful!
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  We'll send you event details via email.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                  Event Registration
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                  {selectedEvent?.title}
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="Your full name"
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
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] dark:text-white mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors resize-none"
                      placeholder="Any questions or special requirements?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg font-medium transition-all duration-200"
                  >
                    Register
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
