import { contentType, ContentProps } from '@optimizely/cms-sdk';
import {
  ComponentContainerProps,
  getPreviewUtils,
  OptimizelyComposition,
  OptimizelyComponent
} from '@optimizely/cms-sdk/react/server';
import { Container } from '@/components/Container'

export const LandingPageContentType = contentType({
  key: 'LandingPage',
  displayName: 'Landing Page',
  baseType: '_experience',
  properties: {},
});

type Props = {
  content: ContentProps<typeof LandingPageContentType>;
};

function ComponentWrapper({ children, node }: ComponentContainerProps) {
  const { pa } = getPreviewUtils(node);
  return <div {...pa(node)}>{children}</div>;
}

export default function LandingPage({ content }: Props) {
  const { pa } = getPreviewUtils(content);

  return (
    <main className="pt-24 pb-16 contentWrapper">
      <div {...pa('Composition')}>
        <OptimizelyComposition
          nodes={content.composition.nodes ?? []}
          ComponentWrapper={ComponentWrapper}
        />
      </div>
    </main >
  );
}