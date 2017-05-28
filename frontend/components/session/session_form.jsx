import React from 'react';
import merge from 'lodash/merge';
import {Link, hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    this.state = {
      username: "",
      password: "",
      team_hash: props.router.params.team_hash
    };
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn && this.props.router.params.team_hash) {
      const team_hash = this.props.router.params.team_hash
      console.log('====================================');
      console.log(this.props);
      console.log(team_hash);
      console.log('====================================');
      this.props.joinTeam(team_hash).then(() => history.pushState('/'));
    }
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
          <h1 className={"flex center-flex-content flex-baseline title"}><small>Task</small>Commander</h1>
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