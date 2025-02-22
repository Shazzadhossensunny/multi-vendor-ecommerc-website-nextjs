import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(0 0% 89.8%)',
  			input: 'hsl(0 0% 89.8%)',
  			ring: 'hsl(0 0% 3.9%)',
  			background: 'hsl(0 0% 93%)',
  			foreground: 'hsl(0 0% 3.9% / 0.6)',
  			primary: {
  				DEFAULT: 'hsl(0 0% 3.9%)',
  				foreground: 'hsl(0 0% 93%)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(222 83% 60%)',
  				foreground: 'hsl(0 0% 100%)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(342 85% 60%)',
  				foreground: 'hsl(0 0% 93%)'
  			},
  			muted: {
  				DEFAULT: 'hsl(0 0% 87%)',
  				foreground: 'hsl(0 0% 45%)'
  			},
  			accent: {
  				DEFAULT: 'hsl(173 58% 39%)',
  				foreground: 'hsl(0 0% 93%)'
  			},
  			popover: {
  				DEFAULT: 'hsl(0 0% 93%)',
  				foreground: 'hsl(0 0% 3.9% / 0.6)'
  			},
  			card: {
  				DEFAULT: 'hsl(0 0% 96%)',
  				foreground: 'hsl(0 0% 3.9% / 0.6)'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
                    ...fontFamily.sans
                ],
  			heading: [
  				'var(--font-heading)',
                    ...fontFamily.sans
                ]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
