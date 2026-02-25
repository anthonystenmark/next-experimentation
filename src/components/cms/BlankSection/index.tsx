import { BlankSectionContentType, ContentProps } from '@optimizely/cms-sdk';
import {
  OptimizelyGridSection,
  StructureContainerProps,
  getPreviewUtils,
} from '@optimizely/cms-sdk/react/server';

type BlankSectionProps = {
  content: ContentProps<typeof BlankSectionContentType>;
};

function CustomRow({ children, node }: StructureContainerProps) {
  const { pa } = getPreviewUtils(node);
  return (
    <div className="custom-row" {...pa(node)}>
      {children}
    </div>
  );
}

function CustomColumn({ children, node }: StructureContainerProps) {
  const { pa } = getPreviewUtils(node);
  return (
    <div className="custom-column" {...pa(node)}>
      {children}
    </div>
  );
}

export default function BlankSection({ content }: BlankSectionProps) {
  const { pa } = getPreviewUtils(content);

  return (
    <section {...pa(content)}>
      <OptimizelyGridSection
        nodes={content.nodes}
        row={CustomRow}
        column={CustomColumn}
      />
    </section>
  );
}