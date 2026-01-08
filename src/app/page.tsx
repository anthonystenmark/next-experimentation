import HeroBannerText from '../components/HeroBanners/HeroBannerText'
import { FeatureGrid } from '../components/FeatureGrid'
import { LogoCloud } from '../components/LogoCloud'
import { Newsletter } from '../components/Newsletter'
import styles from './page.module.css'

import { ServerExperiment } from '../components/ServerExperiment'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBannerText />
      <FeatureGrid />
      <ServerExperiment
        experimentKey="home_hero_test"
        variations={{
          'control': null,
          'variant_a': <LogoCloud />
        }}
      />
      <Newsletter />
    </main>
  )
}
