import { LogoIcon } from '../LogoIcon'
import styles from './herobanners.module.css'

export default function HeroBannerText () {
  return (
    <section
      className={`${styles.homeHero} bg-white dark:bg-gray-900 bg-cover bg-center lg:grid lg:h-screen lg:place-content-center relative overflow-hidden`}
    >
      <LogoIcon
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 w-[60vw] h-[60vw] max-w-4xl max-h-[80vh] z-0 text-grey-950"
        style={{ filter: 'blur(8px)' }}
        aria-hidden="true"
      />
      <div className='mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10'>
        <div className='mx-auto max-w-prose text-center'>
          <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white'>
            Understand user flow and
            <strong className='text-indigo-600'> increase </strong>
            conversions
          </h1>

          <p className='mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className='mt-4 flex justify-center gap-4 sm:mt-6'>
            <a
              className='inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700'
              href='#'
            >
              Get Started
            </a>

            <a
              className='inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white'
              href='#'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
