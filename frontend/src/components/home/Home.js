import React from 'react'
import Main from '../template/Main'

export default function Home() {
  return (
      <Main
        icon="home"
        title="Início"
        subTitle="Segundo projeto do capítulo de react"
      >
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">
          Sistema para exemplificar a construção de um sistema de cadastro feito
          em React.js
        </p>
      </Main>
  );
}
