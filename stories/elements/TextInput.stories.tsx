import { FaSearch } from "react-icons/fa";
import { StoryFn } from "@storybook/react";
import { useState } from "react";
import TextInput from "../../components/elements/input/TextInput";

export default {
  title: "elements/TextInput",
  component: TextInput,
};

const Template: StoryFn<typeof TextInput> = (args) => {
  const [State, setState] = useState("");
  return (
    <TextInput
      {...args}
      State={State}
      setState={setState}
      placeholder="Placeholder"
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder",
  endIcon: <FaSearch />,
};
