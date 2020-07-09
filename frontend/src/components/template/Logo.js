import React from 'react'
import { Link } from "react-router-dom";
import '../../main/App'
import logo from '../../assets/images/logo.png'
import styled from 'styled-components'

export default function Logo() {
  return (
    <Aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding: 0 15px;
    width: 100%;
  }
`

