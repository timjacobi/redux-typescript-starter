import * as React from 'react';
import * as mocha from 'mocha';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from '../../../client/components/App';

describe('<App />', () => {
  it('should render a button', () => {
    const wrapper = shallow(<App requestUsers={() => {}} users={[]} />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});