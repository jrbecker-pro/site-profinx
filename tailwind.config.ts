import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'profinx-primary': '#004aac',
        'profinx-secondary': '#079ef7',
        'profinx-tertiary': '#137dc5',
      },
    },
  },
  plugins: [],
} satisfies Config
