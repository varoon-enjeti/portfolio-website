import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': '#EB5353',
        'yellow': '#F9D923',
        'green': '#36AE7C',
        'blue': '#187498',
      },
    },
  },
  plugins: [],
}
export default config
