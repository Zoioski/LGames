import React from 'react';
import { Link } from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import { GiBarracks } from "react-icons/gi";
import { GoCloudDownload, GoCreditCard, GoBell, GoDeviceDesktop } from "react-icons/go";
import { Container, Botao } from '../BarraLateral/styled';

export default function BarraLateral() {
  return (
    <Container>

      <Botao>
        <div id="Icones">
          <div class="icone2" >
            <Link to="/Jogos" >
              <GiBarracks class="icone" size={27} color="#fff" />
            </Link>
          </div>
          <div class="icone2">
            <GoCloudDownload class="icone" size={27} color="#fff" />
          </div>
          <div class="icone2">
            <GoCreditCard class="icone" size={27} color="#fff" />
          </div>
          <div class="icone2">
            <GoDeviceDesktop class="icone" size={27} color="#fff" />
          </div>
          <div class="icone2">
            <GoBell size={27} class="icone" color="#fff" />
          </div>
        </div>
      </Botao>
    </Container>
  )

}