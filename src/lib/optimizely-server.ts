import {
    createInstance,
    createPollingProjectConfigManager,
} from '@optimizely/optimizely-sdk'

let optimizelyClient: any = null

export async function getOptimizelyServerClient() {
    if (optimizelyClient) return optimizelyClient

    const SDK_KEY = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY || ''

    // In Optimizely SDK v6, we use a separate config manager to handle the SDK key and polling
    const configManager = createPollingProjectConfigManager({
        sdkKey: SDK_KEY,
        autoUpdate: true,
        updateInterval: 1000 * 60 * 5, // 5 minutes
    })

    optimizelyClient = createInstance({
        projectConfigManager: configManager,
    })

    // Wait for the client to be ready
    await optimizelyClient.onReady()

    return optimizelyClient
}
