import * as React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('Spinner', () => {
  it('should shallow render correctly', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom class name', () => {
    const className = 'Test__spinner';
    const wrapper = shallow(<Spinner className={ className } />);

    expect(wrapper.hasClass(className)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
