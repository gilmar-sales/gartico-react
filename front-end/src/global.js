import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Fredoka One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};

    transition: 0.2s all;

}
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.primary};
}

::-webkit-scrollbar-thumb {
  background ${(props) => props.theme.colors.text};
  filter: brightness(10%);
}

::-webkit-scrollbar-thumb:hover {
  background #111128;
}
svg {
    fill: ${(props) => props.theme.colors.secondary};
    stroke: ${(props) => props.theme.colors.secondary};
    background-color: transparent;
    transition: 0.01s all;
}

.row {
  display: flex;
  width: 100%;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  height: 36px;
  width: 100%;
  border-style: none;
  border-radius: 5px;
  margin-bottom: 10px;
  border: ${(props) => props.theme.colors.secondary} 2px solid;
  padding-left: 20px;
}

input:focus, .button:focus {
  border: ${(props) => props.theme.colors.secondary} 2px solid;
}

.button {
  cursor: pointer;
  height: 36px;
  width: 100%;
  border-style: none;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: 0.2s all;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary}
}

.button:hover {
  filter: brightness(60%);
}
`
