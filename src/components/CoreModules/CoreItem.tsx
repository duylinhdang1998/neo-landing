import Image from 'next/image';
import React from 'react';
import cx from 'classnames';

interface Props {
  index: number;
  label?: string;
  img: string;
  description?: string;
}
export default function CoreItem({ index, label, description, img }: Props) {
  const bgGradientClass =
    index === 0 ? 'bg-gradient-secondary' : 'bg-gradient-thirdary';
  return (
    <div
      className='grid grid-cols-2 gap-[64px]'
      data-aos={index === 0 ? 'fade-left' : 'fade-right'}
      data-aos-duration='1500'
    >
      <div className='col-span-2 lg:col-span-1 flex flex-col gap-y-4 justify-center'>
        <div className='flex items-center justify-center gap-x-5'>
          <div className={`${bgGradientClass} w-[42px] h-[2px]`} />
          <span
            className={`text-base lg:text-[28px] text-center lg:text-left font-semibold text-gradient-${index} leading-normal`}
          >
            {label}
          </span>
          <div className={`${bgGradientClass} w-[42px] h-[2px]`} />
        </div>
        <div className='text-neutral-6 dark:text-neutral-2 text-sm lg:text-base text-center lg:text-left'>
          {description}
        </div>
      </div>
      <div
        className={cx(
          'col-span-2 lg:col-span-1 flex justify-center items-center lg:justify-start lg:items-start',
          {
            'lg:-order-1': index % 2 !== 0,
          }
        )}
      >
        <Image
          src={img}
          alt={index?.toString() ?? ''}
          width={470}
          height={480}
        />
      </div>
    </div>
  );
}
