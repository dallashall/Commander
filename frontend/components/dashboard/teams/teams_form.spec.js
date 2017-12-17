import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TeamsForm from './teams_form';

configure({ adapter: new Adapter() });

describe('TeamsForm', () => {
  test('handleChange should update team form', () => {
    const wrapper = shallow(
      <TeamsForm team={{
          id: 1,
          name: 'Test Team',
          description: 'Test Description'
        }}
      />
    );
    const subject = wrapper.instance();
    const changeName = subject.handleChange('name');
    changeName({ target: { value: 'Changed!' } });
    expect(subject.state.name).toEqual('Changed!');

    const changeDescription = subject.handleChange('description');
    changeDescription({ target: { value: 'Changed!' } });
    expect(subject.state.description).toEqual('Changed!');
  });
});