import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CFButton from './CFButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: CFButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CFButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CFButton> = (args) => (
	<CFButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	variant: 'primary',
	size: 'lg',
	children: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'secondary',
	children: 'Test',
};
