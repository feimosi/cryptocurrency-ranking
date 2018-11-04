import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './Button';

jest.mock('common/Link', () => () => <a href="" className="Link">Test</a>);

describe('Button', () => {
  it('should shallow render correctly', () => {
    const wrapper = shallow(<Button>Test</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display a loader', () => {
    const wrapper = shallow(<Button loading>Test</Button>);

    expect(wrapper.find('.Button__loader').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should propagate click event', () => {
    const onClickHandler = jest.fn();
    const wrapper = shallow(<Button onClick={ onClickHandler }>Test</Button>);

    wrapper.simulate('click');
    expect(onClickHandler).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a link when URL is passed', () => {
    const wrapper = mount(<Button to="/">Test</Button>);

    expect(wrapper.find('.Link').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
