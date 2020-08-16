import React from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';
import { Container, Content } from './styled'

const schema = Yup.object().shape({
  Telefone: Yup.string()
    .required('Telefone é obrigatória!'),
  email: Yup.string()
    .required('Email é obrigatória!'),
  password: Yup.string()
    .required('A senha é obrigatória!')
    .min(6, 'No minimo 6 carácter'),
})


function Registrar() {

  function handleSubmit({ Telefone, password }) {
    console.log('opa')

    return < Redirect to="/Jogos" />;
  }
  return (
    <>

      <Container>
        <Content>
          <Form schema={schema} onSubmit={handleSubmit} >
            <Input class="input" name="email" type="text" placeholder="Email" />
            <Input class="input" name="Telefone" type="tel" placeholder="Numero Telefone" />
            <Input class="input" name="password" type="password" placeholder="Senha" />
            <Input class="input" name="password" type="password" placeholder="Confirmar Senha" />

            <button type="submit">

              <span>Criar Conta</span>

            </button>

          </Form>
        </Content>
      </Container>
    </>
  )
}

export default Registrar;