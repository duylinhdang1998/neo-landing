'use client';
import CoreModules from '@/components/CoreModules/CoreModules';
import SectionConverted from '@/components/SectionConverted/SectionConverted';
// import SectionHero from '@/components/SectionHero/SectionHero';
import SectionMarket from '@/components/SectionMarket/SectionMarket';
// import SectionTimeLine from '@/components/Timeline/SectionTimeline';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cx from 'classnames';

const SectionHero = dynamic(
  () => import('@/components/SectionHero/SectionHero'),
  { ssr: false }
);
const SectionTimeLine = dynamic(
  () => import('@/components/Timeline/SectionTimeline'),
  { ssr: false }
);

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='min-h-screen relative'>
      <SectionHero />
      <CoreModules />
      <SectionMarket />
      <SectionTimeLine />
      <SectionConverted />
      <button
        className={cx(
          'w-10 h-10 flex justify-center items-center rounded-full border border-neutral-6 dark:border-neutral-2 text-neutral-7 dark:text-white bottom-[20px] right-[20px] fixed transition-all duration-300',
          {
            'opacity-0 scale-0': !showButton,
            'opacity-1 scale-1': showButton,
          }
        )}
        onClick={backToTop}
      >
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          className='w-4 h-4'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'
          ></path>
        </svg>
      </button>
    </div>
  );
}
