import { client } from '@/lib/optimizely-cms-client';
import { OptimizelyComponent } from '@optimizely/cms-sdk/react/server';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const content = await client.getContentByPath(`/${slug.join('/')}/`);

  return <OptimizelyComponent content={content?.[0]} />
}