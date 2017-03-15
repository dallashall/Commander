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
      <div>
        <h2>{username}</h2>
        <button onClick={this.handleLogout.bind(this)}>Log Out</button>
      </div>
    );
  }
}

export default Header;