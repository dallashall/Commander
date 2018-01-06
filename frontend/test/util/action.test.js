import { action } from '../../util/action';

test('creates correct object', () => {
  expect.assertions(3);
  const TYPE = 'TYPE';
  const mockResponse = {
    a: 'alpha',
    b: 'bravo',
  };
  const mockAction = action(TYPE, mockResponse);
  expect(mockAction.type).toBe(TYPE);
  expect(mockAction.payload.a).toBe('alpha');
  expect(mockAction.payload.b).toBe('bravo');
});
