// Importa funções e tipos do Material UI para criação e tipagem do tema
import { createTheme, alpha } from '@mui/material/styles';
import type { PaletteMode, Shadows } from '@mui/material/styles';

// Extende as definições do Material UI para permitir variantes customizadas
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles' {
  // Define uma interface para faixas de cor (ColorRange)
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  // Permite que PaletteColor use ColorRange
  interface PaletteColor extends ColorRange {
    accentMain?: string; // cor de destaque principal (genérica)
    accentAlt?: string;  // cor de destaque alternativa (genérica)
  }

  // Adiciona baseShadow à interface Palette
  interface Palette {
    baseShadow: string;
    tertiary: PaletteColor;
    textColor: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColor;
    textColor?: PaletteColor;
  }
}

// Cria um tema padrão para usar funções utilitárias do Material UI
const defaultTheme = createTheme();

// Cria uma cópia dos shadows padrão do tema
const customShadows: Shadows = [...defaultTheme.shadows];

// Define as paletas de cores principais do projeto
export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)',
};

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

// Nova paleta primary: tons de branco em HSL
export const primary = {
  50:  'hsl(0, 0%, 100%)',
  100: 'hsl(0, 0%, 98%)',
  200: 'hsl(0, 0%, 96%)',
  300: 'hsl(0, 0%, 94%)',
  400: 'hsl(0, 0%, 93%)',
  500: 'hsl(0, 0%, 88%)',
  600: 'hsl(0, 0%, 81%)',
  700: 'hsl(0, 0%, 74%)',
  800: 'hsl(0, 0%, 69%)',
  900: 'hsl(0, 0%, 62%)',
};

// Nova paleta secondary: tons de azul claro em HSL (#A5D2E3)
export const softBlue = {
  50:  'hsl(195, 60%, 95%)',
  100: 'hsl(195, 60%, 90%)',
  200: 'hsl(195, 56%, 77%)', // #A5D2E3
  300: 'hsl(195, 54%, 70%)',
  400: 'hsl(195, 52%, 62%)',
  500: 'hsl(195, 50%, 54%)',
  600: 'hsl(195, 60%, 44%)',
  700: 'hsl(195, 60%, 34%)',
  800: 'hsl(195, 60%, 24%)',
  900: 'hsl(195, 60%, 14%)',
};

// Nova paleta tertiary: tons de azul forte em HSL (#0571D3)
export const darkBlue = {
  50:  'hsl(207, 80%, 95%)',
  100: 'hsl(207, 80%, 85%)',
  200: 'hsl(207, 80%, 75%)',
  300: 'hsl(207, 80%, 65%)',
  400: 'hsl(207, 80%, 55%)',
  500: 'hsl(207, 95%, 43%)', // #0571D3
  600: 'hsl(207, 95%, 35%)',
  700: 'hsl(207, 95%, 27%)',
  800: 'hsl(207, 95%, 19%)',
  900: 'hsl(207, 95%, 11%)',
};

// Nova paleta para texto: tons de cinza azulado em HSL (#5E6572)
export const textColor = {
  50:  'hsl(220, 10%, 97%)',
  100: 'hsl(220, 10%, 92%)',
  200: 'hsl(220, 10%, 85%)',
  300: 'hsl(220, 10%, 78%)',
  400: 'hsl(220, 10%, 70%)',
  500: 'hsl(220, 10%, 60%)',
  600: 'hsl(220, 10%, 50%)',
  700: 'hsl(220, 10%, 40%)',
  800: 'hsl(220, 12%, 41%)', // #5E6572
  900: 'hsl(220, 12%, 30%)',
};

// Função utilitária para gerar tokens de design baseados no modo (claro/escuro)
export const getDesignTokens = (mode: PaletteMode) => {
  // Ajusta a sombra principal conforme o modo
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
      : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

  return {
    palette: {
      mode, // claro ou escuro
      primary: {
        light: primary[200],
        main: primary[500],
        dark: primary[700],
        contrastText: textColor[800],
        ...primary,
      },
      softBlue: {
        light: softBlue[200],
        main: softBlue[500],
        dark: softBlue[700],
        contrastText: textColor[800],
        ...softBlue,
      },
      darkBlue: {
        light: darkBlue[200],
        main: darkBlue[500],
        dark: darkBlue[700],
        contrastText: primary[50],
        ...darkBlue,
      },
      textColor: {
        light: textColor[200],
        main: textColor[800],
        dark: textColor[900],
        contrastText: primary[50],
        ...textColor,
      },
      text: {
        primary: textColor[800],
        secondary: textColor[600],
        disabled: textColor[400],
      },
      // Cores genéricas para destaque/acento
      accentMain: '#FFFFFF',
      accentAlt:  '#A5D2E3',
      ...(mode === 'dark' && {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
        accentMain: '#FFFFFF',
        accentAlt:  '#A5D2E3',
      }),
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: brand[300],
          light: brand[500],
          main: brand[700],
          dark: brand[900],
        }),
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        ...(mode === 'dark' && {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        }),
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
        ...(mode === 'dark' && {
          light: red[400],
          main: red[500],
          dark: red[700],
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        default: 'hsl(0, 0%, 99%)',
        paper: 'hsl(220, 35%, 97%)',
        ...(mode === 'dark' && { default: gray[900], paper: 'hsl(220, 30%, 7%)' }),
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
        ...(mode === 'dark' && {
          hover: alpha(gray[600], 0.2),
          selected: alpha(gray[600], 0.3),
        }),
      },
    },
    // Tipografia customizada do projeto
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
      },
    },
    // Raio de borda padrão
    shape: {
      borderRadius: 8,
    },
    // Sombreamentos customizados
    shadows: customShadows,
  };
};

// Define os esquemas de cor para light e dark mode
export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: primary[200],
        main: primary[500],
        dark: primary[700],
        contrastText: textColor[800],
        ...primary,
      },
      softBlue: {
        light: softBlue[200],
        main: softBlue[500],
        dark: softBlue[700],
        contrastText: textColor[800],
        ...softBlue,
      },
      darkBlue: {
        light: darkBlue[200],
        main: darkBlue[500],
        dark: darkBlue[700],
        contrastText: primary[50],
        ...darkBlue,
      },
      textColor: {
        light: textColor[200],
        main: textColor[800],
        dark: textColor[900],
        contrastText: primary[50],
        ...textColor,
      },
      text: {
        primary: textColor[800],
        secondary: textColor[600],
        disabled: textColor[400],
      },
      // ...mantenha outras cores se necessário...
      // grey, error, warning, success, background, divider, etc.
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: 'hsl(0, 0%, 99%)',
        paper: 'hsl(220, 35%, 97%)',
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        light: primary[200],
        main: primary[500],
        dark: primary[700],
        contrastText: textColor[800],
        ...primary,
      },
      softBlue: {
        light: softBlue[200],
        main: softBlue[500],
        dark: softBlue[700],
        contrastText: textColor[800],
        ...softBlue,
      },
      darkBlue: {
        light: darkBlue[200],
        main: darkBlue[500],
        dark: darkBlue[700],
        contrastText: primary[50],
        ...darkBlue,
      },
      textColor: {
        light: textColor[200],
        main: textColor[800],
        dark: textColor[900],
        contrastText: primary[50],
        ...textColor,
      },
      text: {
        primary: textColor[800],
        secondary: textColor[600],
        disabled: textColor[400],
      },
      // ...mantenha outras cores se necessário...
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: gray[900],
        paper: 'hsl(220, 30%, 7%)',
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
    },
  },
};

// Tipografia padrão exportada separadamente
export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

// Raio de borda padrão exportado separadamente
export const shape = {
  borderRadius: 8,
};

// Sombreamentos padrão exportados separadamente
// @ts-ignore
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;