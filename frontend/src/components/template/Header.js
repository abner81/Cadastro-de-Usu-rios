import React from "react";
import styled from "styled-components"
import "../../main/App";

export default function Header (props) {
  return (
    <Head className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
      </h1>
      <p className="lead text-muted">{props.subTitle}</p>
    </Head>
  );
}

const Head = styled.header`
  background-color: white;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: var(--shadow);
  padding: 0 15px;

  h1 {
    font-size: 2.0rem;
  }
`
