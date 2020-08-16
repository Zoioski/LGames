import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'
import { Container, Content, Profile } from '../Header/styled';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      usuario: [],

    }
  }

  componentDidMount() {

    const dadosUsuario = firebase.database().ref('Usuario')

    dadosUsuario.on('value', snap => {

      var usuario = snap.val()


      this.setState({

        usuario

      })


    })
  }

  render() {
    const { usuario } = this.state
    return (

      <Container>
        <Content>
          <aside>
            <Profile>
              <div>
                <strong>{usuario.nome}</strong>
                <Link to="/Perfil">Meu Perfil</Link>
              </div>
              <img src={usuario.img} alt="Ramon" />
            </Profile>
          </aside>
        </Content>
      </Container >
    )
  }

}