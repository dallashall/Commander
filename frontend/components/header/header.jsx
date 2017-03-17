import React from 'react';
import {hashHistory} from 'react-router';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillUpdate(nextProps, nextState){
    if (!nextProps.currentUser) {
      hashHistory.push('/login');
    }
  }

  handleLogout () {
    this.props.logout();
  }
  
  render() {
    let {currentUser} = this.props;
    let username = currentUser ? currentUser.username : "";
    return (
      <nav className={"top-bar"}>
        <button className="btn-text btn-bars" onClick={this.handleLogout.bind(this)}>Log Out</button>
        <h3>{username}</h3>
      </nav>
    );
  }
}

export default Header;