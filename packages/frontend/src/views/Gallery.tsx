'use client';
import { useState, useMemo } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  X,
  ChevronLeft,
  ChevronRight,
  Tag,
  Calendar,
  Play
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
  featured?: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

export default function Gallery() {
  const { t } = useThemeLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(16);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Education', 'Workshops', 'Health', 'Environment', 'Women Empowerment', 'Events'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzg1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Education',
      title: 'Classroom Learning Session',
      date: 'March 2025',
      featured: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1595315343110-9b445a960442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGJvb2tzJTIwc3R1ZHklMjBzY2hvb2x8ZW58MXx8fHwxNzc0Mzg1MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Education',
      title: 'Students Reading Together',
      date: 'March 2025',
      featured: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1768796371633-ba921e535c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2tpbGwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzQzODUwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Workshops',
      title: 'Workshop Training Session',
      date: 'Feb 2025'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1770097318207-e769b3ccadb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwY29uZmVyZW5jZSUyMHBlb3BsZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDM4NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Workshops',
      title: 'Seminar & Conference',
      date: 'Feb 2025'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wJTIwbWVkaWNhbCUyMGNoZWNrdXAlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0MzcyMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health',
      title: 'Health Camp & Checkup',
      date: 'Feb 2025'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1758691463333-c79215e8bc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwaGVhbHRoY2FyZSUyMGF3YXJlbmVzc3xlbnwxfHx8fDE3NzQzODUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health',
      title: 'Healthcare Awareness Session',
      date: 'Jan 2025'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudCUyMGdyZWVuJTIwbmF0dXJlfGVufDF8fHx8MTc3NDM4NTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Environment',
      title: 'Tree Plantation Drive',
      date: 'Jan 2025'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1758599668429-121d54188b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGVjbyUyMGZyaWVuZGx5JTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NzQzODUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Environment',
      title: 'Sustainability Initiative',
      date: 'Jan 2025'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzJTIwaGFuZGljcmFmdHxlbnwxfHx8fDE3NzQzODQ1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Women Empowerment',
      title: 'Women Skills Development',
      date: 'Dec 2024'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1641810290430-c24d021d4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdvcmtpbmclMjBzZXdpbmclMjBjcmFmdHN8ZW58MXx8fHwxNzc0Mzg1MDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Women Empowerment',
      title: 'Crafts & Sewing Workshop',
      date: 'Dec 2024'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1769618096619-834a3f28b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NDMzOTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
      title: 'Community Gathering',
      date: 'Nov 2024'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1758599667717-27c61bcdd14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwZ3JvdXAlMjB0ZWFtd29yayUyMGhlbHBpbmd8ZW58MXx8fHwxNzc0Mzg1MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
      title: 'Volunteer Team Activity',
      date: 'Nov 2024'
    },
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1769366056117-e1c3dceee209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwdmlsbGFnZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzQzODUwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
      title: 'Rural Development Program',
      date: 'Oct 2024'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMG1lbnRvcmluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3NDM4NTA3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Workshops',
      title: 'Career Guidance Mentoring',
      date: 'Oct 2024'
    },
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGl0ZXJhY3klMjBjb21wdXRlciUyMHRyYWluaW5nfGVufDF8fHx8MTc3NDM4NTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Workshops',
      title: 'Digital Literacy Training',
      date: 'Sep 2024'
    },
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1568385247073-ba0aa50b46cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc21pbGluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDM4NTA3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Education',
      title: 'Happy Children Learning',
      date: 'Sep 2024'
    },
    {
      id: 17,
      image: 'https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGFjdGl2aXR5JTIwdGVhbXdvcmslMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NDM4NTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Workshops',
      title: 'Group Activity Session',
      date: 'Aug 2024'
    },
    {
      id: 18,
      image: 'https://images.unsplash.com/photo-1773227057385-670ca05191da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZyUyMGhhbmRzfGVufDF8fHx8MTc3NDM4NTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
      title: 'Community Service Day',
      date: 'Aug 2024'
    },
    {
      id: 19,
      image: 'https://images.unsplash.com/photo-1773314963888-6ecec50555a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbiUyMGF3YXJkfGVufDF8fHx8MTc3NDM4NTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
      title: 'Achievement Celebration',
      date: 'Jul 2024'
    },
    {
      id: 20,
      image: 'https://images.unsplash.com/photo-1608986596619-eb50cc56831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDM4NTA3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Education',
      title: 'Teaching & Learning Session',
      date: 'Jul 2024'
    },
    {
      id: 21,
      image: 'https://images.unsplash.com/photo-1768796371633-ba921e535c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2tpbGwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzQzODUwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Workshops',
      title: 'Skill Development Program',
      date: 'Jun 2024',
      isVideo: true,
      videoUrl: '#'
    },
    {
      id: 22,
      image: 'https://images.unsplash.com/photo-1769618096619-834a3f28b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NDMzOTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
      title: 'Annual Event Highlights',
      date: 'Jun 2024',
      isVideo: true,
      videoUrl: '#'
    },
    {
      id: 23,
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzc0Mzg1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Education',
      title: 'Student Success Stories',
      date: 'May 2024',
      isVideo: true,
      videoUrl: '#'
    },
    {
      id: 24,
      image: 'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzJTIwaGFuZGljcmFmdHxlbnwxfHx8fDE3NzQzODQ1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Women Empowerment',
      title: 'Women Empowerment Journey',
      date: 'May 2024',
      isVideo: true,
      videoUrl: '#'
    }
  ];

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      return selectedCategory === 'All' || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);
  const displayedItems = regularItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < regularItems.length;

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 12);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setVisibleItems(16);
  };

  const openLightbox = (index: number) => {
    const itemIndex = filteredItems.findIndex(item => !item.featured && item.id === displayedItems[index].id);
    setCurrentImageIndex(itemIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-[#111827] dark:text-white mb-3">
              📸 Moments & Impact
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              A glimpse of our work, activities, and community engagement.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max md:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0D1F1C]'
                      : 'bg-white dark:bg-[#112F2B] text-[#6B7280] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#1F4D47] hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          {featuredItems.length > 0 && selectedCategory === 'All' && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <Tag size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  Featured Moments
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {featuredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(filteredItems.indexOf(item))}
                    className="relative overflow-hidden rounded-xl group cursor-pointer"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-5 w-full">
                        <p className="text-xs text-white/80 mb-1 flex items-center gap-2">
                          <Calendar size={12} />
                          {item.date}
                        </p>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs bg-[#1E7A6E] text-white">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                {selectedCategory === 'All' ? 'All Moments' : selectedCategory}
              </h2>
              <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                ({filteredItems.length})
              </span>
            </div>

            {displayedItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
                  No images found in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {displayedItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => item.isVideo ? window.open(item.videoUrl, '_blank') : openLightbox(index)}
                    className="relative overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                          <Play size={24} className="text-[#1E7A6E] ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 w-full">
                        <p className="text-xs text-white/90 font-medium line-clamp-1">{item.title}</p>
                        <p className="text-xs text-white/70">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More */}
            {hasMoreItems && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-10 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
              Be part of these moments
            </h2>
            <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Join us in creating positive impact and memorable experiences in our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg font-medium transition-all duration-200"
              >
                Join as Volunteer
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
              >
                Support Us
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={32} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-3 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft size={40} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-3 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronRight size={40} className="text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={filteredItems[currentImageIndex]?.image}
              alt={filteredItems[currentImageIndex]?.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-5 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <div className="flex items-center justify-center gap-3 text-sm text-white/70">
                <span className="px-3 py-1 rounded-full bg-[#1E7A6E]">
                  {filteredItems[currentImageIndex]?.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {filteredItems[currentImageIndex]?.date}
                </span>
              </div>
              <p className="text-sm text-white/50 mt-3">
                {currentImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
