import { StoryFn } from "@storybook/react";
import OrderCard from "../../components/modules/cards/OrderCard";

export default {
  title: "modules/OrderCard",
  component: OrderCard,
};

const Template: StoryFn<typeof OrderCard> = (args) => <div className="grid grid-cols-2 gap-3">
  <OrderCard {...args} />
  <OrderCard {...args} />
  <OrderCard {...args} />
  <OrderCard {...args} />
</div>;
export const Default = Template.bind({});
Default.args = {
  title: "Chicken Burger",
  category: "Burger",
  price: "Rp. 20.000",
  img: "https://images.unsplash.com/photo-1683526922751-fcb1ac2eafe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
};
