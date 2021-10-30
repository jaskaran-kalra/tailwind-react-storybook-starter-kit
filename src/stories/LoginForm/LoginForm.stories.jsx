import { LoginForm } from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LoginForm',
  component: LoginForm,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LoginForm {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  onSubmit: () => {}
};

export const WithWelcomeText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithWelcomeText.args = {
  welcomeText: 'Welcome Back',
  onSubmit: () => {}
};