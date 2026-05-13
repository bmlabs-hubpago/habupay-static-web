
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#CDDC00',
          50: '#F8FBE6',
          100: '#F1F7CC',
          200: '#E8F299',
          300: '#DFED66',
          400: '#D6E833',
          500: '#CDDC00',
          600: '#A4B000',
          700: '#7B8400',
          800: '#525800',
          900: '#292C00',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
}
