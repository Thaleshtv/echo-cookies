import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F8F9FA;
        --background2: #E5E5E5;
        --shape: #FFFFFF;
        --purple: #7241A1;
        --purple2: #9876CC;
        --orange: #E7973E;
        --black: #3E324B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: var(--background);
    }


    button {
        cursor: pointer;
    }
`