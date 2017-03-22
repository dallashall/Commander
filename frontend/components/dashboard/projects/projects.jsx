import React from 'react';
import { hashHistory } from 'react-router';
import ProjectListItem from './project_list_item';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibile: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.team != nextProps.team || this.props.teamProjects.length != nextProps.teamProjects.length) {
      this.props.fetchTeamProjects(nextProps.team.id);
    }
  }

  toggleMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  }

  render() {
    let { allProjects, teamProjects, currentProject, team, children } = this.props;
    let projectsList, menuVisibility, menuArrow;
    if (this.state.menuVisible) {
      menuVisibility = ""; 
      menuArrow = "fa-caret-down";
    } else {
      menuVisibility = "hidden";
      menuArrow = "fa-caret-right";
    }
    if (team.id) {
      projectsList = (
        <div className="teams">
          <div className="selected-container">
            <div onClick={this.toggleMenu} className="selected btn-dropdown">
              <strong><i className={`fa ${menuArrow} fa-fw fa-lg`}></i>
              {currentProject.name || "Select a Project"}</strong>
            </div>
          </div>
          <ul className={`${menuVisibility}`}>
            <li>
              <button
                className="btn-dropdown center-flex-content"
                onClick={() => hashHistory.push('/dashboard/project/new')}>
                New Project <i className="fa fa-plus fa-fw"></i></button>
              </li>
            {teamProjects.length < 1 ?  (<li>No Projects Found for this Team</li>) : (teamProjects.map(project => (
              <ProjectListItem
                setCurrentProject={this.props.setCurrentProject}
                key={project.id}
                project={project} />
              ))
            )}
          </ul>
        </div>
      );
    } else {
      projectsList = (
        <div>
          <h3>Select a Team to View Projects</h3>
        </div>
      );
    }
    return (
      projectsList
    );
  };
}

export default Projects;