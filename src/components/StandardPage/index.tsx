import { contentType, ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { Container } from '../../components/Container'

export const StandardPageContentType = contentType({
  key: 'StandardPage',
  baseType: '_page',
  properties: {
    MainBody: {
      type: 'richText',
    },
  },
});

type Props = {
  content: ContentProps<typeof StandardPageContentType>;
};

export default function StandardPage({ content }: Props) {
  return (
    <main className="pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-gray-900 dark:text-white">
          <RichText content={content.MainBody?.json} />
        </div>
      </Container>
    </main>
  );
}