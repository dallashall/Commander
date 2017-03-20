import React from 'react';
import { hashHistory } from 'react-router';
import ProjectListItem from './project_list_item';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.team != nextProps.team) {
      this.props.fetchTeamProjects(nextProps.team.id);
    }
  }

  render() {
    let { allProjects, teamProjects, team, children } = this.props;
    let projectsList;
    if (team.id) {
      projectsList = (
        <div>
          <h3>{team.name} Projects</h3>  
          <ul>
            {teamProjects.map(project => <ProjectListItem setCurrentProject={this.props.setCurrentProject} key={project.id} project={project} />)}
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