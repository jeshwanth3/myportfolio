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
      // Enhanced rounded corners
      sm: 'calc(var(--radius) - 4px)', // 0.75rem
      md: 'calc(var(--radius) - 2px)', // 1rem
      lg: 'var(--radius)', // 1.25rem
      xl: 'calc(var(--radius) + 4px)', // 1.5rem
      '2xl': 'calc(var(--radius) + 8px)', // 1.75rem
      '3xl': 'calc(var(--radius) + 12px)', // 2rem
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
       'fade-in': { // Updated fade-in keyframes from globals.css
         from: { opacity: '0', transform: 'translateY(25px) scale(0.97)' },
         to: { opacity: '1', transform: 'translateY(0) scale(1)' },
       },
       'slide-in-bottom': { // Updated slide-in keyframes from globals.css
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
       },
      'text-glow-pulse': { // Updated text glow keyframes from globals.css
        from: {
            'text-shadow': '0 0 10px hsl(var(--primary) / 0.6), 0 0 20px hsl(var(--primary) / 0.4), 0 0 30px hsl(var(--primary) / 0.25)'
        },
        to: {
            'text-shadow': '0 0 14px hsl(var(--primary) / 0.9), 0 0 28px hsl(var(--primary) / 0.7), 0 0 42px hsl(var(--primary) / 0.5)'
        }
      },
      'gradient-text-animation': { // Updated gradient text animation keyframes from globals.css
         '0%, 100%': { 'background-position': '0% 50%' },
         '50%': { 'background-position': '100% 50%' },
       },
  	},
  	animation: {
  		'accordion-down': 'accordion-down 0.35s ease-out', // Slightly smoother accordion
  		'accordion-up': 'accordion-up 0.35s ease-out',   // Slightly smoother accordion
       'fade-in': 'fadeIn 0.9s cubic-bezier(0.39, 0.575, 0.565, 1) forwards', // Reference updated fade-in animation
       'slide-in-bottom': 'slideInBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', // Reference updated slide-in animation
      'glow': 'text-glow-pulse 2.8s ease-in-out infinite alternate', // Reference the updated text-glow keyframes - slightly slower pulse
      'gradient-text-slow': 'gradient-text-animation 10s ease-in-out infinite', // Reference the updated gradient animation - slower
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
