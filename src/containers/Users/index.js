import React, { useState, useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";


import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  Button,
  User
} from './Style'



function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
      async function fetchUsers (){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()
}, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsesr = users.filter(user => user.id !== userId);
    setUsers(newUsesr);
  }
  
  function  goBackPage (){
    history.goBack()
  }


  return (
    <Container>
      <Imagem alt="Logo-Imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name}</p> <p>  {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata de lixo"></img>
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
        <img alt="Seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}



export default Users