import React, { useState } from "react";

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
  const [ users, setUsers] = useState([]);
  const [ name, setName] = useState();
  const [ age, setAge] = useState();


  function addNewUser(){
     setUsers([...users, {id: Math.random(), name, age}])

     console.log(users)
  }


  function changeInputName(event){
    setName(event.target.value)
  }

  function changeInputAge(event){
    setAge(event.target.value)
  }


  return (
    <Container>
      <Imagem alt="Logo-Imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</ InputLabel>
        <Input onChange={changeInputName} placeholder="Nome" />

        <InputLabel>Idade</ InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />
        </Button>

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