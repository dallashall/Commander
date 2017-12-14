import { connect } from 'react-redux';
import TaskAssignmentForm from './task_assignment_form';
import values from 'lodash/values';
import {
  createTaskAssignment,
  removeTaskAssignment
} from '../../../actions/task_assignment_actions';

const mapStateToProps = (state, ownProps) => ({
  teamMembers: values(state.teamMembers.teamMembers),
  assignmentIds: values(state.taskAssignments.allTaskAssignments).map(assignment => ({ [assignment.user_id]: assignment.id })),
  assignments: state.taskAssignments.allTaskAssignments,
  taskId: state.tasks.selectedTask.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTaskAssignment: (taskAssignment) => dispatch(createTaskAssignment(taskAssignment)),
  removeTaskAssignment: (taskAssignmentId) => dispatch(removeTaskAssignment(taskAssignmentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskAssignmentForm);