import HeroBannerText from '../components/HeroBanners/HeroBannerText'
import { FeatureGrid } from '../components/FeatureGrid'
import { Newsletter } from '../components/Newsletter'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBannerText />
      <FeatureGrid />
      <Newsletter />
    </main>
  )
}
