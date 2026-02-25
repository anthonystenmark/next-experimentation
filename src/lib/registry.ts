import StandardPage, { StandardPageContentType } from '@/components/cms/StandardPage'
import ArticlePage, { ArticlePageContentType } from '@/components/cms/ArticlePage'
import BlogListPage, { BlogListPageContentType } from '@/components/cms/BlogListPage'
import FlexiblePage, { FlexiblePageContentType } from '@/components/cms/FlexiblePage'
import RichTextBlock, { RichTextBlockContentType } from '@/components/cms/RichTextBlock'
import BlankSection from '@/components/cms/BlankSection'
import { initContentTypeRegistry, BlankSectionContentType } from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';

export function registerComponents() {
  initContentTypeRegistry([StandardPageContentType, ArticlePageContentType, BlogListPageContentType, FlexiblePageContentType, BlankSectionContentType, RichTextBlockContentType]);
  initReactComponentRegistry({
    resolver: {
      StandardPage,
      ArticlePage,
      BlogListPage,
      FlexiblePage,
      BlankSection,
      RichTextBlock
    },
  });
}
