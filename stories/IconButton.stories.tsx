import IconButton from "../components/blocks/iconbutton/IconButton";
import { StoryFn } from "@storybook/react";
import { FaShoppingCart } from "react-icons/fa";

export default {
  title: "blocks/IconButton",
  component: IconButton,
};

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: <FaShoppingCart />,
};
