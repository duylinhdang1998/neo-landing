"use client"
import CoreModules from '@/components/CoreModules/CoreModules';
import SectionConverted from '@/components/SectionConverted/SectionConverted';
// import SectionHero from '@/components/SectionHero/SectionHero';
import SectionMarket from '@/components/SectionMarket/SectionMarket';
import SectionTimeLine from '@/components/Timeline/SectionTimeline';
import dynamic from 'next/dynamic';

const SectionHero = dynamic(
  () => import('@/components/SectionHero/SectionHero'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className='min-h-screen'>
      <SectionHero />
      <CoreModules />
      <SectionMarket />
      <SectionTimeLine />
      <SectionConverted />
    </div>
  );
}
