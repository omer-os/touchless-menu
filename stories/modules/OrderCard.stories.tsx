import { StoryFn } from "@storybook/react";
import OrderCard from "../../components/modules/cards/OrderCard";

export default {
  title: "modules/OrderCard",
  component: OrderCard,
};

const Template: StoryFn<typeof OrderCard> = (args) => (
  <div className="grid grid-cols-2 gap-3">
    <OrderCard
      order={{
        _id: "1",
        restaurant_id: "1",
        name: "Burger",
        description: "Burger",
        image:
          "https://images.unsplash.com/photo-1462027076063-1ceabb252dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Q2hpY2tlbiUyMENhZXNhciUyMFdyYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
        category: "Burger",
        price: "10",
        amount: 1,
      }}
    />
  </div>
);
export const Default = Template.bind({});
Default.args = {};
