import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BotaoLink = styled(Link)` 
      text-decoration: none;
      width: 100%;
      max-width: 315px;
      button {
        width: 100%;
      max-width: 315px;
      margin: 5px 0 0;
      height: 44px;
      background: #1c1c1c;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 16px;
      box-shadow: 0px 0px 10px #000;
      transition: background 0.2;

      span {
  flex:1;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: #fff;
  }
      &:hover {
        background: '#ffa500';
      }
    }
     `


export const Container = styled.div`
  overflow: hidden; /* para que não tenha rolagem se a imagem de fundo for maior que a tela */
  width: 100%;
  height: 100%;
  position: relative;
  
  height: 100%;
  background-image: linear-gradient(-10deg, #8a2be2,#4f4f4f);
  background-size: 100%; 
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  font-size: 16px;
 
  @media screen and (-webkit-min-device-pixel-ratio:0) { 
  select:focus,
  textarea:focus,
  input:focus {
    font-size: 16px;
    background: #c1c1c1;
  }
}

  div#voltar {
    position: relative;
   align-items: left;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input[type='text'],
    input[type='number'],
    input[type='tel'],
    textarea {
      font-size: 16px;
    }


    .input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
      &::placeholder {
       color: rgba(255, 255, 255, 0.7)
      }
    }

   
    
    
    
  
    a {
        color: #fff;
        margin-top: 20px;
        font-size: 16px;
        opacity: 0.8;
      

        &:hover {
          opacity: 1;
        }

      }
   }
`;