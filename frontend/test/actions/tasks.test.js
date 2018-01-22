import mock from 'xhr-mock';
import {
  createTask,
  updateTask,
  fetchSingleTask,
  fetchProjectTasks,
  deleteTask,
  RECEIVE_SINGLE_TASK,
  RECEIVE_TASKS,
  REMOVE_TASK,
  RECEIVE_TASK_ERRORS,
} from '../../actions/tasks';

describe('task actions', () => {
  describe('createTask()', () => {
    beforeEach(() => mock.setup());

    afterEach(() => mock.teardown());

    it('should dispatch a valid action on API success', async () => {
      expect.assertions(2);
      // Look up mock_xhr docs to fix
      mock.post('/tasks', {
        status: 201,
        reason: 'Created',
        body: '{"data":{"foo":"bar"}}',
      });
      const formTask = { foo: 'bar' };
      const taskPromise = await createTask(formTask)(action => action);

      expect(taskPromise.type).toBe(RECEIVE_SINGLE_TASK);
      expect(taskPromise.payload.foo).toBe('bar');
    });
  });
});
