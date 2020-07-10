import React from "react";
import { Link } from 'react-router-dom'
import "../../main/App";
import styled from "styled-components";

export default function Nav() {
  return (
    <AsideNew className="menu-area">
      <nav className="menu">
        <Link to='/'>
          <i className= 'fa fa-home'></i> Início
        </Link>
        <Link to='/users'>
          <i className='fa fa-user'></i> Usuários
        </Link>
      </nav>
    </AsideNew>
  );
}

const AsideNew = styled.aside`
  background-color: var(--bg-dark);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.12), 2px 0 15px 0 rgba(0, 0, 0, 0.09);

  a {
    display: block;
    text-decoration: none;
    padding: 15px;
    color: white;
    font-weight: 300;

    :hover {
      background: linear-gradient(135deg, #07a7e3 0%, #32dac3 100%);
    }
  }

  @media (max-width: 768px) {
    nav {
      display: flex;
    }
  }
`;

