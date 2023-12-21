import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-children-opacity': '#D8E7FF4D',
        'blue-children': '#78ABFE',
        'blue-children-dark': '#0D7AF9',
        'pink-children': '#FFB2B2',
        'pink-children-dark': '#FF5252',
        'zinc-children': 'rgba(0, 0, 0, 0.62)',
      },
    },
  },
  plugins: [],
};
export default config;
