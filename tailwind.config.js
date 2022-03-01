module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFFFFF',
        dark: '#FAFAFA'
      },
      purple: {
        dark: '#2F3AB2',
        DEFAULT: '#3B49DF',
        light: '#3B49DF1A',
        lightest: '#E2E3F3'
      },
      black: {
        darkest: '#171717',
        dark: '#242424',
        DEFAULT: '#404040',
        light: '#575757',
        lightest: '#3D3D3D'
      },
      gray: {
        darkest: '#F6F6F6',
        dark: '#D6D6D7',
        DEFAULT: '#F5F5F5',
        light: '#E9E9E9'
      }
    },
    fontFamily: {
      body: ['Oswald', 'sans-serif'],
    },
    fontSize: {
      '2xs': '10px',
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px'
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: [],
}
