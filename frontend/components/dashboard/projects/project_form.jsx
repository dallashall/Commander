import React from 'react';
import { hashHistory } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentProject;
    this.state.team_id = this.state.team_id || this.props.team.id;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componenDidMount() {
    if (!this.props.team.id) {
      hashHistory.push('/dashboard');
    }
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
    this.props.formAction(this.state).then(
      () => hashHistory.push('/dashboard/project')
    );
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyProject(this.props.currentProject.id);
    hashHistory.push('/dashboard');
  }

  render() {
    let { currentProject } = this.props;
    let deleteButton, formTitle, single, submitText;

    if (this.props.currentProject.id){
      deleteButton = <button onClick={this.handleDelete} className="btn-float flex-1 center-flex-content delete red" >Delete</button>;
      formTitle = `Edit ${currentProject.name}`;
      submitText = "Save Changes";
      single = "";
    } else {
      formTitle = "New Project";
      submitText = "Create Project";
      single = "btn-single ";
    }
    return (
      <div key="poject-form" className="box white floating left-panel full-height flex col flex-half-single">
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
              onChange={this.handleChange('name')} />

            <textarea
              value={`${this.state.description}`}
              placeholder="Description"
              onChange={this.handleChange('description')} />

            <div className="flex row">
              {deleteButton}
              <input className={`btn-float ${single}flex-1 center-flex-content`} type="submit" value={submitText} onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectForm;
