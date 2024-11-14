import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className='container mx-auto max-w-6xl'>
      <div className='divider-gradient'></div>
      <div className='py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-3 px-4 xl:px-0'>
        <Image src={'/img/logo.png'} width={128} height={40} alt='logo' />
        <span className='text-neutral-5 text-xs font-normal'>
          Copyright © 2024 LinkNeo. All rights reserved
        </span>
        <div className='flex items-center space-x-4'>
          <Image src={'/img/fb.png'} width={23} height={23} alt='social-icon' />
          <Image src={'/img/x.png'} width={23} height={23} alt='social-icon' />
          <Image
            src={'/img/insta.png'}
            width={23}
            height={23}
            alt='social-icon'
          />
          <Image
            src={'/img/linked.png'}
            width={23}
            height={23}
            alt='social-icon'
          />
          <Image
            src={'/img/tele.png'}
            width={23}
            height={23}
            alt='social-icon'
          />
        </div>
      </div>
    </footer>
  );
}
