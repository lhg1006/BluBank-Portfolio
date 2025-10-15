export const theme = {
  colors: {
    // Brand colors
    primary: {
      50: '#f0f4ff',
      100: '#e0edff',
      200: '#b8d4ff',
      300: '#7bb3ff',
      400: '#3182f6', // Main blue
      500: '#1b64da',
      600: '#1a56db',
      700: '#1e40af',
      800: '#1e3a8a',
      900: '#1e3a8a',
    },
    // iOS style gray
    gray: {
      50: '#fafafa',
      100: '#f5f5f7', // iOS background
      200: '#e5e5ea', // iOS divider
      300: '#d1d1d6', // iOS inactive
      400: '#8e8e93', // iOS secondary text
      500: '#636366',
      600: '#48484a',
      700: '#3a3a3c',
      800: '#2c2c2e', // iOS dark background
      900: '#1c1c1e', // iOS dark text
    },
    // Point colors
    toss: {
      blue: '#3182f6',
      lightBlue: '#e8f3ff',
      red: '#ff6b6b',
      orange: '#ff9500',
      yellow: '#ffb800',
      green: '#00c896',
      purple: '#8b5cf6',
      pink: '#f472b6',
    },
    // Background gradients
    backgrounds: {
      primary: 'linear-gradient(180deg, #fafbff 0%, #f0f4ff 100%)',
      secondary: 'linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)',
      card: 'linear-gradient(145deg, #ffffff 0%, #f5f5f7 100%)',
      glass: 'rgba(255, 255, 255, 0.8)',
      glassBlur: 'rgba(255, 255, 255, 0.9)',
    },
    success: '#00c896',
    warning: '#ff9500',
    error: '#ff6b6b',
    white: '#ffffff',
    black: '#1c1c1e',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  typography: {
    fontFamily: {
      // Moneygraphy 우선, 시스템 폰트 백업
      sans: [
        '"Moneygraphy"',
        '-apple-system',
        'BlinkMacSystemFont',
        'SF Pro Text',
        'Segoe UI',
        'Roboto',
        'sans-serif'
      ],
      pixel: [
        '"Moneygraphy Pixel"',
        '"Moneygraphy"',
        'monospace'
      ],
      mono: ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '11px',
      sm: '13px',
      md: '15px',
      lg: '17px',
      xl: '19px',
      '2xl': '22px',
      '3xl': '28px',
      '4xl': '34px',
      '5xl': '42px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,  // Default text weight
      bold: 700,      // Emphasized text weight
      heavy: 800,     // Heading weight
      black: 900,     // Strong heading weight
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
    },
  },
  borderRadius: {
    none: '0px',
    sm: '6px',  // iOS 스타일
    md: '12px', // iOS 카드
    lg: '16px', // iOS 모달
    xl: '20px', // iOS 큰 카드
    '2xl': '24px',
    full: '50%',
  },
  shadows: {
    none: 'none',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)', // iOS 가벼운 그림자
    md: '0 4px 12px rgba(0, 0, 0, 0.15)', // iOS 카드 그림자
    lg: '0 8px 25px rgba(0, 0, 0, 0.15)', // iOS 모달 그림자
    xl: '0 16px 40px rgba(0, 0, 0, 0.12)', // iOS 드롭 그림자
    // Brand style shadows
    toss: {
      card: '0 2px 8px rgba(49, 130, 246, 0.1), 0 1px 3px rgba(49, 130, 246, 0.06)',
      button: '0 4px 12px rgba(49, 130, 246, 0.15)',
      float: '0 8px 25px rgba(49, 130, 246, 0.1)',
      glass: '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
    },
  },
  // Style effects
  effects: {
    backdrop: 'backdrop-filter: blur(20px) saturate(180%)',
    glass: 'backdrop-filter: blur(10px) saturate(120%)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
};