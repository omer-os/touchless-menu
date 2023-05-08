import Button from "../components/blocks/button/Button";
import { StoryFn } from "@storybook/react";

export default {
  title: "blocks/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Button",
  className: "!h-[50vh]",
};
