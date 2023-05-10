import { StoryFn } from "@storybook/react";
import BottomNavigation from "../../components/modules/bottomnav/BottomNavigation";

export default {
  title: "Modules/BottomNavigation",
  component: BottomNavigation,
};

const Template: StoryFn<typeof BottomNavigation> = (args) => (
  <BottomNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {};
