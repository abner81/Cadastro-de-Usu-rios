import React, { useState, useEffect } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import Table from './Table';
// import Form from './Form';

const PropsDoHeader = {
  icon: "users",
  title: "Usuários",
  subTitle: "Cadastro de usuários: Incluir, Listar, Alterar e excluir",
};
const urlBackEnd = 'http://localhost:3001/users'

export default function UserCrud() {

  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [listState, setListState] = useState([]);
  const [idState, setIdState] = useState(0);

  useEffect(() => {
    const asyncReq = async () => {
      const req = await axios(urlBackEnd)
      const data = req.data
      setListState(data)
    }
    asyncReq()
  }, [])

  const handleSetStates = (event) => {
    const targetValue = event.target.value;
    const targetName = event.target.name;

    targetName === "name"
      ? setNameState(targetValue)
      : setEmailState(targetValue);
  };

  const clearForm = () => {
    setNameState("");
    setEmailState("");
  };

  const user = {
    name: nameState,
    email: emailState,
  };

  const userComId = {
    name: nameState,
    email: emailState,
    id: idState,
  };

  const saveForm = async () => {
    const userId = userComId.id
    const methodRequisition = userId ? 'put' : 'post'
    const url = userId ? `${urlBackEnd}/${userId}` : urlBackEnd
    const req = await axios[methodRequisition](url, user);
    const list = getUpdateList(req.data)

    setListState(list)
    setNameState("");
    setEmailState("");
    setIdState(0)
  }

  const getUpdateList = (user, add = true) => {
    const list = listState.filter(u => u.id !== user.id)
    if (add) list.unshift(user)
    return list
  }

  const loadUserInField = (user) => {
    const userName = user.name
    const userEmail = user.email
    const userId = user.id

    setIdState(userId)
    setNameState(userName);
    setEmailState(userEmail);
  }

  const removeUserInList = async (user) => {
    const req = await axios.delete(`${urlBackEnd}/${user.id}`);
      const list = getUpdateList(user, false)
      setListState(list)
  }

  return (
    <Main {...PropsDoHeader}>
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={nameState}
                onChange={handleSetStates}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={emailState}
                onChange={handleSetStates}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={saveForm}>
              Salvar
            </button>

            <button className="btn btn-secondary ml-2" onClick={clearForm}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
      <Table
        propsListState={listState}
        functionLoad={loadUserInField}
        functionRemove={removeUserInList}
      />
    </Main>
  );
}
