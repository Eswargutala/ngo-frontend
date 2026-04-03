import { ArrowLeft, Clock, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';      
import { blogPosts } from '../data/blogData';

export function BlogArticle({ id }: { id: string }) {
  const post = blogPosts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="bg-gray-50 dark:bg-[#0B1F1D] min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <a href="/resources/blog" className="inline-flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] hover:gap-3 transition-all duration-200 font-medium">
            <ArrowLeft size={16} /> Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-[#0B1F1D] min-h-screen py-12">
      <div className="max-w-[800px] mx-auto px-6">
        <a href="/resources/blog" className="inline-flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] hover:gap-3 transition-all duration-200 mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Blog
        </a>

        <article className="bg-white dark:bg-[#112F2B] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="h-64 sm:h-96 w-full">
            <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 text-[#1E7A6E] dark:text-[#4FD1C5] px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User size={16} />
                <span>Foundation Team</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-['Poppins']">
              {post.title}
            </h1>

            <div className="prose dark:prose-invert prose-emerald max-w-none text-gray-600 dark:text-gray-300">
              <p className="text-lg mb-6 leading-relaxed">
                {post.description}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">Our Interventions</h2>
              <p className="mb-6 leading-relaxed">
                {post.content}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">How You Can Help</h2>
              <p className="mb-6 leading-relaxed">
                Volunteering with the foundation gives you a direct avenue to participate in positive social change. Whether through donating technical skills, offering guidance in our mentorship programs, or supporting our environmental campaigns, there's a space for everyone to make a difference.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
