import { contentType, ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { Container } from '@/components/Container'
import { getPreviewUtils } from '@optimizely/cms-sdk/react/server';

export const ArticlePageContentType = contentType({
  key: 'ArticlePage',
  baseType: '_page',
  properties: {
    Heading: {
      type: 'string',
    },
    MetaDescription: {
      type: 'string',
    },
    MainBody: {
      type: 'richText',
    },
    Image: {
      type: 'contentReference',
    },
  },
});

type Props = {
  content: ContentProps<typeof ArticlePageContentType>;
};

export default function ArticlePage({ content }: Props) {
  const { pa, src } = getPreviewUtils(content);
  return (
    <main className="pt-24 pb-16">
      <Container>
        <article className="mb-8 mx-auto">
          <img {...pa('Image')} src={src(content.Image)} alt={"alt"} className="w-full h-64 object-cover mb-4" />
          <h1 {...pa('Heading')} className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-12">
            {content.Heading}
          </h1>
          <div {...pa('MainBody')} className={`text-xl text-gray-600 dark:text-gray-300`}>
            <RichText content={content.MainBody?.json} />
          </div>
        </article>
      </Container>
    </main>
  );
}