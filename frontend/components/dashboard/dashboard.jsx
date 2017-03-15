import React from 'react';
import HeaderContainer from '../header/header_container';
export default (props) => {
  return (
    <div className={"container full-height"}>
      <nav className={"sidebar"}>
        <div className={"logo"}>
          <h2>Task Commander</h2>
        </div>
        <div className={"teams"}>
            <div className={"selected"}>A-Team</div>
          <ul>
            <li value="A-team">A-Team</li>
            <li value="A-team">B-Team</li>
            <li value="A-team">C-Team</li>
          </ul>
        </div>
      </nav>
      <HeaderContainer />
    </div>
  );
}