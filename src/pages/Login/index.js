import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import { Container, Content, BotaoLink } from './styled'
//import * as Yup from 'yup';
//const schema = Yup.object().shape({
//  Telefone: Yup.string()
//    .required('Telefone é obrigatória!'),
//  password: Yup.string()
//    .required('A senha é obrigatória!')
//    .min(6, 'No minimo 6 carácter'),
//})




function Login() {

  function handleSubmit({ Telefone, password }) {


  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit} >
          <Input class="input" name="Telefone" type="tel" placeholder="Numero Telefone" />
          <Input class="input" name="password" type="password" placeholder="Senha" />
          <BotaoLink to="/Jogos">
            <button type="submit"  >

              <span>Acessar</span>

            </button>
          </BotaoLink>
          <Link to="/register">Criar Conta!</Link>

        </Form>
      </Content>
    </Container>

  )

}

export default Login;