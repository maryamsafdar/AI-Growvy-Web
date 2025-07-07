import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
         signature: ['var(--font-pacifico)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
