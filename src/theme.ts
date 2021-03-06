const theme = {
  buttons: {
    size: {
      md: { height: '36px', minWidth: '130px', padding: '0 24px' },
      lg: { height: '52px', minWidth: '240px', padding: '0 48px' },
    },
  },
  colors: {
    primary: '#008C73',
    primaryLight: '#A1D2CA',
    primaryHover: '#005546',

    secondary: '#001428',
    secondaryLight: '#B2B5B2',
    secondaryHover: '#5D6D74',

    error: '#DB3A3D',
    errorHover: '#C31717',

    text: '#001428',
    icon: '#B2B5B2',
    placeHolder: '#5D6D74',
    inputField: '#F0EFEE',

    separator: '#E8E7E6',
    rinkeby: '#E8673C',
    pendingTagHover: '#FBE5C5',
    tag: '#D4D5D3',
    background: '#F7F5F5',
    white: '#ffffff',
    warning: '#FFC05F',

    disabled: {
      opacity: 0.5,
    },
    overlay: {
      opacity: 0.75,
      color: '#E8E7E6',
    },
    shadow: {
      blur: '18px',
      opacity: 0.75,
      color: '#28363D',
    },
  },
  statusDot: {
    size: {
      sm: '5px',
      md: '10px',
    },
  },
  fonts: {
    fontFamily: `'Averta', 'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
  },
  icons: {
    size: {
      sm: '16',
      md: '24',
    },
  },
  iconText: {
    size: {
      sm: null,
      md: null,
    },
  },
  identicon: {
    size: {
      xs: '10px',
      sm: '16px',
      md: '32px',
      lg: '40px',
    },
  },
  loader: {
    size: {
      xs: '10px',
      sm: '30px',
      md: '50px',
      lg: '70px',
    },
  },
  text: {
    size: {
      sm: {
        fontSize: '11px',
        lineHeight: '14px',
      },
      md: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      lg: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      xl: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
  },
  title: {
    size: {
      xs: {
        fontSize: '20px',
        lineHeight: '26px',
      },
      sm: {
        fontSize: '24px',
        lineHeight: '30px',
      },
      md: {
        fontSize: '32px',
        lineHeight: '36px',
      },
      lg: {
        fontSize: '44px',
        lineHeight: '52px',
      },
      xl: {
        fontSize: '60px',
        lineHeight: '64px',
      },
    },
  },
};

export type Theme = typeof theme;

export type ThemeColors = keyof Theme['colors'];
export type ThemeIconSize = keyof Theme['icons']['size'];
export type ThemeTextSize = keyof Theme['text']['size'];
export type ThemeTitleSize = keyof Theme['title']['size'];
export type ThemeStatusDotSize = keyof Theme['statusDot']['size'];
export type ThemeLoaderSize = keyof Theme['loader']['size'];
export type ThemeButtonSize = keyof Theme['buttons']['size'];
export type ThemeIdenticonSize = keyof Theme['identicon']['size'];

export default theme;
