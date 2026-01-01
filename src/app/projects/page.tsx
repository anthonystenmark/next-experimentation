import { Container } from '../../components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | Case Studies',
    description: 'Discover how we help our clients achieve their business goals through rigorous experimentation.'
}

const projects = [
    {
        name: 'E-commerce Optimization',
        client: 'GlobeTrade Inc.',
        description: 'Increased conversion rates by 15% through strategic A/B testing on checkout flows.',
        tags: ['Next.js', 'Optimizely', 'Analytics']
    },
    {
        name: 'SaaS Dashboard Refactor',
        client: 'DataFlow Systems',
        description: 'Implemented multi-variant testing for a new user dashboard layout.',
        tags: ['React', 'Feature Flags', 'Typeform']
    },
    {
        name: 'Mobile App Personalization',
        client: 'FitTrack Pro',
        description: 'Personalized user onboarding based on fitness goals and experience level.',
        tags: ['Mobile', 'Personalization', 'SDK']
    }
]

export default function ProjectsPage() {
    return (
        <main className="pt-24 pb-16">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
                        Case Studies & Projects
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Discover how we help our clients achieve their business goals through rigorous experimentation and modern web technologies.
                    </p>
                </div>

                <div className="space-y-12">
                    {projects.map((project) => (
                        <div key={project.name} className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-3xl items-start">
                            <div className="flex-1">
                                <div className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{project.client}</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-700 text-xs font-medium rounded-full border border-gray-100 dark:border-gray-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-64 aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center text-gray-400">
                                Project Image
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    )
}
