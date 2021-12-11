import { createGlobalStyle } from 'styled-components';

// /* // background-image: url('${an image}'); //This works. :D  */
// /* // background-image: url(${an image}); //This doesnt work  */
const GlobalStyle = createGlobalStyle`
body {
    
    background-image: ${({ wallpaper }) => `url('${wallpaper}')`};
   
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    font-family: 'Quicksand', sans-serif;
    
    input {
      font-family: 'Quicksand', sans-serif;
    }
}


::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #6a6a6a;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
}
`;

export default GlobalStyle;
