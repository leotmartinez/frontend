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
    softBlue: PaletteColor; // Adiciona softBlue à tipagem
    darkBlue: PaletteColor; // Adiciona darkBlue à tipagem
  }
  interface PaletteOptions {
    tertiary?: PaletteColor;
    textColor?: PaletteColor;
    softBlue?: PaletteColor; // Adiciona softBlue à tipagem
    darkBlue?: PaletteColor; // Adiciona darkBlue à tipagem
    baseShadow?: string; // Garante tipagem para baseShadow
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
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...primary,
      main: primary[500],
      contrastText: '#000', // Melhor contraste
    },
    softBlue: {
      ...softBlue,
      main: softBlue[500],
      contrastText: '#000', // Melhor contraste para fundo claro
    },
    darkBlue: {
      ...darkBlue,
      main: darkBlue[500],
      contrastText: primary[50], // Mantém branco puro
    },
    text: {
      primary: textColor[800],
      secondary: textColor[600],
      disabled: textColor[400],
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
  shape: {
    borderRadius: 8,
  },
  shadows: customShadows,
});

// Define os esquemas de cor para light e dark mode
export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: primary[200],
        main: primary[500],
        dark: primary[700],
        contrastText: '#000', // Melhor contraste
        ...primary,
      },
      softBlue: {
        light: softBlue[200],
        main: softBlue[500],
        dark: softBlue[700],
        contrastText: '#000', // Melhor contraste para fundo claro
        ...softBlue,
      },
      darkBlue: {
        light: darkBlue[200],
        main: darkBlue[500],
        dark: darkBlue[700],
        contrastText: primary[50], // Mantém branco puro
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
        contrastText: '#000', // Melhor contraste
        ...primary,
      },
      softBlue: {
        light: softBlue[200],
        main: softBlue[500],
        dark: softBlue[700],
        contrastText: '#000', // Melhor contraste para fundo claro
        ...softBlue,
      },
      darkBlue: {
        light: darkBlue[200],
        main: darkBlue[500],
        dark: darkBlue[700],
        contrastText: primary[50], // Mantém branco puro
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

// Função utilitária para garantir contraste (acessibilidade)
function getContrastText(bgColor: string): string {
  // Algoritmo simples para contraste: calcula luminância relativa
  // e retorna preto ou branco conforme o fundo
  // (Para projetos grandes, use o utilitário do MUI: theme.palette.getContrastText)
  const hex = bgColor.startsWith('hsl') ? hslToHex(bgColor) : bgColor;
  const rgb = hexToRgb(hex);
  if (!rgb) return '#000';
  // Fórmula de luminância relativa
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? '#000' : '#fff';
}

// Converte HSL para HEX (para uso no contraste)
function hslToHex(hsl: string): string {
  // Extrai valores de hsl(x, y%, z%)
  const result = /hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/.exec(hsl);
  if (!result) return '#fff';
  let [h, s, l] = [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return rgbToHex(r, g, b);
}
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  if (c.length !== 6) return null;
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

// Exporta o tema principal já pronto, garantindo contraste e acessibilidade
export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      ...primary,
      light: primary[200], // tom mais claro para hover/active
      main: primary[500],
      dark: primary[700], // tom mais escuro para estados ativos
      contrastText: getContrastText(primary[500]),
    },
    softBlue: {
      ...softBlue,
      light: softBlue[200], // tom claro para hover
      main: softBlue[500],
      dark: softBlue[700], // tom escuro para active
      contrastText: getContrastText(softBlue[500]),
    },
    darkBlue: {
      ...darkBlue,
      light: darkBlue[200],
      main: darkBlue[500],
      dark: darkBlue[700],
      contrastText: getContrastText(darkBlue[500]),
    },
    // Tertiary pode ser igual ao darkBlue, mas pode ser customizado
    tertiary: {
      ...darkBlue,
      light: darkBlue[200],
      main: darkBlue[500],
      dark: darkBlue[700],
      contrastText: getContrastText(darkBlue[500]),
    },
    textColor: {
      ...textColor,
      light: textColor[200],
      main: textColor[800],
      dark: textColor[900],
      contrastText: getContrastText(textColor[800]),
    },
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
  typography: {
    fontFamily: 'Inter, sans-serif',
    // ...restante da tipografia...
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
  shape: {
    borderRadius: 8,
  },
  shadows: customShadows,
});

// Comentários:
// - Agora, softBlue e darkBlue estão disponíveis em theme.palette com tipagem.
// - O tema principal (appTheme) já está pronto para ser usado no ThemeProvider.
// - O contraste é calculado automaticamente para garantir acessibilidade.
// - Para mudar para dark mode, basta alterar mode para 'dark' e ajustar cores de fundo se necessário.
// - As paletas principais (primary, softBlue, darkBlue) seguem boas práticas de contraste e acessibilidade.
// - As funções utilitárias de cor podem ser reaproveitadas em outros pontos do projeto.
// - O restante do arquivo permanece igual, exportando tokens e helpers para uso avançado.