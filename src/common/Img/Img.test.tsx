import * as React from 'react';
import { shallow } from 'enzyme';

import Img from './Img';

describe('Img', () => {
  it('should shallow render correctly', () => {
    const wrapper = shallow(<Img />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should default to empty alt attribute', () => {
    const wrapper = shallow(<Img />);

    expect(wrapper.find('img[alt=""]').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
