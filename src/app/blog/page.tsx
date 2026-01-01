import { Container } from '../../components/Container'

const posts = [
    {
        title: 'Mastering Next.js Route Handlers',
        excerpt: 'Learn how to build powerful API routes with the latest Next.js features.',
        date: 'Dec 28, 2025',
        category: 'Development'
    },
    {
        title: 'The Psychology of A/B Testing',
        excerpt: 'Explaining why small changes can lead to big differences in user behavior.',
        date: 'Dec 15, 2025',
        category: 'Experimentation'
    },
    {
        title: 'Integrating Optimizely with Tailwind CSS',
        excerpt: 'A step-by-step guide to styling your experimentation variants.',
        date: 'Nov 30, 2025',
        category: 'Tutorial'
    }
]

export default function BlogPage() {
    return (
        <main className="pt-24 pb-16">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
                        Insights & Engineering
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Read the latest updates from our team on web development, experimentation, and digital strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.title} className="flex flex-col">
                            <div className="mb-4 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                                {post.category} • {post.date}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-indigo-600 transition-colors cursor-pointer leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                                {post.excerpt}
                            </p>
                            <div className="text-sm font-semibold text-gray-900 dark:text-white border-b-2 border-indigo-600 w-fit pb-1 cursor-pointer">
                                Read More
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </main>
    )
}
