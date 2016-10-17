import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';


describe(`About component`, () => {

	it(`Renders correctly...`, () => {
		const component = renderer.create(
			<About />
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});