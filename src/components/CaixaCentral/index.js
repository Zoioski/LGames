import React from 'react';
import { Link } from 'react-router-dom'
import { Meio } from '../CaixaCentral/styled';
import { connect } from 'react-redux'
import { RegraLink } from '../../pages/home/styled'
import { salvarPedido } from '../../fireBase'

function valorFormatado(atual) {

  var valor = atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return valor
}


function CaixaCentral({ dadosPros }) {

  console.log('dadosPros', dadosPros)
  return (
    <Meio>
      {dadosPros.map(products => (
        <>
          <h1 class="titulo">{products.name}</h1>
          <h3 class="descricao">{products.description}</h3>
          <img src={products.image} alt={products.name} />
          <span class="preco">{valorFormatado(products.price)}</span>
          <button type="button" onClick={() => salvarPedido(products.name, products.description, products.image, products.price)} >


            <RegraLink to="/Produto" >

              <span>Adiconar ao Perfil</span>

            </RegraLink>
          </button>
        </>
      ))}
    </Meio>
  )
}

export default connect(state => ({
  dadosPros: state.cart
}))(CaixaCentral);