import { StoryFn } from "@storybook/react";
import ButtonLink from "../components/blocks/link/ButtonLink";

export default {
  title: "blocks/ButtonLink",
  component: ButtonLink,
};

const Template: StoryFn<typeof ButtonLink> = (args) => <ButtonLink {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "ButtonLink",
  href: "/",
};
