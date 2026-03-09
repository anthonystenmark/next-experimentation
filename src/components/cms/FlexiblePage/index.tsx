import { contentType, ContentProps } from '@optimizely/cms-sdk';
import {
  ComponentContainerProps,
  getPreviewUtils,
  OptimizelyComposition,
} from '@optimizely/cms-sdk/react/server';
import { Container } from '@/components/Container'

export const FlexiblePageContentType = contentType({
  key: 'FlexiblePage',
  displayName: 'Flexible Page',
  baseType: '_experience',
  properties: {
    Header: {
      type: 'string',
    }
  },
});

type Props = {
  content: ContentProps<typeof FlexiblePageContentType>;
};

function ComponentWrapper({ children, node }: ComponentContainerProps) {
  const { pa } = getPreviewUtils(node);
  return <div {...pa(node)}>{children}</div>;
}

export default function AboutExperience({ content }: Props) {
  const { pa } = getPreviewUtils(content);

  return (
    <main className="pt-24 pb-16 contentWrapper">
      <Container>
        <h1 {...pa('Header')} className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">{content?.Header}</h1>

        <div {...pa('composition')}>
          <OptimizelyComposition
            nodes={content.composition.nodes ?? []}
            ComponentWrapper={ComponentWrapper}
          />
        </div>
      </Container>

    </main >
  );
}