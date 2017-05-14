import React from 'react';
import { hashHistory } from 'react-router';
import TasksContainer from '../tasks/tasks_container';
import TaskDetailContainer from '../tasks/task_detail_container';

class ProjectsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: undefined,
      animationCSS: "half-slide-leave"
    }
    this.setDetailView = this.setDetailView.bind(this);
    this.animateEnter = this.animateEnter.bind(this);
    this.animateLeave = this.animateLeave.bind(this);
  }
  
  componentDidMount() {
    if (this.props.params.taskId) {
      this.setDetailView("view")();
    }
  }

  animateLeave() {
    this.setState({ animationCSS: "half-slide-leave" });
    this.setState({ animationCSS: "half-slide-leave half-slide-leave-active" });
  }
  
  animateEnter() {
    this.setState({ animationCSS: "half-slide-enter" });
    this.setState({ animationCSS: "half-slide-enter half-slide-enter-active" });
  }

  setDetailView(type) {
    return () => {
      const details = type ? (<TaskDetailContainer
        closeTask={this.setDetailView(undefined)}  
        editTask={this.setDetailView("edit")}
        viewTask={this.setDetailView("view")}
        type={type} />) : undefined;
      this.animateEnter();
      this.setState({ details });
    }
  } 


  render() {
    let { currentProject, children } = this.props;
    return (
      <section key="project-detail" className="flex flex-1">
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
            newTask={this.setDetailView("new")}
            animateLeave={this.animateLeave}
          />
          
        </div>
        <div className={this.state.animationCSS}>
          {this.state.details}
        </div>
      </section>
    );
  };
};

export default ProjectsDetail;