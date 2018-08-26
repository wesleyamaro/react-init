import React from 'react';
import { App } from '../../containers/App/';

describe('App', () => {
	it('Should mount component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toHaveLength(1);
	});
});
