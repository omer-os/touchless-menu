import ButtonLink from "../../components/elements/link/ButtonLink";
import { StoryFn } from "@storybook/react";

export default {
  title: "elements/ButtonLink",
  component: ButtonLink,
};

const Template: StoryFn<typeof ButtonLink> = (args) => <ButtonLink {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "ButtonLink",
  href: "/",
};
