import { StoryFn } from "@storybook/react";
import MenuItemCard from "../../components/modules/cards/MenuItemCard";

export default {
  title: "modules/MenuItemCard",
  component: MenuItemCard,
};

const Template: StoryFn<typeof MenuItemCard> = (args) => (
  <div className="grid grid-cols-4 gap-5 w-full h-screen">
    <MenuItemCard {...args} />
    <MenuItemCard {...args} />
    <MenuItemCard {...args} />
    <MenuItemCard {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  img: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  title: "Beef Burger",
  price: "12.000 IQD",
  link: "/",
};
