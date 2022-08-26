// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    hover: string;
    text: string;
    boxShadow: string;
    background: string;
    loading: string;
    gradient: string;
    accent: string;
    customBackground: string;
  }
}
