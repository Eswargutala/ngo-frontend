import { BlogArticle } from '../../../../views/BlogArticle';

export default function BlogArticlePage({ params }: { params: { id: string } }) {
  return <BlogArticle id={params.id} />;
}
