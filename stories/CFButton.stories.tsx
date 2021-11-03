import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import CFButton from "./CFButton";
import { Heading, Select, Text, VStack } from "@chakra-ui/react";
import { CheckCircleIcon, ChevronDownIcon } from "@chakra-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Button",
  component: CFButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
  decorators: [withDesign],
} as ComponentMeta<typeof CFButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CFButton> = (args) => (
  <VStack align="flex-start">
    <Text>Medium</Text>
    <CFButton {...args}>{args.children}</CFButton>
    <CFButton
      {...args}
      isLoading={true}
      loadingText="brandPrimary Loading (WIP)"
    >
      {args.children} Loading (WIP)
    </CFButton>

    <CFButton {...args} isDisabled={true}>
      {args.children} disabled
    </CFButton>

    <Text>Small</Text>
    <CFButton {...args} size="sm">
      {args.children}
    </CFButton>

    <CFButton {...args} size="sm" rightIcon={<ChevronDownIcon />}>
      {args.children}
    </CFButton>
    <CFButton
      {...args}
      size="sm"
      leftIcon={<CheckCircleIcon color="whatsapp.500" />}
    >
      {args.children}
    </CFButton>
  </VStack>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "brandPrimary",
  children: "brandPrimary",
  size: "lg",
};

let params = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/ziXjEufb8v3FVDZQo55ZK2/UI-Designs?node-id=199%3A62",
  },
};
Primary.parameters = params;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "brandSecondary",
  children: "brandSecondary",
};

Secondary.parameters = params;
