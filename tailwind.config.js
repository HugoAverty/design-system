
module.exports = {
  theme: {
    extend: {
      colors: ({ colors }) => ({

        primary: {
          DEFAULT: '#56EAFF',
          hover: '#82F0FF'
        },
        secondary: {
          DEFAULT: '#E142A2',
          hover: '#D28FEF'
        },
        neutral: '#272736',
        opposite: {
          DEFAULT: '#F2FDFF'
        },
        contrast: {
          DEFAULT: '#0F1F2D'
        },

        input: '#0F1F2D',
        highlight: {
          DEFAULT: '#4D4B67',
          low: '#38384A'
        },
        active: '#928EBB',

        danger: {
          DEFAULT: '#FF6565',
          between: '#A05454',
          dark: '#392525',
          hover: '#FF8B8B',
          alert: 'rgba(255,101,101,.75)'
        },
        success: {
          DEFAULT: '#93D57C',
          dark: '#1A2B14',
          hover: '#AEDF9C',
          alert: 'rgba(147,213,124,.75)'
        },
        warning: {
          DEFAULT:'#EC943F',
          hover: '#F0AE6F'
        },
        info: {
          DEFAULT:'#00ABFF',
          hover: '#40C0FF'
        },

        transparent: 'rgba(0,0,0,0)',
      }),
      blur: {
        0: '0',
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      borderRadius: {
        none: '0',
        xs: '3px',
        DEFAULT: '5px',
        md: '10px',
        lg: '15px',
        xl: '20px',
        full: '9999px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      minWidth: {
        0: '0px',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        buttonRegular: '110px',
        buttonSmall: '85px',
        buttonExtraSmall: '65px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 0 15px 0 rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        bxShadow: '0 10px 20px 5px rgba(0,0,0,0.35)',
        bxShadowHover: '0 5px 10px 2px rgba(0,0,0,0.50)',
        bxShadowSmall: '0 3px 5px 1px rgba(0,0,0,0.75)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 0 10px 0 rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        alertDanger: '0 10px 20px 5px rgba(0,0,0,0.35), inset 0 10px 20px 0 rgba(255,156,113,0.5)',
        alertSuccess: '0 10px 20px 5px rgba(0,0,0,0.35), inset 0 10px 20px 0 rgba(142,255,143,0.25)',
        alertPrimary: '0 10px 20px 5px rgba(0,0,0,0.35), inset 0 10px 20px 0 rgba(255,255,255,0.25)',
        alert: '0 10px 20px 5px rgba(0,0,0,0.35), inset 0 10px 20px 0 rgba(146,142,187,0.25)',
        modal: '0 10px 20px 5px rgba(0,0,0,0.35)',
        inputRadio: '0 0 7px 0 rgba(4,255,210,1)',
        inputRadioDanger: '0 0 7px 0 #FF6565',
        none: 'none',
      },
      fontFamily: {
        main: [
          'Roboto',
          'Arial'
        ],
        secondary: [
          'Roboto Condensed',
          'Arial'
        ]
      },
      // OK
      fontSize: {
        xs: ['12px', { lineHeight: '1rem' }],
        sm: ['13px', { lineHeight: '1.25rem' }],
        base: ['14px', { lineHeight: '1.5rem' }],
        lg: ['15px', { lineHeight: '1.75rem' }],
        xl: ['18px', { lineHeight: '1.75rem' }],
        '2xl': ['20px', { lineHeight: '2rem' }],
        '3xl': ['24px', { lineHeight: '2.25rem' }],
        '4xl': ['28px', { lineHeight: '2.5rem' }],
        '5xl': ['34px', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // END OK
      // OK
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700'
      },
      // END OK
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1',
      }
    }
  },
}
