import styled from 'styled-components';


export const Container = styled.div`
  max-height: 40px;
  padding: 0 30px;
  max-width: 250px;
  background: #fff;
  display: right;
  align-items: left;
  border-radius: 0 20px ;
  border-color: #fff;
  background: #1C1C1C;
  margin: 5px;
  padding: 5px ;
  box-shadow: 0px 0px 30px #000;
  float: right;

`;

export const Content = styled.div`
 
`;

export const Profile = styled.div`
   display: flex;
  
   margin-left: 100px;
   height: 100%;

   div {
    text-align: right;
    margin-right:10px;
   }

   strong {
    display: block;
    color: #fff;
   }

   a {
     display: block;
     margin-top: 2px;
     font-size: 12px;
     color: #fff;
     text-decoration: none;
   }

   img {
     height: 32px;
     border-radius: 50%;
      box-shadow: 0px 0px 10px #000;
  
   }


`;
