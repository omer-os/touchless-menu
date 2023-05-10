import HorizontalSelectableMenu from "@/components/elements/Select/HorizontalSelectableMenu";
import { useState } from "react";

export default {
  title: "elements/HorizontalSelectableMenu",
  component: HorizontalSelectableMenu,
};

export const Main = () => {
  const [State, setState] = useState("all");

  return (
    <div className="w-full">
      <HorizontalSelectableMenu
        State={State}
        setState={setState}
        options={[
          {
            label: "All",
            value: "all",
          },
          {
            label: "Burgers",
            value: "burgers",
          },
        ]}
      />
    </div>
  );
};
