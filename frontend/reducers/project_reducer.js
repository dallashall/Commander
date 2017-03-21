import merge from 'lodash/merge';
import {
    RECEIVE_ALL_PROJECTS,
    RECEIVE_TEAM_PROJECTS,
    REMOVE_PROJECT,
    RECEIVE_PROJECT,
    SELECT_PROJECT
} from '../actions/project_actions';

const _initial_state = {
    allProjects: {},
    teamProjects: {},
    currentProject: {}
}

export default (state = _initial_state, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            newState.allProjects = action.allProjects;
            return newState;
        case RECEIVE_TEAM_PROJECTS:
            newState.teamProjects = action.teamProjects;
            return newState;
        case RECEIVE_PROJECT:
            newState.allProjects[action.project.id] = action.project;
            newState.teamProjects[action.project.id] = action.project;
            newState.currentProject = action.project;
            return newState;
        case SELECT_PROJECT:
            newState.currentProject = newState.teamProjects[action.projectId];
            return newState;
        case REMOVE_PROJECT:
            delete(newState.allProjects[action.projectId]);
            delete(newState.teamProjects[action.projectId]);
            newState.currentProject = {};
            return newState;
        default:
            return state;
    }
}