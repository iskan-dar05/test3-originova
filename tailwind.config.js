/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    // all directories and extensions will correspond to your Nuxt config
    "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/plugins/**/*.{js,ts,mjs}",
    "{srcDir}/composables/**/*.{js,ts,mjs}",
    "{srcDir}/utils/**/*.{js,ts,mjs}",
    "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/app.config.{js,ts,mjs}",
    "{srcDir}/app/spa-loading-template.html"
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      borderRadius: {
        'custom-small': '32px', // Example: 4px
        'custom-medium': '1rem',   // Example: 16px
        'custom-large': '2rem',    // Example: 32px
      },

      colors: {
        "primary": "#A44EBC",
        "signblack": "#060606",
        "headerColor": "#0B0B0B",
        "startedColor": "#1E1E1E9E",
        "textgray": "#1E1E1E"
      }
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    }
    
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

