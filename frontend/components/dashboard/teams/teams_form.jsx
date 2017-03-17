import React from 'react';

class TeamsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.team;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop){
    return (e) => {
      switch (prop) {
        case "name":
          this.setState({ name: e.target.value });
          break;
        case "description":
          this.setState({description: e.target.value});
        default:
          break;
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <input type="text" onChange={this.handleChange('name')}/>
        <textarea onChange={this.handleChange('description')}/>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    )
  }
  
}

export default TeamsForm;