import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Fredoka One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};

    transition: 0.2s all;
}
`;