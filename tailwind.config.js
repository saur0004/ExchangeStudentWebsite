/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            sans: ['Kanit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            body: ['Kanit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        colors: {
            // Merged colors from about.blade.php and login.blade.php
            brand: {
                50: '#f2f3ff',
                100: '#e6e8ff',
                200: '#c7ccff',
                300: '#a4adff',
                400: '#6f7dff',
                500: '#3a4bff',
                600: '#172bd6',
                700: '#020263',
                800: '#010149',
                900: '#00012f',
                navy: '#001045',
                red: '#D6001C',
                redHover: '#b00017',
                gray: '#F3F4F6',
                silver: '#9CA3AF'
            },
            navy: {
                DEFAULT: '#001045', 
                light: '#0f225e'
            },
            primary: '#001045', // Added alias
            vividRed: {
                DEFAULT: '#D6001C', 
                hover: '#b50018',
                light: '#ffeaea'
            },
            pureWhite: '#FFFFFF',
            coolGray: '#F3F4F6',
            silver: '#9CA3AF', // Duplicate but ok
            silverGray: '#9CA3AF',
            textMain: '#374151',
            gold: '#C5A059',
            // Login specific
            'theme-blue': '#001045',
            'theme-light-blue': '#001b70',
            'theme-red': '#D50000',
            'theme-hover-red': '#B71C1C',
        },
        boxShadow: {
            'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            'glow': '0 0 15px rgba(214, 0, 28, 0.3)',
        },
        animation: {
            marquee: 'marquee 30s linear infinite',
            'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            move: 'move 0.6s ease-in-out forwards',
            shimmer: 'shimmer 2s infinite linear',
        },
        keyframes: {
            marquee: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
            },
            fadeInDown: {
                '0%': { opacity: '0', transform: 'translateY(-10px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
            },
            move: {
                '0%, 49.99%': { opacity: '0', zIndex: '1' },
                '50%': { opacity: '0', zIndex: '5' },
                '100%': { opacity: '1', zIndex: '5' },
            },
            shimmer: {
                '0%': { backgroundPosition: '-1000px 0' },
                '100%': { backgroundPosition: '1000px 0' }
            }
        },
      },
    },
    plugins: [],
  }
