import { StoryFn } from "@storybook/react";
import Badge from "../../components/elements/badge/Badge";
import IconButton from "../../components/elements/iconbutton/IconButton";

export default {
  title: "elements/Badge",
  component: Badge,
};

const Template: StoryFn<typeof Badge> = (args) => {
  return (
    <IconButton className="relative">
      <Badge {...args} />
      hello
    </IconButton>
  );
};
export const Default = Template.bind({});
Default.args = {
  number: 1,
};
