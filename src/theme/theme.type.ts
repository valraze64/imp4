import { CSSProperties } from "react";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: true; 
      sm: true;
      md: true;
      lg: true;
      xl: true;
      xxl: true; 
    }
}
    
    // Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        h1Bold: true;
        h2Bold: true;
        h3Bold: true;
        h4Bold: true;
        p: true;
        pBold: true;
        pSmall: true;
        pSmallBold: true;
        content: true;
        contentBold: true;
    }
}
  
declare module "@mui/material/styles" {
    interface TypographyVariants {
        hBold: React.CSSProperties;
        h: React.CSSProperties;
        h1Bold: React.CSSProperties;
        h2Bold: CSSProperties;
        h3Bold: CSSProperties;
        h4Bold: CSSProperties;
        p: CSSProperties;
        pBold: CSSProperties;
        pSmall: CSSProperties;
        pSmallBold: CSSProperties;
        content: CSSProperties;
        contentBold: CSSProperties;
    }
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        hBold?: CSSProperties;
        h?: CSSProperties;
        h1Bold?: CSSProperties;
        h2Bold?: CSSProperties;
        h3Bold?: CSSProperties;
        h4Bold?: CSSProperties;
        p?: CSSProperties;
        pBold?: CSSProperties;
        pSmall?: CSSProperties;
        pSmallBold?: CSSProperties;
        content?: CSSProperties;
        contentBold?: CSSProperties;
    }
}
