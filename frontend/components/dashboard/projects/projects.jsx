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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(path) {
    return (e) => {
      this.toggleMenu();
      hashHistory.push(`/dashboard/project/new`);
    };
  }  

  render() {
    let { allProjects, teamProjects, currentProject, team, children } = this.props;
    let projectsList, menuVisibility, menuArrow, projectName;
    if (this.state.menuVisible) {
      menuVisibility = ""; 
      menuArrow = "fa-caret-down";
    } else {
      menuVisibility = "hidden";
      menuArrow = "fa-caret-right";
    }
    if (currentProject.team_id != team.id) {
      projectName = "";
    } else {
      projectName = currentProject.name;
    }
    if (team.id) {
      projectsList = (
        <div className="teams">
          <div className="selected-container">
            <div onClick={this.toggleMenu} className="selected btn-dropdown">
              <strong><i className={`fa ${menuArrow} fa-fw fa-lg`}></i>
              Projects</strong><span>{projectName}</span>
            </div>
          </div>
          <ul className={`${menuVisibility}`}>
            <li>
              <button
                className="btn-dropdown center-flex-content"
                onClick={this.handleClick("new")}>
                New Project <i className="fa fa-plus fa-fw"></i></button>
              </li>
            {teamProjects.length < 1 ?  (<li>No Projects Found for this Team</li>) : (teamProjects.map(project => (
              <ProjectListItem
                setCurrentProject={this.props.setCurrentProject}
                toggleMenu={this.toggleMenu}
                key={project.id}
                project={project} />
              ))
            )}
          </ul>
        </div>
      );
    } else {
      projectsList = (
      <div key="project-list" className="teams">
        <div className="selected-container">
          <div onClick={this.toggleMenu} className="selected btn-dropdown">
            <strong><i className={`fa ${menuArrow} fa-fw fa-lg`}></i>
                Team Projects</strong><span>{projectName}</span>
            </div>
          </div>
        </div>  
      );
    }
    return (
      projectsList
    );
  };
}

export default Projects;