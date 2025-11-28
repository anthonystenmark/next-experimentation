import Image from 'next/image'
import styles from './page.module.css'
import HeroBannerText from './components/HeroBanners/HeroBannerText'
import { FeatureGrid } from './components/FeatureGrid'

export default function Home () {
  return (
    <main className={styles.main}>
      <HeroBannerText />
      <FeatureGrid />
    </main>
  )
}
