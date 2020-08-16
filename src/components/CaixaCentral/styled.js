import styled from 'styled-components';

export const Meio = styled.div`
    margin-left: auto;
    margin-top:150px;
    margin-right: auto;
    background: #1C1C1C;
    border-radius:4px;
    max-width: 800px;
    width: 100%;
    height: 400px;
    padding: 10px;
    box-shadow: 0px 0px 30px #000;

    .valor {
        display: column;
        
    }

    .texto {
 
      
    }

    .img {
        position: absolute; top:26%; left:64%;
        max-width: 200px;
        max-height: 100px;
        float: left;
        width: 100%;
    }

    .botao {
        max-width: 30px;
        
       
        width: 100%;
        cursor: pointer;
        background:#4f4f4f;
        position:relative;
    }

    .compras {
        display:block;
        background: #4f4f4f;;
        margin: 10px;
        padding: 10px;
        border-radius:4px;
        max-width: 240px;
        max-height: 70px;
        float: left;
        width: 100%;
        img {
            max-width: 80px;
            float: right;
            
        }
        height: 100%;
    }

    .titulo {
        color: #fff3;
        margin: 10px;
      
    }
    .dadosUsuario {
        color: #fff;
        margin: 10px;
        

        p {
           
        background:  #fff;;
    }
    }

    button {
        position: relative;
      margin: 5px 0 0;
      height: 44px;
      background: #000;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2;
      position: absolute; top:80%; left:69%;
      align-items: center;
      display: flex;
      float: right;
      
    

      span {
        flex:1;
        text-align: center;
        font-weight: bold;
      }
    }

    img {
    float: right;
    
    align-self: center;
    box-shadow: 0px 0px 10px #000;
    border-radius: 4px;
    width: 100%;
    border-radius: 4px;
    max-width: 300px;
    }

    .titulo {
        margin-top: 0px ;
        color: #fff;
    }

    .descricao {
        align-self: center;
        margin-left: 30px;
        margin-top: 20px ;
        color: #fff;
        width: 420px;
        text-align: justify;
        float: left;
    }

    .preco {
        position: absolute; top:80%; left:21%;
        color: #fff;    
        font-size: 30px;
        
    }
`