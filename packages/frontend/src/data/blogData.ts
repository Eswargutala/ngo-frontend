export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  content: string;
  featured?: boolean;
}

export const categories = ['All', 'Education', 'Career', 'Health', 'Environment', 'Women Empowerment'];

export 

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How Education is Changing Rural Lives',
      category: 'Education',
      date: 'Jan 2025',
      image: 'https://images.unsplash.com/photo-1709290749293-c6152a187b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwaW5kaWElMjBydXJhbHxlbnwxfHx8fDE3NzQzODQzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A look at how access to learning is transforming student confidence and opportunities.',
      content: 'Full blog content here...',
      featured: true
    },
    {
      id: 2,
      title: 'Why Career Guidance Matters Early',
      category: 'Career',
      date: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBndWlkYW5jZSUyMGNvdW5zZWxpbmclMjBtZW50b3JzaGlwfGVufDF8fHx8MTc3NDM4NDMyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Understanding how early guidance helps students make better life decisions.',
      content: 'Full blog content here...'
    },
    {
      id: 3,
      title: 'Small Steps Towards a Greener Future',
      category: 'Environment',
      date: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1641941672934-9e33a79ec482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5JTIwZ3JlZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzc0MzQzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'How awareness and action can create a sustainable environment.',
      content: 'Full blog content here...'
    },
    {
      id: 4,
      title: 'Building Health Awareness in Communities',
      category: 'Health',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzcyUyMGh5Z2llbmUlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzc0Mzg0MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Promoting hygiene and wellness through education and outreach.',
      content: 'Full blog content here...'
    },
    {
      id: 5,
      title: 'Women Leading Change in Villages',
      category: 'Women Empowerment',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc0MjU1NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Stories of women who are creating opportunities and inspiring others.',
      content: 'Full blog content here...'
    },
    {
      id: 6,
      title: 'The Impact of Community Development Programs',
      category: 'Education',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1634936564306-8a905be6429a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHNvY2lhbCUyMHdvcmt8ZW58MXx8fHwxNzc0Mzg0MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'How grassroots initiatives are bringing positive change to local communities.',
      content: 'Full blog content here...'
    },
    {
      id: 7,
      title: 'Digital Literacy: Bridging the Gap',
      category: 'Career',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGl0ZXJhY3klMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc0Mzg0MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Teaching essential digital skills to prepare students for the modern world.',
      content: 'Full blog content here...'
    },
    {
      id: 8,
      title: 'The Power of Volunteering',
      category: 'Education',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nJTIwaGFuZHMlMjBjaGFyaXR5fGVufDF8fHx8MTc3NDM4NDMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'How volunteers are making a difference in our programs and communities.',
      content: 'Full blog content here...'
    },
    {
      id: 9,
      title: 'Interactive Workshops: Learning by Doing',
      category: 'Career',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1733758283615-224f76ab0792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2VtaW5hciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzQzODQzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hands-on training sessions that build practical skills and confidence.',
      content: 'Full blog content here...'
    },
    {
      id: 10,
      title: 'Mental Health Matters: Breaking the Silence',
      category: 'Health',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzcyUyMGh5Z2llbmUlMjBhd2FyZW5lc3N8ZW58MXx8fHwxNzc0Mzg0MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Addressing mental health awareness and support in our communities.',
      content: 'Full blog content here...'
    },
    {
      id: 11,
      title: 'Sustainable Practices for Schools',
      category: 'Environment',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1641941672934-9e33a79ec482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5JTIwZ3JlZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzc0MzQzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Simple eco-friendly practices that schools can adopt for a better tomorrow.',
      content: 'Full blog content here...'
    },
    {
      id: 12,
      title: 'Empowering Women Through Skills Training',
      category: 'Women Empowerment',
      date: 'Jul 2024',
      image: 'https://images.unsplash.com/photo-1637743408313-c9d5e869d9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc2tpbGxzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc0MjU1NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'How vocational training is helping women achieve financial independence.',
      content: 'Full blog content here...'
    }
  ];