const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'np-black': {
                    DEFAULT: '#102027',
                    '50': '#458BA9',
                    '100': '#3F7F9B',
                    '200': '#34677E',
                    '300': '#284F61',
                    '400': '#1C3844',
                    '500': '#102027',
                    '600': '#000000',
                    '700': '#000000',
                    '800': '#000000',
                    '900': '#000000',
                },
                'np-gray': {
                    DEFAULT: '#D2D5D7',
                    '50': '#FFFFFF',
                    '100': '#F6F7F7',
                    '200': '#EDEEEF',
                    '300': '#E4E6E7',
                    '400': '#DBDDDF',
                    '500': '#D2D5D7',
                    '600': '#B4B9BD',
                    '700': '#979EA2',
                    '800': '#798288',
                    '900': '#5E656A',
                },
            },
            fontFamily: {
          'sans': [
            'Rubik',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
          ],
          'serif': [
            'Bitter',
            'ui-serif',
            'serif',
          ],
        },
        }
    }
}
