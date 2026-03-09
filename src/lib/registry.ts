import StandardPage, { StandardPageContentType } from '@/components/cms/StandardPage'
import ArticlePage, { ArticlePageContentType } from '@/components/cms/ArticlePage'
import BlogListPage, { BlogListPageContentType } from '@/components/cms/BlogListPage'
import FlexiblePage, { FlexiblePageContentType } from '@/components/cms/FlexiblePage'
import LandingPage, { LandingPageContentType } from '@/components/cms/LandingPage'
import RichTextBlock, { RichTextBlockContentType } from '@/components/cms/RichTextBlock'
import HeroBanner, { HeroBannerContentType } from '@/components/cms/HeroBanner'
import { initContentTypeRegistry, BlankSectionContentType, BlankExperienceContentType } from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';
import BlankSection from '@/components/cms/BlankSection'

export function registerComponents() {
  initContentTypeRegistry([StandardPageContentType, ArticlePageContentType, BlogListPageContentType, FlexiblePageContentType, LandingPageContentType, BlankSectionContentType, RichTextBlockContentType, BlankExperienceContentType, HeroBannerContentType]);
  initReactComponentRegistry({
    resolver: {
      StandardPage,
      ArticlePage,
      BlogListPage,
      FlexiblePage,
      LandingPage,
      BlankSection,
      RichTextBlock,
      HeroBanner
    },
  });
}
