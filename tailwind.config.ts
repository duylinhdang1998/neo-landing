import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Use the `class` strategy
  theme: {
    extend: {
      colors: {
        primary: '#0847F7',
        secondary: '#00E599',
        'neutral-0': '#fff',
        'neutral-1': '#FAFAFA',
        'neutral-2': '#F4F5F6',
        'neutral-3': '#E6E8EC',
        'neutral-4': '#B1B5C3',
        'neutral-5': '#777E90',
        'neutral-6': '#353945',
        'neutral-7': '#23262F',
        'neutral-8': '#141414',
        'bg-primary': '#000618',
        'blue-dark': '#160E33',
      },
      backgroundImage: {
        'gradient-primary':
          'radial-gradient(530.24% 219.84% at 57.14% 50.65%, #00C3FD 0%, #0194FE 38.2%, #0194FE 100%)',
        'gradient-secondary':
          'linear-gradient(315deg, #20B18D 12.53%, #66E2A9 89.89%)',
        'gradient-thirdary':
          'radial-gradient(986.43% 408.5% at -98.41% -58.25%, #00C3FD 0%, #0194FE 24.23%, #012B7F 78.95%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
