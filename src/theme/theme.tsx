import { ColorTokens } from "./color-token";

export const theme = (mode: string): any => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: ColorTokens.primary[200],
              main: ColorTokens.primary[500],
              light: ColorTokens.primary[800],
            },
            neutral: {
              dark: ColorTokens.grey[100],
              main: ColorTokens.grey[200],
              mediumMain: ColorTokens.grey[300],
              medium: ColorTokens.grey[400],
              light: ColorTokens.grey[700],
            },
            background: {
              default: ColorTokens.grey[900],
              alt: ColorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: ColorTokens.primary[700],
              main: ColorTokens.primary[500],
              light: ColorTokens.primary[200],
            },
            neutral: {
              dark: ColorTokens.grey[700],
              main: ColorTokens.grey[500],
              mediumMain: ColorTokens.grey[400],
              medium: ColorTokens.grey[300],
              light: ColorTokens.grey[50],
            },
            background: {
              default: ColorTokens.grey[10],
              alt: ColorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: "Arial, sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      primaryButton: {
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "1px",
        lineHeight: "1.5",
      },
      secondaryButton: {
        fontSize: "0.875rem",
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.5px",
        lineHeight: "1.5",
      },
      normalButton: {
        fontSize: "0.875rem",
        fontWeight: 400,
        textTransform: "none",
        letterSpacing: "0.5px",
        lineHeight: "1.5",
      },
    },
    shape: {
      borderRadius: 3,
    },
  };
};
