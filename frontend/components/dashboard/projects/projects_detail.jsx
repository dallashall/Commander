import React from 'react';

export default ({currentProject, children}) => {
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
        </div>
      </div>
      {children}
    </section>
  );
};