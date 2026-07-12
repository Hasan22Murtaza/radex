import { useLocation, Redirect } from '../router';
import RatgeberHub from './RatgeberHub';
import RatgeberArticlePage from './RatgeberArticlePage';
import RatgeberCategoryPage from './RatgeberCategoryPage';
import { getArticleBySlug, getCategoryById } from '../data/ratgeber';

export default function RatgeberRouter() {
  const { pathname } = useLocation();

  const categoryMatch = pathname.match(/^\/ratgeber\/kategorie\/([^/]+)$/);
  if (categoryMatch) {
    if (getCategoryById(categoryMatch[1])) {
      return <RatgeberCategoryPage categoryId={categoryMatch[1]} />;
    }
    return <Redirect to="/ratgeber" />;
  }

  const articleMatch = pathname.match(/^\/ratgeber\/([^/]+)$/);
  if (articleMatch) {
    if (getArticleBySlug(articleMatch[1])) {
      return <RatgeberArticlePage slug={articleMatch[1]} />;
    }
    return <Redirect to="/ratgeber" />;
  }

  return <RatgeberHub />;
}
