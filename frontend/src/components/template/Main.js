import React, { Fragment } from 'react'
import Header from './Header'
import styled from "styled-components";

export default function Main(props) {
  return (
    <Fragment>
      <Header {...props} />
      <main className="content container-fluid">
        <DivMain className="p-3 mt-3">
          {props.children}
        </DivMain>
      </main>
    </Fragment>
  );
}

const DivMain = styled.div`
  background-color: white;
  box-shadow: 0 0 15px #0004;
`
