import { contentType, ContentProps } from '@optimizely/cms-sdk';
import { getPreviewUtils } from '@optimizely/cms-sdk/react/server';
import { LogoIcon } from '@/components/LogoIcon';
import styles from './herobanners.module.css';
import { RichText } from '@optimizely/cms-sdk/react/richText';

export const HeroBannerContentType = contentType({
  key: 'HeroBanner',
  displayName: 'Hero Banner',
  baseType: '_component',
  compositionBehaviors: ['elementEnabled'],
  properties: {
    heading: {
      type: 'richText',
    },
    body: {
      type: 'richText',
    },
    primaryButtonText: {
      type: 'string',
    },
    primaryButtonUrl: {
      type: 'string',
    },
    secondaryButtonText: {
      type: 'string',
    },
    secondaryButtonUrl: {
      type: 'string',
    },
  },
});

type Props = {
  content: ContentProps<typeof HeroBannerContentType>;
};

export default function HeroBanner({ content }: Props) {
  const { pa } = getPreviewUtils(content);

  return (
    <section
      className={`${styles.homeHero} bg-white dark:bg-gray-900 bg-cover bg-center`}
    >
      <LogoIcon
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[60vw] h-[60vw] max-w-4xl max-h-[80vh] z-0 text-grey-950"
        style={{ filter: 'blur(8px)' }}
        aria-hidden="true"
      />
      <div className='mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10'>
        <div className='mx-auto max-w-prose text-center'>
          <div className='text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white' {...pa('heading')}>
            <RichText content={content.heading?.json} />
          </div>

          <div className='mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200' {...pa('body')}>
            <RichText content={content.body?.json} />
          </div>

          <div className='mt-4 flex justify-center gap-4 sm:mt-6'>
            {content.primaryButtonText && (
              <a
                className='inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700'
                href={content.primaryButtonUrl ?? '#'}
                {...pa('primaryButtonText')}
              >
                {content.primaryButtonText}
              </a>
            )}

            {content.secondaryButtonText && (
              <a
                className='inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white'
                href={content.secondaryButtonUrl ?? '#'}
                {...pa('secondaryButtonText')}
              >
                {content.secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
