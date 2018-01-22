import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TeamMembersReducer from './team_members_reducer';
import ProjectReducer from './project_reducer';
import TasksReducer from './tasks_reducer';
import TaskAssignmentsReducer from './task_assignments_reducer';

export default combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  teamMembers: TeamMembersReducer,
  project: ProjectReducer,
  tasks: TasksReducer,
  taskAssignments: TaskAssignmentsReducer,
});
