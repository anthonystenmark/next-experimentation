import { contentType, ContentProps } from '@optimizely/cms-sdk';
import { getPreviewUtils } from '@optimizely/cms-sdk/react/server';
import { RichText } from '@optimizely/cms-sdk/react/richText';

export const RichTextBlockContentType = contentType({
  key: 'RichTextBlock',
  displayName: 'Rich Text Block',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  properties: {
    text: {
      type: 'richText',
    },
  },
});

type Props = {
  content: ContentProps<typeof RichTextBlockContentType>;
};

export default function RichTextBlock({ content }: Props) {
  const { pa } = getPreviewUtils(content);

  return (
    <div {...pa('text')} >
      <RichText content={content.text?.json} />
    </div>
  );
}