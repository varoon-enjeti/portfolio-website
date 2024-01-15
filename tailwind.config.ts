import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica']
    },
    extend: {
      colors: {
        'red': '#EB5353',
        'yellow': '#F9D923',
        'green': '#36AE7C',
        'blue': '#187498',
        'darkgrey': '#2C2C2C',
        'lightgrey': '#B3B3B3',
      },
      screens: {
        'nb': { 'raw': '(min-height: 771px) and (min-width: 768px)' },
      }
    },
  },
  plugins: [],
}
export default config
