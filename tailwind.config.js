/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)'],
        header: ['var(--font-archivo_black)'],
      },
      colors: {
        primary: {
          light: '#287ACE',
          DEFAULT: '#2065AC',
          dark: '#455468',
        },
        secondary: {
          light: '#287ACE',
          DEFAULT: '#70B52D',
          dark: '#61A520',
        },
        gray: {
          light: ' #D9D9D9',
          DEFAULT: '#EAEAEA',
          dark: '#404443',
        },
        title: '#111111',
        paragraph: '#404443',
      },
      spacing: {
        25: '100px',
      },
    },
    screens: {
      xs: '360px',
      // => @media (min-width: 360px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1400px',
      // => @media (min-width: 1400px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'max-2xl': { max: '1535px' },

      'max-1xl': '1399px',

      'max-xl': { max: '1279px' },

      'max-lg': { max: '1023px' },

      'max-md': { max: '767px' },

      'max-sm': { max: '639px' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
