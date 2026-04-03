'use client';
import { useState, useMemo } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Calendar,
  ArrowRight,
  Tag,
  Newspaper,
  TrendingUp,
  Share2,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  content: string;
  featured?: boolean;
}

export default function News() {
  const { t } = useThemeLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleNews, setVisibleNews] = useState(8);

  const categories = ['All', 'Events', 'Announcements', 'Workshops', 'Achievements'];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Career Guidance Workshop Conducted',
      category: 'Workshops',
      date: 'Feb 2025',
      image: 'https://images.unsplash.com/photo-1756885375569-f04400d99cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNhcmVlciUyMGd1aWRhbmNlJTIwc3R1ZGVudHMlMjBpbmRpYXxlbnwxfHx8fDE3NzQzODQ1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'We conducted a career guidance session for students, helping them understand different career paths.',
      content: 'Full news content here...',
      featured: true
    },
    {
      id: 2,
      title: 'Tree Plantation Drive Successfully Completed',
      category: 'Events',
      date: 'Jan 2025',
      image: 'https://images.unsplash.com/photo-1637552481611-1f36222fb188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGVudmlyb25tZW50YWwlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc3NDM4NDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Volunteers and students participated in planting trees to promote environmental awareness.',
      content: 'Full news content here...'
    },
    {
      id: 3,
      title: 'Health Awareness Camp Organized',
      category: 'Events',
      date: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwbWVkaWNhbCUyMGF3YXJlbmVzcyUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzQzODQ1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A health camp was conducted to spread awareness about hygiene and preventive care.',
      content: 'Full news content here...'
    },
    {
      id: 4,
      title: 'Women Empowerment Initiative Expanded',
      category: 'Announcements',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzJTIwaGFuZGljcmFmdHxlbnwxfHx8fDE3NzQzODQ1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'More women joined our bag-making program, creating new livelihood opportunities.',
      content: 'Full news content here...'
    },
    {
      id: 5,
      title: 'Foundation Receives Community Excellence Award',
      category: 'Achievements',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1773314963888-6ecec50555a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMGF3YXJkJTIwY2VsZWJyYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3NDM4NDU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Recognized for outstanding contribution to community development and education.',
      content: 'Full news content here...'
    },
    {
      id: 6,
      title: 'Annual Community Gathering Held',
      category: 'Events',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1758798468567-dae59f52d365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMHByb2dyYW18ZW58MXx8fHwxNzc0Mzg0NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Community members, volunteers, and beneficiaries came together to celebrate our collective achievements.',
      content: 'Full news content here...'
    },
    {
      id: 7,
      title: 'New Partnership Announcement',
      category: 'Announcements',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1702351002798-6ccc7598494a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5vdW5jZW1lbnQlMjBtZWdhcGhvbmUlMjBuZXdzJTIwdXBkYXRlfGVufDF8fHx8MTc3NDM4NDU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'We are excited to announce a new partnership to expand our educational programs.',
      content: 'Full news content here...'
    },
    {
      id: 8,
      title: 'Education Support Program Reaches 500 Students',
      category: 'Achievements',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBsZWFybmluZyUyMGNoaWxkcmVufGVufDF8fHx8MTc3NDM4NDU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Our education support program has successfully reached over 500 students across multiple schools.',
      content: 'Full news content here...'
    },
    {
      id: 9,
      title: 'Digital Literacy Workshop for Rural Youth',
      category: 'Workshops',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1764314359427-6e685ce5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhaW5pbmclMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0Mzg0NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Introducing digital skills and computer literacy to youth in rural areas.',
      content: 'Full news content here...'
    },
    {
      id: 10,
      title: 'New Collaboration with Local Schools',
      category: 'Announcements',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1565665681743-6ff01c5181e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29yayUyMGhhbmRzfGVufDF8fHx8MTc3NDM4NDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Partnering with local schools to bring more programs and resources to students.',
      content: 'Full news content here...'
    },
    {
      id: 11,
      title: 'Environmental Awareness Session Completed',
      category: 'Workshops',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1637552481611-1f36222fb188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGVudmlyb25tZW50YWwlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc3NDM4NDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Students learned about sustainability and environmental conservation practices.',
      content: 'Full news content here...'
    },
    {
      id: 12,
      title: 'Volunteer Recognition Event',
      category: 'Events',
      date: 'Jul 2024',
      image: 'https://images.unsplash.com/photo-1773314963888-6ecec50555a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMGF3YXJkJTIwY2VsZWJyYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3NDM4NDU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Celebrating our dedicated volunteers who make our programs possible.',
      content: 'Full news content here...'
    }
  ];

  const filteredNews = useMemo(() => {
    return newsItems.filter(news => {
      return selectedCategory === 'All' || news.category === selectedCategory;
    });
  }, [selectedCategory]);

  const featuredNews = newsItems.find(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);
  const displayedNews = regularNews.slice(0, visibleNews);
  const hasMoreNews = visibleNews < regularNews.length;

  const handleLoadMore = () => {
    setVisibleNews(prev => prev + 6);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setVisibleNews(8);
  };

  // Timeline items (last 5 news items)
  const timelineItems = newsItems.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-[#111827] dark:text-white mb-3">
              📰 News & Updates
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Latest activities, announcements, and updates from our organization.
            </p>
          </div>

          {/* Filter */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0D1F1C]'
                    : 'bg-white dark:bg-[#112F2B] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#1F4D47] hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured News */}
          {featuredNews && selectedCategory === 'All' && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  Featured Update
                </h2>
              </div>
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl overflow-hidden bg-white dark:bg-[#112F2B] hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto">
                    <ImageWithFallback
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 text-[#1E7A6E] dark:text-[#4FD1C5]">
                        {featuredNews.category}
                      </span>
                      <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1">
                        <Calendar size={14} />
                        {featuredNews.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                      {featuredNews.title}
                    </h3>
                    <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                      {featuredNews.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-3 transition-all duration-200"
                      >
                        Read More <ArrowRight size={16} />
                      </a>
                      <button className="p-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#0D1F1C] transition-colors">
                        <Share2 size={16} className="text-[#6B7280] dark:text-[#9CA3AF]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content Grid: News + Timeline */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            
            {/* News Grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  {selectedCategory === 'All' ? 'All Updates' : `${selectedCategory}`}
                </h2>
                <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  ({filteredNews.length})
                </span>
              </div>

              {displayedNews.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
                    No updates found in this category.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {displayedNews.map((news) => (
                    <div
                      key={news.id}
                      className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl overflow-hidden bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="h-48 overflow-hidden">
                        <ImageWithFallback
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F9FAFB] dark:bg-[#0D1F1C] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47]">
                            {news.category}
                          </span>
                          <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1">
                            <Calendar size={12} />
                            {news.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#111827] dark:text-white line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-2">
                          {news.description}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-sm text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-3 transition-all duration-200"
                        >
                          Read More <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More */}
              {hasMoreNews && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
                  >
                    Load More Updates
                  </button>
                </div>
              )}
            </div>

            {/* Timeline Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  Recent Timeline
                </h2>
              </div>
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl p-6 bg-white dark:bg-[#112F2B] sticky top-6">
                <div className="space-y-5">
                  {timelineItems.map((item, index) => (
                    <div key={item.id} className="relative pl-6">
                      {/* Timeline line */}
                      {index !== timelineItems.length - 1 && (
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
                          {item.description.substring(0, 60)}...
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-xs text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-2 transition-all duration-200"
                        >
                          Read <ArrowRight size={12} />
                        </a>
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
              Stay connected with our latest updates
            </h2>
            <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Follow us on social media and subscribe to get the latest news and announcements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg font-medium transition-all duration-200">
                <Share2 size={18} />
                Follow Us
              </button>
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
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
