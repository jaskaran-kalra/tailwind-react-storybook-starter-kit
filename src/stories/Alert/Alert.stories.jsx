import React from 'react';

import { Alert } from './Alert';
import { DESCRIPTION, HEADING } from './constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Alert',
  component: Alert,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  description: DESCRIPTION,
};

export const WithHeading = Template.bind({});
WithHeading.args = {
  heading: HEADING,
  description: DESCRIPTION,
};