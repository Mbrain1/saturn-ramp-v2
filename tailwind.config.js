module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        backgroundImage : {
          'gradient-gray' : "linear-gradient(rgba(255, 255, 255, 0.31), rgba(255, 255, 255, 0.4))"
        },
       colors: {
      'gray': {
        50: '#F6F7FB',
        100: '#E5E8FF',
        200: '#333333',
        300: '#9598a4',
        400: '#EEF0FF',
        500: '#00031A',
        600: '#F9FEFF',
        700: '#828282',
        800: '#E0E0E0',
        900: '#3a4054',
        20: '#f2f2f2',
        30: '#828282'
      },
      'blue': {
        100: '#ADEBF3',
        200: '#CCF0F4',
        300: '#99A3FF',
        400 : '#99A3FF',
        500 : '#000533',
        600: '#E5E8FF',
        700: '#000533',
        800: '#000A66',
        900: '#5465FF'
      },
      'pink' : {
        200 : '#FF99A3'
      },
      'green' : {
        500 : '#14cc00',
        600 : '#0f9900'
      }

         }
    },
  },
  plugins: [],
}
