import HeroBannerText from './components/HeroBanners/HeroBannerText'
import { FeatureGrid } from './components/FeatureGrid'
import { LogoCloud } from './components/LogoCloud'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <HeroBannerText />
      <FeatureGrid />
      <LogoCloud />
    </main>
  )
}
