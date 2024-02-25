import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/container-queries',
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
        
"primary": "#65a30d",
        
"secondary": "#facc15",
        
"accent": "#ef4444",
        
"neutral": "#65a30d",
          
"base-100": "#d1d5db",
        
"info": "#2563eb",
        
"success": "#7e22ce",
        
"warning": "#ea580c",
        
"error": "#b91c1c",
        },
      },
    ],
  },
}

