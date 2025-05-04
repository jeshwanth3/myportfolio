import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        // Direct mapping from CSS variables defined in globals.css
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	borderRadius: {
      // Use theme radius defined in globals.css
  		lg: 'var(--radius)',
  		md: 'calc(var(--radius) - 2px)',
  		sm: 'calc(var(--radius) - 4px)',
      full: '9999px',
  	},
  	keyframes: {
  		'accordion-down': {
  			from: { height: '0' },
  			to: { height: 'var(--radix-accordion-content-height)' }
  		},
  		'accordion-up': {
  			from: { height: 'var(--radix-accordion-content-height)' },
  			to: { height: '0' }
  		},
       'fade-in': { // Updated fade-in keyframes
         from: { opacity: '0', transform: 'translateY(25px) scale(0.97)' }, // Adjusted starting point
         to: { opacity: '1', transform: 'translateY(0) scale(1)' },
       },
       'slide-in-bottom': { // Updated slide-in keyframes
          from: { opacity: '0', transform: 'translateY(40px)' }, // Adjusted starting point
          to: { opacity: '1', transform: 'translateY(0)' },
       },
      'glow': { // Use primary color for glow, adjusted intensity
        '0%, 100%': { 'box-shadow': '0 0 6px hsl(var(--primary) / 0.4), 0 0 12px hsl(var(--primary) / 0.25)' }, // Softer glow
        '50%': { 'box-shadow': '0 0 10px hsl(var(--primary) / 0.55), 0 0 20px hsl(var(--primary) / 0.35)' },
      }
  	},
  	animation: {
  		'accordion-down': 'accordion-down 0.3s ease-out', // Slightly slower accordion
  		'accordion-up': 'accordion-up 0.3s ease-out',   // Slightly slower accordion
       'fade-in': 'fadeIn 1.2s ease-in-out forwards', // Adjusted duration and easing
       'slide-in-bottom': 'slideInBottom 0.9s cubic-bezier(0.3, 0.8, 0.2, 1) forwards', // Adjusted duration and easing
      'glow': 'glow 4s ease-in-out infinite', // Slower, smoother glow animation
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
