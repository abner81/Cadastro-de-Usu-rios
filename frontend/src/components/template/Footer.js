import React from 'react'
import "../../main/App";
import styled from "styled-components";

export default function Footer() {
  return (
    <Rodape className="footer text-center">
      <span>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por
        <strong> Abner Machado </strong>
      </span>
    </Rodape>
  );
}

const Rodape = styled.footer`
  font-size: 1.0rem;
`
