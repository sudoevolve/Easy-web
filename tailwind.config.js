/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Preset A
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
        
        // Preset B
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        
        // Preset C
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
        'space-mono': ['Space Mono', 'monospace'],
        
        // Preset D
        'sora': ['Sora', 'sans-serif'],
        'instrument': ['Instrument Serif', 'serif'],
        'fira': ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        '2rem': '2rem',
        '3rem': '3rem',
        '4rem': '4rem',
      }
    },
  },
  plugins: [],
}
