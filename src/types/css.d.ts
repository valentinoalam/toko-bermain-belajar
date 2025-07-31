import 'react';

declare module 'react' {
  interface CSSProperties {
    // Allow any CSS custom property starting with '--' to be a string or number
    [key: `--${string}`]: string | number | undefined;

    // Or, if you want to be more specific for just this variable:
    // '--select-button-svg'?: string;
  }
}