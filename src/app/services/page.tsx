import { Container } from '../../components/Container'

const services = [
    {
        title: 'A/B Testing',
        description: 'Running experiments to determine the best performing features and designs for your users.',
        icon: '📊'
    },
    {
        title: 'Feature Flagging',
        description: 'Safely roll out new features to specific user segments before a full release.',
        icon: '🚩'
    },
    {
        title: 'Personalization',
        description: 'Deliver unique experiences to different users based on their behavior and preferences.',
        icon: '✨'
    },
    {
        title: 'Real-time Analytics',
        description: 'Monitor experiment performance in real-time with comprehensive data visualization.',
        icon: '📈'
    }
]

export default function ServicesPage() {
    return (
        <main className="pt-24 pb-16">
            <Container>
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
                        Our Services
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                        We provide a comprehensive suite of experimentation tools and services designed to help you optimize your digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service) => (
                        <div key={service.title} className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    )
}
