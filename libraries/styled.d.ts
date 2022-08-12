// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    text: string;
    boxShadow: string;
    background: string;
    gradient: string;
    accent: string;
    customBackground: string;
  }
}
