import { useState } from "react";
import AmountCounter from "../components/blocks/Counter/AmountCounter";
import { StoryFn } from "@storybook/react";

export default {
  title: "blocks/AmountCounter",
  component: AmountCounter,
};

const Template: StoryFn<typeof AmountCounter> = (args) => {
  const [State, setState] = useState(0);
  return <AmountCounter {...args} State={State} setState={setState} max={2} />;
};
export const Default = Template.bind({});
Default.args = {};
