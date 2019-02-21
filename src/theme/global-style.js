import { createGlobalStyle } from "styled-components";
import KarlaRegular from "../static/fonts/Karla-Regular.ttf";
import KarlaBold from "../static/fonts/Karla-Bold.ttf";
import KarlaBoldItalic from "../static/fonts/Karla-BoldItalic.ttf";
import KarlaItalic from "../static/fonts/Karla-Italic.ttf";

const GlobalStyle = createGlobalStyle`

    body {
    @font-face {
        font-family: 'KarlaRegular';
        src: url(${KarlaRegular});
    }
    @font-face {
        font-family: 'KarlaBold';   
        src: url(${KarlaBold});
    }
    @font-face {
        font-family: 'KarlaBoldItalic';
        src: url(${KarlaBoldItalic});
    }
    @font-face {
        font-family: 'KarlaItalic';
        src: url(${KarlaItalic});
    }
        font-family: "KarlaRegular";
        margin: 0;
        background: #f7f7f7;
    }
`;

export default GlobalStyle;
