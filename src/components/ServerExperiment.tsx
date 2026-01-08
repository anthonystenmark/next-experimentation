import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { getOptimizelyServerClient } from '../lib/optimizely-server'

interface ServerExperimentProps {
    experimentKey: string
    variations: {
        [key: string]: ReactNode
    }
}

export async function ServerExperiment({ experimentKey, variations }: ServerExperimentProps) {
    // 1. Get the Optimizely Client
    const optimizely = await getOptimizelyServerClient()

    // 2. Resolve the User ID (e.g., from a cookie or session)
    const cookieStore = await cookies()
    const userId = cookieStore.get('optimizely_visitor_id')?.value || 'anonymous_user'

    // 3. Make the decision
    const variation = optimizely.activate(experimentKey, userId) || 'control'

    // 4. Return the matching piece of UI
    return variations[variation] || variations['control'] || null
}
