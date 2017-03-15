import React from 'react';
import merge from 'lodash/merge';
import {Link, hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(()=>hashHistory.push('/'));
  }

  handleChange(prop){
    return (e) => {
      if (prop === "password"){
        this.setState({password: e.target.value});
      } else {
        this.setState({username: e.target.value});
      }
    };
  }
  
  redirectTo(path){
    return () => {
      hashHistory.push(path);
    };
  }

  guestLogin() {
    this.props.demoLogin().then(() => hashHistory.push('/'));
  }

  render() {
    let switchButtonRoute;
    let submitButtonText;
    let switchButtonText;
    if (this.props.formType === 'login'){
      submitButtonText = 'Log In';
      switchButtonText = 'Sign Up';
      switchButtonRoute = '/signup';
    } else {
      submitButtonText = 'Sign Up';
      switchButtonText = 'Log In';
      switchButtonRoute = '/login';
    }

    return (
      <div className={"container center-flex-content"}>
        <div className={"hero"}>
          <img src="http://dallashall.tech/wp-content/uploads/2016/12/cropped-nevada-sky-dallas.jpg" />
        </div>
        <div className={"auth col floating box"}>
          <h2 className={"thick flex center-flex-content title"}>Task Commander</h2>
          <form onSubmit={this.handleSubmit} className={"col"}>
            <input
              onChange={this.handleChange('username')}
              type="text"
              placeholder="Username"/>
            <input
              onChange={this.handleChange('password')}
              type="password"
              placeholder="Password"/>
            <input className={"btn-float white btn-single"} type="submit" value={submitButtonText} />
            <ul>
              {this.props.errors.map((error, idx) => <li className={"error-message"} key={idx}>{error}</li>)}
            </ul>
          </form>
          <div className={"row line-top"}>
            <button onClick={this.redirectTo(switchButtonRoute)}
              className={"btn-float flex flex-1 center-flex-content white"}>
              {switchButtonText}
            </button>
            <button
              onClick={this.guestLogin}
              className={"btn-float flex flex-1 center-flex-content white"}>
              Demo Log In
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;