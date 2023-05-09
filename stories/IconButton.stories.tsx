import IconButton from "../components/elements/iconbutton/IconButton";
import { StoryFn } from "@storybook/react";
import { FaShoppingCart } from "react-icons/fa";

export default {
  title: "elements/IconButton",
  component: IconButton,
};

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: <FaShoppingCart />,
};
