'use client';

import { blogPosts, categories, BlogPost } from '../data/blogData';
import { useState, useMemo } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Search,
  Filter,
  Calendar,
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
  Send
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';



export default function Blog() {
  const { t } = useThemeLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(9);

  


  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  const displayedPosts = regularPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < regularPosts.length;

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(9);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-[#111827] dark:text-white mb-3">
              📝 Insights & Stories
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
              Articles, updates, and insights from our programs and community.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="mb-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] dark:text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="👉 Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#112F2B] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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

          {/* Categories Section (Optional) */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Tag size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                Browse by Category
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.filter(c => c !== 'All').map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="px-4 py-2 rounded-full text-sm bg-[#F9FAFB] dark:bg-[#112F2B] text-[#111827] dark:text-white border border-[#E5E7EB] dark:border-[#1F4D47] hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5] transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Blog */}
          {featuredPost && selectedCategory === 'All' && !searchQuery && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                  Featured Article
                </h2>
              </div>
              <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl overflow-hidden bg-white dark:bg-[#112F2B] hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 text-[#1E7A6E] dark:text-[#4FD1C5]">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1">
                        <Calendar size={14} />
                        {featuredPost.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                      {featuredPost.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-3 transition-all duration-200"
                    >
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
              </span>
            </div>

            {displayedPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">
                  No articles found. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-xl overflow-hidden bg-white dark:bg-[#112F2B] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F9FAFB] dark:bg-[#0D1F1C] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47]">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#111827] dark:text-white line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-2">
                        {post.description}
                      </p>
                      <a
                        href={`/resources/blog/${featuredPost?.id}`}
                        className="inline-flex items-center gap-2 text-sm text-[#1E7A6E] dark:text-[#4FD1C5] font-medium hover:gap-3 transition-all duration-200"
                      >
                        Read More <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Load More */}
          {hasMorePosts && (
            <div className="flex justify-center mb-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-white dark:bg-[#112F2B] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
              >
                Load More Articles
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-10 text-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <h2 className="text-2xl font-semibold text-[#111827] dark:text-white mb-3">
              Want to contribute an article?
            </h2>
            <p className="text-base text-[#6B7280] dark:text-[#9CA3AF] mb-6 max-w-2xl mx-auto">
              Share your insights, stories, and experiences with our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg font-medium transition-all duration-200">
                <Send size={18} />
                Submit Blog
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg font-medium transition-all duration-200"
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
