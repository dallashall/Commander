import { connect } from 'react-redux';
import values from 'lodash/values';
import TaskAssignmentIndex from './task_assignments_index';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { assigneesNames: values(state.taskAssignments.allTaskAssignments).map(assignment => assignment.username) };
}

export default connect(mapStateToProps, null)(TaskAssignmentIndex);