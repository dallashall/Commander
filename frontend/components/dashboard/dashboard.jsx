import React from 'react';
import HeaderContainer from '../header/header_container';
export default (props) => {
  return (
    <div className={"container full-height"}>
      <nav className={"sidebar"}></nav>
      <HeaderContainer />
    </div>
  );
}