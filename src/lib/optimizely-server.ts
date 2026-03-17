import {
  createInstance,
  createPollingProjectConfigManager,
  Client
} from '@optimizely/optimizely-sdk'

let optimizelyClient: Client | null = null

export async function getOptimizelyServerClient(): Promise<Client> {
  if (optimizelyClient) return optimizelyClient

  const SDK_KEY = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY || ''

  if (!SDK_KEY) {
    console.warn('Optimizely SDK Key is missing. Variation decisions will fallback to control.')
    // Return a dummy client or handle as needed. For now, we'll try to create it anyway
    // which will lead to a default/no-op behavior if SDK_KEY is empty.
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
  } catch (e) {
    console.warn('Optimizely client took too long to initialize or failed, continuing with default config.', e)
  }

  return optimizelyClient
}
