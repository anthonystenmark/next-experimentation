import {
    createInstance,
    createPollingProjectConfigManager,
} from '@optimizely/optimizely-sdk'

let optimizelyClient: any = null

export async function getOptimizelyServerClient() {
    if (optimizelyClient) return optimizelyClient

    const SDK_KEY = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY || ''

    if (!SDK_KEY) {
        console.warn('Optimizely SDK Key is missing. Variation decisions will fallback to control.')
    }

    // In Optimizely SDK v6, we use a separate config manager to handle the SDK key and polling
    const configManager = createPollingProjectConfigManager({
        sdkKey: SDK_KEY,
        autoUpdate: true,
        updateInterval: 1000 * 60 * 5, // 5 minutes
    })

    optimizelyClient = createInstance({
        projectConfigManager: configManager,
    })

    // Wait for the client to be ready with a timeout to prevent pre-render hangs
    try {
        await optimizelyClient.onReady({ timeout: 2000 })
    } catch {
        console.warn('Optimizely client took too long to initialize, continuing with default config.')
    }

    return optimizelyClient
}
