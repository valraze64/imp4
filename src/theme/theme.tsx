import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1180,
        lg: 1360,
        xl: 1920,
        xxl: 2560,
      },
    },
    palette: {
        primary: {
            main: "#0000A0",
            dark: "#000000",
            light: "#ffffff",
        },
        background: {
            default: "#ffffff",
        },
        secondary: {
            main: "#E5E5F5",
            dark: '',
            light: '#cccccc',
        },
        text:{
            primary: '#646363',
            secondary: '',
            disabled: '',
        },
    },
    typography: {
      hBold:{
        fontFamily: 'MarsCentra-Bold',
        fontSize: '32px',
      },
      h:{
        fontFamily: 'MarsCentra-Book',
        fontSize: '32px',
      },
      h1Bold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '24px',
      },
      h1: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '24px',
      },
      h2Bold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '20px',
      },
      h2: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '20px',
      },
      h3Bold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '18px',
      },
      h3: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '18px',
      },
      h4Bold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '16px',
      },
      h4: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '16px',
      },
      p: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '14px',
      },
      pBold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '14px',
      },
      pSmall: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '12px',
      },
      pSmallBold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '12px',
      },
      content: {
        fontFamily: 'MarsCentra-Book',
        fontSize: '10px',
      },
      contentBold: {
        fontFamily: 'MarsCentra-Bold',
        fontSize: '10px',
      },
    },
    spacing: 8,
});