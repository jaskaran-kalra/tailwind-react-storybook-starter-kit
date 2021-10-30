import { Toggle } from './Toggle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Toggle',
  component: Toggle,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Toggle {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  isChecked: false,
  onChange: () => {},
};

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
  isChecked: true,
  onChange: () => {},
};
