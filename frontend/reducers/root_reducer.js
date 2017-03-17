import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TeamMembersReducer from './team_members_reducer';
import TeamReducer from './team_reducer';

export default combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  teamMembers: TeamMembersReducer,
  team: TeamReducer
});
