/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Volkhov', 'serif'],
        body: ['Poppins', 'sans'],
      },
      colors: {
        title_header_color: '#484848',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Volkhov', 'serif'],
        body: ['Poppins','sans-serif'],
      },
      colors: {
        title_header_color: '#484848',
        main_color:'#8A8A8A',
        tabs_bg:'#FAFAFA',
        text_color:'#484848',
        span_color:'#8A8A8A',
        star_color:'#FCA120',
        price_color:'#D03947'
        
      },
      boxShadow: {
        'tabShadow': '0px 20px 35px 0px rgba(0, 0, 0, 0.26)',
        'cardShadow':' 0px 40px 90px 0px #0000000F',
        
      },
    },
  },
  plugins: [],
};

