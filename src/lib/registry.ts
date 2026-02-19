import StandardPage, { StandardPageContentType } from '@/components/StandardPage'
import ArticlePage, { ArticlePageContentType } from '@/components/ArticlePage'
import BlogListPage, { BlogListPageContentType } from '@/components/BlogListPage'
import { initContentTypeRegistry } from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';

export function registerComponents() {
  initContentTypeRegistry([StandardPageContentType, ArticlePageContentType, BlogListPageContentType]);
  initReactComponentRegistry({
    resolver: {
      StandardPage,
      ArticlePage,
      BlogListPage,
    },
  });
}
