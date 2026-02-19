import { contentType, ContentProps } from '@optimizely/cms-sdk';
import { Container } from '@/components/Container'
import { getPreviewUtils } from '@optimizely/cms-sdk/react/server';
import { client } from '@/lib/optimizely-cms-client';
import { ArticlePageContentType } from '../ArticlePage';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import Link from 'next/link';

export const BlogListPageContentType = contentType({
  key: 'BlogListPage',
  baseType: '_page',
  properties: {
    Heading: {
      type: 'string',
    },
    Description: {
      type: 'richText',
    },
  },
});

type Props = {
  content: ContentProps<typeof BlogListPageContentType>;
};

type ArticlePageData = ContentProps<typeof ArticlePageContentType>;

interface BlogPostItem {
  _metadata: {
    displayName: string
    url: {
      default: string
    }
    published: string
  }
  MetaDescription: ArticlePageData['MetaDescription']
  Image: {
    url: {
      default: string
    }
  }
}

interface BlogResponse {
  ArticlePage: {
    items: BlogPostItem[]
  }
}

async function getBlogPosts() {
  // Using client.request is currently the most efficient way to fetch a sorted list of specific content types
  const data = await client.request(`
        query GetBlogPosts {
            ArticlePage(orderBy: { _metadata: { published: DESC } }) {
                items {
                    _metadata {
                        displayName
                        url {
                            default
                        }
                        published
                    }
                    MetaDescription
                    Image {
                        url {
                            default
                        }
                    }
                }
            }
        }
    `, {}) as BlogResponse

  const items = data?.ArticlePage?.items || [];

  return items.map((item) => ({
    title: item._metadata.displayName,
    summary: item.MetaDescription,
    published: item._metadata.published,
    url: item._metadata.url.default,
    image: item.Image?.url?.default || undefined
  }))

}

export default async function BlogListPage({ content }: Props) {
  const { pa } = getPreviewUtils(content);
  const posts = await getBlogPosts();

  return (
    <main className="pt-24 pb-16">
      <Container>
        <div className="mb-16">
          <h1 {...pa('Heading')} className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
            {content.Heading || 'Insights & Engineering'}
          </h1>
          <div {...pa('Description')} className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            <RichText content={content.Description?.json} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const slug = post.url || '#';
            return (
              <Link href={`${slug}`} key={post.url} className="group flex flex-col">
                <article className="flex flex-col h-full">
                  <div className="mb-4 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    {post.published}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors cursor-pointer leading-snug">
                    {post.title}
                  </h3>
                  <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {post.summary}
                  </p>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white border-b-2 border-indigo-600 w-fit pb-1 group-hover:border-indigo-500">
                    Read More
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </Container>
    </main>
  );
}