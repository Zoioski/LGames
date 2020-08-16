import styled from 'styled-components';
import Fundo from '../../img/Fundo.jpg'
import { Link } from 'react-router-dom';

export const RegraLink = styled(Link)` 
      text-decoration: none;
  span {
  flex:1;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: #fff;
  }
`

export const ProductList = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px,1fr));
  grid-gap: 20px;
  text-decoration: none;
  list-style: none;
  color: inherit;
  padding: 20px;
  font: 16px 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
 
  li {
    display: flex;
    flex-direction: column;
    background: #000;
    box-shadow: 0px 0px 10px #000;
    border-radius: 4px;
    padding: 20px;
    &:hover{
    transition: background 3s;
    background: #696969;
    box-shadow: 0px 0px 10px #696969;
  }
   
    img {
    align-self: center;
    box-shadow: 0px 0px 10px #000;
    border-radius: 4px;
    width: 100%;
    border-radius: 2vw 4vw 2vw 2vw;
    max-width: 200px;
    }

    strong#nome {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
      margin-top: 5px;
    }

    strong#descricao {
      font-size: 13px;
      line-height: 20px;
      color: #fff;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      margin: 5px 0 20px;
      color: #fff;
    }
  
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1c1c1c;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2;
      margin-top: auto;
      align-items: center;
      display: flex;


      div {
        display: flex;
        align-items: center;
       
        padding: 12px;
       
        border-radius: 4px;
      }

      span {
        flex:1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;


export const Container = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: linear-gradient(-10deg, #8a5be2,#4f4f4f);
  margin: 0;
  padding: 0;
  outline: 0;
  position: absolute;
  background-size: 100%;
  
  .centro {align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;}

 div#barraLateral {
  position:relative;
  width: 50px;
  height: 100%;
  border-radius: 0 20px ;
  border-color: #fff;
  background: #1C1C1C;
  margin: 5px;
  padding: 5px ;
  display: block;
  box-shadow: 0px 0px 30px #000;


  div#carossel {
    width: 550px;
    background: rgba(0, 0, 0, 0.1);
    height: 100px;
    margin: 0px 240px;
    position: absolute;
    box-shadow: 0px 0px 10px #000;
    border-radius: 4px;
  }

  div#loja {
    width: 1000px;
    
    background: #1C1C1C;
    height: 370px;
    margin: 120px 120px;
    position: absolute;
    box-shadow: 0px 0px 10px #000;
    border-radius: 4px;
  }



  div#icones1 {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.4);
    padding: 6px;
    align-items: center;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0px 7px #000;
    cursor: pointer;
  }
  div#icones2 {
    margin-top: 15px;
    background: rgba(0, 0, 0, 0.4);
    padding: 6px;
    align-items: center;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0px 7px #000;
    cursor: pointer;
  }
  div#icones3 {
    margin-top: 15px;
    background: rgba(0, 0, 0, 0.4);
    padding: 6px;
    align-items: center;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0px 7px #000;
    cursor: pointer;
  }
  div#icones4 {
    margin-top: 15px;
    background: rgba(0, 0, 0, 0.4);
    padding: 6px;
    align-items: center;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0px 7px #000;
    cursor: pointer;
  }
  div#icones5 {
    margin-top: 15px;
    background: rgba(0, 0, 0, 0.4);
    padding: 6px;
    align-items: center;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0px 7px #000;
    margin: 15px 0px 20px;
    cursor: pointer;
  }}

 

 


  h1#titulo {
    color: #fff;
  }
`
