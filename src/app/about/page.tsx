import { Container } from '../../components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Opti Next Experimentation',
    description: 'Learn about our mission to empower teams through real-time experimentation.'
}

export default function AboutPage() {
    return (
        <main className="pt-24 pb-16">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
                        About Us
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-6">
                        We are dedicated to building high-performance web applications that provide real-time experimentation and feature management capabilities.
                    </p>
                    <div className="prose dark:prose-invert max-w-none">
                        <p>
                            Our mission is to empower developers and product teams with the tools they need to iterate quickly and make data-driven decisions. By integrating Optimizely with Next.js, we provide a seamless experience for both developers and end-users.
                        </p>
                        <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Our Values</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Innovation in experimentation</li>
                            <li>Performance-first development</li>
                            <li>User-centric design</li>
                            <li>Transparent and reliable data</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </main>
    )
}
