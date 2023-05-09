import Button from "../../components/elements/button/Button";
import { StoryFn } from "@storybook/react";

export default {
  title: "elements/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Button",
  className: "!h-[50vh]",
};
