import React from "react";

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  Input,
  Button,
  InputLabel,
  User
} from './Style'


function App() {
  const users = [
    { id: Math.random, name: "Gabriel", age: 22 },
    { id: Math.random, name: "Maria", age: 21 },
  ];

  return (
    <Container>
      <Imagem alt="Logo-Imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</ InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</ InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="Seta" src={Arrow} /></Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name}</p> <p>  {user.age}</p>
              <button><img src={Trash} alt="Lata de lixo"></img></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}



export default App