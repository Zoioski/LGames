import React from 'react';
import Hearder from '../../components/Header'
import CaixaCentral from '../../components/CaixaCentral'
import BarraLateral from '../../components/BarraLateral'
import { Container } from '../home/styled'
import { Centro } from './styled'
function Produto() {
  return (
    <Container>
      <Hearder />
      <BarraLateral />
      <CaixaCentral>

      </CaixaCentral>
    </Container>
  )
}

export default Produto;
