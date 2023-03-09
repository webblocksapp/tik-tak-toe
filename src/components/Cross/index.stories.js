// Button.stories.js|jsx
import { Cross } from '.';

export default {
  title: 'Cross',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'big'],
    },
  },
};

const Template = (args) => Cross(args);

export const Overview = Template.bind({});
Overview.args = {
  size: 'medium',
  color: 'green',
};
