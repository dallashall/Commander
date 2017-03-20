import React from 'react';
import {hashHistory} from 'react-router';

class TeamsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.team;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  component

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

  handleDelete() {
    this.props.destroyTeam(this.props.team.id).then(
      hashHistory.push('/dashboard')
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state).then(
      () => hashHistory.push('/dashboard')
    );
  }

  render() {
    let deleteButton, formTitle, single, editMembers;
    if (this.props.team.id){
      deleteButton = <button onClick={this.handleDelete} className="btn-float flex-1 center-flex-content delete red" >Delete</button>;
      formTitle = "Edit Team";
      single = "";
      editMembers = (<button onClick={() => hashHistory.push('/dashboard/teams/edit/team_members')}
        className="btn-float btn-single">Edit Members</button>);
    } else {
      formTitle = "New Team";
      single = "btn-single ";
    }
    return (
      <section className="flex flex-1">
        <div className="box white floating left-panel full-height flex col flex-half-single">
          <div className="edit-form col">
            <div className="flex flex-between flex-v-center">
              <h3>{formTitle}</h3>
              <button
              onClick={() => hashHistory.push('/dashboard')}
              className="btn-float btn-single center-flex-content">
                <i className="fa fa-times fa-fw fa-lg"></i>
              </button>
            </div>
            <form>
              <input
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange('name')}/>

              <textarea
              value={`${this.state.description}`}
              placeholder="Description"
              onChange={this.handleChange('description')} />
              
              {editMembers}

              <div className="flex row">
                {deleteButton}
                <input className={`btn-float ${single}flex-1 center-flex-content`} type="submit" value={formTitle} onClick={this.handleSubmit} />
              </div>
            </form>
          </div>
        </div>
        {this.props.children}
      </section>
    )
  }
  
}

export default TeamsForm;