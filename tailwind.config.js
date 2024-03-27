/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      screens: {
        'xl2': '1440px', // Add your custom screen size
      },
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'desktop-image-hero': 'url(/resources/assets/home/desktop/image-hero.jpg)',
        'tablet-image-header': 'url(/resources/assets/home/tablet/image-header.jpg)',
        'mobile-image-header': 'url(/resources/assets/home/mobile/image-header.jpg)',
        'desktop-speakerPattern':'url(/resources/assets/home/desktop/pattern-circles.svg)',
        'tablet-speakerPattern':'url(/resources/assets/home/tablet/pattern-circles.svg)',
        'mobilespeakerPattern':'url(/resources/assets/home/mobile/pattern-circles.svg)',
      }, 
      colors: {
        orange: '#D87D4A',
         blurOrange:'#FBAF8A',
        navbgColor:'#101010',
        lightgray:'#F1F1F1',
        gray:'#979797',
        white:'#FFFFFF',
        black:'#000000',

      },
      letterSpacing: {
        widest: '1rem',
        tight:'2px'
      },
     
    },
  },
  plugins: [
    
    ],
};
