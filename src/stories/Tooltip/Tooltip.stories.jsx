import { TEXT } from './constants';
import { Tooltip } from './Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tooltip',
  component: Tooltip,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <div className="mt-8 w-100 flex justify-center">
      <Tooltip {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  text: TEXT,
};
