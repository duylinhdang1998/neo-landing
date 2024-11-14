import CoreModules from '@/components/CoreModules/CoreModules';
import SectionConverted from '@/components/SectionConverted/SectionConverted';
import SectionHero from '@/components/SectionHero/SectionHero';
import SectionMarket from '@/components/SectionMarket/SectionMarket';
import SectionTimeLine from '@/components/Timeline/SectionTimeline';

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
