import React, { Component } from 'react';
import Hearder from '../../components/Header'
import { RegraLink } from '../../pages/home/styled'
import { Container } from '../home/styled'
import BarraLateral from '../../components/BarraLateral'
import { Meio } from '../../components/CaixaCentral/styled';
import * as firebase from 'firebase'
import { excluirPedido } from '../../fireBase'
import { MdDelete } from 'react-icons/md'

function valorFormatado(atual) {

  var valor = atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return valor
}

export default class Usuario extends Component {
  constructor() {
    super();
    this.state = {
      usuario: [],
      pedidos: []
    }
  }

  componentDidMount() {

    const dadosPedido = firebase.database().ref('Pedidos/')

    const dadosUsuario = firebase.database().ref('Usuario')

    dadosPedido.on('value', snapSot => {
      var pedidos = snapSot.val()

      this.setState({

        pedidos
      })

    })

    dadosUsuario.on('value', snap => {

      var usuario = snap.val()


      this.setState({

        usuario

      })

    })
  }


  renderObj = () => {
    const { pedidos } = this.state
    console.log('pedido', pedidos)
    return (
      Object.keys(pedidos).map((obj, i) => {
        return (

          <div class="compras" >
            <img src={pedidos[obj].image} alt={pedidos[obj].name} />
            <p>
              <h4 class="texto">{pedidos[obj].name}</h4>
            </p>
            <p>
              <h4 class="texto">{valorFormatado(pedidos[obj].price)}</h4>
            </p>

            <div class="botao" onClick={() => excluirPedido(obj)}>
              <MdDelete size={20} color="#ffa500" />
            </div>

          </div>

        )
      }))
  }

  render() {
    const { usuario } = this.state
    return (

      <Container>
        <Container>
          <Hearder />
          <BarraLateral />
          <Meio>
            <h1 class="titulo">Dados Usuario</h1>
            <p class="dadosUsuario">
              <h3 class="dadosUsuario" >User: {usuario.nome}</h3>
            </p>
            <p class="dadosUsuario">
              <h3 class="dadosUsuario" >Email: {usuario.Email}</h3>
            </p>


            <img class="img" src={usuario.img} alt={usuario.img} />



            {this.renderObj()}
            <button type="button"  >


              <RegraLink to="/pagamento" >

                <span>Finalizar Pedido</span>

              </RegraLink>
            </button>

          </Meio>
        </Container>
      </Container >

    )
  }
}




