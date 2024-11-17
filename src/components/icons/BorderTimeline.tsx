/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import * as React from 'react';

import { HTMLAttributes, forwardRef } from 'react';

export const BorderTimelineLeft = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  return (
    <span {...props} ref={ref}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 303 280'
        fill='none'
        width='100%'
        height='100%'
      >
        <path
          d='M0 3.247h276c13.255 0 24 10.745 24 24v225c0 13.254-10.745 24-24 24H0'
          stroke='url(#paint0_radial_188_377)'
          strokeWidth={6}
        />
        <defs>
          <radialGradient
            id='paint0_radial_188_377'
            cx={0}
            cy={0}
            r={1}
            gradientUnits='userSpaceOnUse'
            gradientTransform='rotate(27.933 165.554 -671.426) scale(1198.51 1516.77)'
          >
            <stop stopColor='#00C3FD' />
            <stop offset={0.242346} stopColor='#0194FE' />
            <stop offset={0.789455} stopColor='#012B7F' />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
});

BorderTimelineLeft.displayName = 'BorderTimelineLeft';

export const BorderTimelineRight = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  return (
    <span {...props} ref={ref}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 306 291'
        fill='none'
      >
        <path
          d='M303 284.549C304.657 284.549 306 285.892 306 287.549C306 289.206 304.657 290.549 303 290.549V284.549ZM303 6.54883H27V0.548828H303V6.54883ZM6 27.5488V263.549H0V27.5488H6ZM27 284.549H303V290.549H27V284.549ZM6 263.549C6 275.147 15.402 284.549 27 284.549V290.549C12.0883 290.549 0 278.461 0 263.549H6ZM27 6.54883C15.402 6.54883 6 15.9508 6 27.5488H0C0 12.6371 12.0883 0.548828 27 0.548828V6.54883Z'
          fill='url(#paint0_radial_188_431)'
        />
        <defs>
          <radialGradient
            id='paint0_radial_188_431'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(598.238 -161.885) rotate(151.12) scale(1209.27 1563.84)'
          >
            <stop stopColor='#00C3FD' />
            <stop offset='0.242346' stopColor='#0194FE' />
            <stop offset='0.789455' stopColor='#012B7F' />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
});

BorderTimelineRight.displayName = 'BorderTimelineRight';
