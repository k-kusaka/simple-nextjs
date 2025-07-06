import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accentBlue: '#3EA8FF',
        baseGray: '#3D3D3D',
        baseBlue: '#ECF5FF',
        baseWhite: '#FFFFFF',
      },
      spacing: {
        120: '480px',
        128: '512px',
        144: '576px',
        160: '640px',
        192: '768px',
        240: '960px',
        256: '1024px',
        320: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
