import Image from 'next/image';
import React from 'react';

interface Props {
  img: string;
  label?: string;
  description?: string;
}
export default function MarketItem({ img, label, description }: Props) {
  return (
    <div
      className='col-span-2 lg:col-span-1'
      data-aos='fade-up-right'
      data-aos-duration='1000'
    >
      <div className='flex flex-col gap-y-4'>
        <div className='flex items-center justify-center'>
          <Image src={img} alt={label ?? ''} width={360} height={360} />
        </div>
        <span className='text-[20px] text-center text-neutral-8 font-semibold dark:text-white'>
          {label}
        </span>
        <span className='text-neutral-8 text-center dark:text-neutral-2'>
          {description}
        </span>
      </div>
    </div>
  );
}
