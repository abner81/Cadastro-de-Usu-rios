import React from "react";

export default function Table({
  propsListState,
  functionLoad,
  functionRemove,
}) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {propsListState.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => functionLoad(user)}
                >
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => functionRemove(user)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
