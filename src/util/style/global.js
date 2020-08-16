import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
}

html,body, #root {
  height: 100%
  
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Press Start 2P', cursive;
}

a {
  text-decoration: nome;
}

ul {
  list-style: nome;
}

button {
  cursor: pointer
}

`