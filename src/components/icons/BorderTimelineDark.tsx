/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { HTMLAttributes, forwardRef } from 'react';

export const BorderTimelineLeftDark = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  return (
    <span {...props} ref={ref}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 303 280'
        fill='none'
      >
        <path
          d='M0 3.247h276c13.255 0 24 10.745 24 24v225c0 13.254-10.745 24-24 24H0'
          stroke='url(#paint0_radial_285_1307)'
          strokeWidth={6}
        />
        <defs>
          <radialGradient
            id='paint0_radial_285_1307'
            cx={0}
            cy={0}
            r={1}
            gradientUnits='userSpaceOnUse'
            gradientTransform='rotate(24.038 -246.644 473.361) scale(648.443 810.375)'
          >
            <stop stopColor='#00C3FD' />
            <stop offset={0.381991} stopColor='#0194FE' />
            <stop offset={1} stopColor='#0194FE' />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
});

BorderTimelineLeftDark.displayName = 'BorderTimelineLeftDark';

export const BorderTimelineRightDark = forwardRef<
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
          d='M303 284.549a3 3 0 110 6v-6zm0-278H27v-6h276v6zm-297 21v236H0v-236h6zm21 257h276v6H27v-6zm-21-21c0 11.598 9.402 21 21 21v6c-14.912 0-27-12.088-27-27h6zm21-257c-11.598 0-21 9.402-21 21H0c0-14.912 12.088-27 27-27v6z'
          fill='url(#paint0_radial_285_1366)'
        />
        <defs>
          <radialGradient
            id='paint0_radial_285_1366'
            cx={0}
            cy={0}
            r={1}
            gradientUnits='userSpaceOnUse'
            gradientTransform='matrix(-592.20685 274.78021 -352.42914 -759.55598 131.571 147.393)'
          >
            <stop stopColor='#00C3FD' />
            <stop offset={0.381991} stopColor='#0194FE' />
            <stop offset={1} stopColor='#0194FE' />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
});

BorderTimelineRightDark.displayName = 'BorderTimelineRightDark';
