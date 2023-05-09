import { StoryFn } from "@storybook/react";
import FoodOption from "../../components/blocks/FoodOption/FoodOption";

export default {
  title: "blocks/FoodOption",
  component: FoodOption,
};

const Template: StoryFn<typeof FoodOption> = (args) => <FoodOption {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Chicken Burger",
  img: "https://images.unsplash.com/photo-1683526922751-fcb1ac2eafe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
};
