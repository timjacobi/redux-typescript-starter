import * as React from 'react';
import * as mocha from 'mocha';
import * as Immutable from 'seamless-immutable';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import { App } from '../../../client/components/App';
import { noop } from '../../../client/util';

describe('<App />', () => {
  it('should render a button', () => {
    const wrapper = shallow(<App requestUsers={noop} users={Immutable.from([])} />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should call the requestUsers handler when the button is clicked', () => {
    const requestUsers = spy();
    const wrapper = shallow(<App requestUsers={requestUsers} users={Immutable.from([])} />);
    wrapper.find('button').simulate('click');
    expect(requestUsers.called).to.be.true;
  });
});