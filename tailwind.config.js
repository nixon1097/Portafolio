/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:'#0f172a',
     
      },
      fontFamily:{
        'Roboto':['Roboto', 'sans-serif']
      },
      keyframes:{
        'slide-down':{
          '0%':{

            top: '-25rem'
          },
          '100%':{
            top:'0rem'
        }
      },
      "fade-in":{
        '0%':{
          opacity:'0%'
        },
        '100%':{
          opacity:'1000%'
          }
      }


    },
    animation:{
      'slide-down':'slide-down 1s ',
      'fade-in':'fade-in 4s '
      },
      },
  },
  plugins: [],
};


