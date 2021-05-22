import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0%;
        font-family: "Roboto", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    .container {
        width: 75%;
        margin: auto;
    }

    footer {
        height: 200px;
        text-align: center;
    }
`