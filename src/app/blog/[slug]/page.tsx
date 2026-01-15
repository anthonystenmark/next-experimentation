import { Container } from '@/components/Container'
import { fetchContent } from '@/lib/optimizely-graph'
import { notFound } from 'next/navigation'

interface BlogPost {
    Heading: string
    MainBody: {
        html: string
    }
    Image: {
        url: {
            default: string
        }
    }
}

interface BlogResponse {
    ArticlePage: {
        item: BlogPost
    }
}

async function getBlogPost(slug: string) {
    const data = await fetchContent<BlogResponse>(`
        query GetBlogPostsbySlug($slug: String!) {
            ArticlePage(where: { _metadata: { url: { hierarchical: { eq: $slug } } } }) {
                item {
                    Heading
                    MainBody {
                        html
                    }
                    Image {
                        url {
                            default
                        }
                    }
                }
            }
        }
    `, { slug: `/blog/${slug}/` })

    const post = {
        title: data.ArticlePage.item.Heading,
        body: data.ArticlePage.item.MainBody.html,
        image: data.ArticlePage.item.Image.url.default
    };
    return post || []
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getBlogPost(slug)

    if (!post) {
        notFound()
    }

    return (
        <main className="pt-24 pb-16">
            <Container>
                <article className="max-w-3xl mx-auto">
                    <div className="mb-8 text-center">
                        <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-12">
                            {post.title}
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: post.body }} className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed" />
                    </div>
                </article>
            </Container>
        </main>
    )
}
