import React from 'react';
import { hashHistory } from 'react-router';
import TasksContainer from '../tasks/tasks_container';
import TaskDetailContainer from '../tasks/task_detail_container';

class ProjectsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: undefined
    }
    this.setDetailView = this.setDetailView.bind(this);
  }
  
  setDetailView(type) {
    return () => {
      const details = type ? (<TaskDetailContainer
        closeTask={this.setDetailView(undefined)}  
        editTask={ this.setDetailView("edit") }
        type={type} />) : undefined;
        
      this.setState({
        details
      });
      console.log(type);
    }
  } 
  render() {
    let { currentProject, children } = this.props;
    return (
      <section className="flex flex-1">
        <div className="box white floating left-panel full-height flex col flex-half-single">
          <div className="edit-form col">
            <div className="flex flex-between flex-v-center">
              <h3>{currentProject.name}</h3>
              <button
              onClick={() => hashHistory.push('/dashboard')}
              className="btn-float btn-single center-flex-content">
                <i className="fa fa-times fa-fw fa-lg"></i>
              </button>
            </div>
            <p>{currentProject.description}</p>
            <button
              className="btn btn-float btn-single"
              onClick={() => hashHistory.push('/dashboard/project/edit')}>
              Edit Project
            </button>
          </div>

          <TasksContainer
            viewTask={this.setDetailView("view")}
            newTask={this.setDetailView("new")} />
          
        </div>
        {this.state.details}
      </section>
    );
  };
};

export default ProjectsDetail;