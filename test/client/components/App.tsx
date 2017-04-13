import * as React from 'react';
import * as mocha from 'mocha';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import { App } from '../../../client/components/App';
import { noop } from '../../../client/util';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App requestUsers={noop} users={[]} />);
    expect(wrapper).to.have.length(1);
  });

  context('when the component is mounted', () => {
    it('should call the requestUsers handler', () => {
      const requestUsers = spy();
      const wrapper = mount(<App requestUsers={requestUsers} users={[]} />);
      expect(requestUsers.called).to.be.true;
    });
  });
});