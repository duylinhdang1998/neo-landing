import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Navigation */}
      <nav className='container mx-auto px-4 py-6'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/placeholder.svg'
              alt='Logo'
              width={32}
              height={32}
              className='w-8 h-8'
            />
            <span className='text-xl font-semibold'>LinkNeo</span>
          </Link>
          <div className='hidden md:flex items-center space-x-8'>
            <Link href='/' className='text-gray-600 hover:text-gray-900'>
              Home
            </Link>
            <Link href='/about' className='text-gray-600 hover:text-gray-900'>
              About us
            </Link>
            <Link href='/linkneo' className='text-gray-600 hover:text-gray-900'>
              LinkNeo
            </Link>
            <Link href='/vision' className='text-gray-600 hover:text-gray-900'>
              Vision
            </Link>
            <Link href='/contact' className='text-gray-600 hover:text-gray-900'>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-12 md:py-24'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              Stream-to-Earn
              <br />
              Dual Trading of <span className='text-emerald-500'>
                NEO
              </span> & <span className='text-blue-600'>LINK</span>
            </h1>
            <p className='text-lg text-gray-600'>
              Link.Neo's "Stream-to-Earn" (S2E) model enables creators and users
              to earn, while dual trading of NEO and LINK enhances liquidity
              between Neo and Chainlink ecosystems.
            </p>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors'>
              Get started →
            </button>
          </div>
          <div className='relative'>
            <Image
              src='/placeholder.svg'
              alt='Trading Platform Interface'
              width={600}
              height={400}
              className='rounded-lg shadow-2xl'
            />
            <div className='absolute -top-8 -left-8 animate-bounce'>
              <Image src='/placeholder.svg' alt='Coin' width={64} height={64} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <div className='inline-block bg-blue-100 p-2 rounded-lg mb-4'>
            <span className='text-2xl'>T</span>
          </div>
          <h2 className='text-3xl font-bold'>Core Modules</h2>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Blockchain Development */}
          <div className='space-y-4'>
            <Image
              src='/placeholder.svg'
              alt='Blockchain Development'
              width={200}
              height={200}
              className='mx-auto'
            />
            <h3 className='text-xl font-semibold text-center'>
              Blockchain Development
            </h3>
            <p className='text-gray-600 text-center'>
              Using NEO's latest wallet watching content on Link.Neo-powered
              platforms, blockchain-based rewards in LINK tokens are unlocked.
            </p>
          </div>

          {/* Evolving NFTs */}
          <div className='space-y-4'>
            <Image
              src='/placeholder.svg'
              alt='Evolving NFTs'
              width={200}
              height={200}
              className='mx-auto'
            />
            <h3 className='text-xl font-semibold text-center'>Evolving NFTs</h3>
            <p className='text-gray-600 text-center'>
              Streaming certain media (e.g. albums, movies) unlocks dynamic NFTs
              that evolve based on viewer engagement.
            </p>
          </div>

          {/* Oracle-Triggered Rewards */}
          <div className='space-y-4'>
            <Image
              src='/placeholder.svg'
              alt='Oracle-Triggered Rewards'
              width={200}
              height={200}
              className='mx-auto'
            />
            <h3 className='text-xl font-semibold text-center'>
              Oracle-Triggered Rewards
            </h3>
            <p className='text-gray-600 text-center'>
              Chainlink oracles enable real-time tracking of streaming metrics
              and automatically distribute rewards fairly between users and
              creators.
            </p>
          </div>
        </div>
      </section>

      {/* NEO + LINK Markets */}
      <section className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold'>NEO + LINK Markets</h2>
          <p className='text-gray-600 mt-4'>
            A hybrid model of Link Neo is a dual trading model, which offers
            opportunities to trade and earn both NEO and LINK tokens for
            liquidity, governance, and yield.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Stream and Earn */}
          <div className='text-center space-y-4'>
            <Image
              src='/placeholder.svg'
              alt='Stream and Earn'
              width={160}
              height={160}
              className='mx-auto'
            />
            <h3 className='text-xl font-semibold'>
              Stream and Earn NEO/LINK Rewards
            </h3>
            <p className='text-gray-600'>
              Users receive rewards for dual-token pools, benefiting from yield
              farming fees and staking rewards in both tokens.
            </p>
          </div>

          {/* Staking & Dual Rewards */}
          <div className='text-center space-y-4'>
            <Image
              src='/placeholder.svg'
              alt='Staking & Dual Rewards'
              width={160}
              height={160}
              className='mx-auto'
            />
            <h3 className='text-xl font-semibold'>Staking & Dual Rewards</h3>
            <p className='text-gray-600'>
              Stake NEO in smart contracts to earn both GAS and Oracle node
              operations stake LINK for participation in the ecosystem and earn
              NEO.
            </p>
          </div>

          {/* Automated Yield */}
          <div className='text-center space-y-4'>
            <Image
              src='/placeholder.svg'
              alt='Automated Yield'
              width={160}
              height={160}
              className='mx-auto'
            />
            <h3 className='text-xl font-semibold'>
              Automated Yield from Streaming Rewards
            </h3>
            <p className='text-gray-600'>
              Users who hold their NEO/LINK balance benefit from automated yield
              farming while keeping their position in single-token pairs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
