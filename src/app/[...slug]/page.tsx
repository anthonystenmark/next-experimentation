import { client } from '@/lib/optimizely-cms-client';
import { OptimizelyComponent } from '@optimizely/cms-sdk/react/server';
import { getOptimizelyServerClient } from '@/lib/optimizely-server';
import { cookies } from 'next/headers';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const path = `/${slug.join('/')}/`;

  // 1. Get IDs and Optimizely FX client
  const cookieStore = await cookies();
  const userId = cookieStore.get('optimizely_visitor_id')?.value || 'anonymous_user';
  const optimizely = await getOptimizelyServerClient();

  // 2. Decide on a variation (example flag key 'cms_variation_test')
  // In a real scenario, this flag key could be dynamic or mapped from metadata
  const variation = optimizely.activate('cms_variation_test', userId) || 'control';
  console.log('variation = ' + variation);

  // 3. Fetch content from CMS Graph including the variation
  const content = await client.getContentByPath(path, {
    variation: variation !== 'control' ? { include: 'SOME', value: [variation] } : undefined
  });

  return <OptimizelyComponent content={content?.[0]} />
}