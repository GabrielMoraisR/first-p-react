import React from "react";

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

import {
Container,
H1,
Imagem,
ContainerItens,
Input,
Button,
InputLabel
} from './Style'


function App () {

  return (
    <Container>
      <Imagem alt="Logo-Imagem" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</ InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</ InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="Seta" src={Arrow} /></Button>

      </ContainerItens>
    </Container>
  );
}



export default App