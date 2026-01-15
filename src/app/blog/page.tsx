
import { Metadata } from 'next'
import { fetchContent } from '@/lib/optimizely-graph'
import Link from 'next/link'
import { Container } from '../../components/Container'

export const metadata: Metadata = {
    title: 'Blog | Insights & Engineering',
    description: 'Read the latest updates on web development, experimentation, and digital strategy.'
}

interface BlogPost {
    _metadata: {
        displayName: string
        url: {
            default: string
        }
        published: string
    }
    MetaDescription: string
    Image: {
        url: {
            default: string
        }
    }
}

interface BlogResponse {
    ArticlePage: {
        items: BlogPost[]
    }
}

async function getBlogPosts() {
    const data = await fetchContent<BlogResponse>(`
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
    `)
    const items = data?.ArticlePage?.items || [];
    const posts = items.map((item) => ({
        title: item._metadata.displayName,
        summary: item.MetaDescription,
        published: item._metadata.published,
        url: item._metadata.url.default,
        image: item.Image.url.default
    }))
    return posts || []
}

function formatDate(dateString: string) {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

export default async function BlogPage() {
    const posts = await getBlogPosts()

    return (
        <main className="pt-24 pb-16">
            <Container>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
                        Insights & Engineering
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Read the latest updates from our team on web development, experimentation, and digital strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => {
                        const slug = post.url || '#';
                        return (
                            <Link href={`${slug}`} key={post.url} className="group flex flex-col">
                                <article className="flex flex-col h-full">
                                    <div className="mb-4 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                                        {formatDate(post.published)}
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
    )
}
