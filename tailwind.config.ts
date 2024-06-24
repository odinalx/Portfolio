import { title } from 'process';
import { text } from 'stream/consumers';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        cursive: ['"Ginger"', 'normal'],
        title: ['"PP Neue Montreal Book"', 'normal'],
        japan: ['"Osaka Japan"', 'normal'],
        text: ['"Amstelvar Roman"', 'normal'],
      },
      colors: {
        lightgray: '#282828',
        secondary: '#E15E5E',
        primary: '#FFFFFF',
        background: '#111111',
      },
    },
  },
  plugins: [],
};
export default config;
