import { StoryFn } from "@storybook/react";
import MenuCategoryCard from "../../components/modules/cards/MenuCategoryCard";

export default {
  title: "modules/MenuCategoryCard",
  component: MenuCategoryCard,
};

const Template: StoryFn<typeof MenuCategoryCard> = (args) => (
  <MenuCategoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  img: "http://localhost:3000/images/kentucky.png",
  name: "Burger",
  numberOfItems: 10,
  href: "/sss",
};
