import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import CFButton from "./CFButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
  HStack,
  Select,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Tooltip",
  component: Tooltip,
  decorators: [withDesign],
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <>
    <Text>Tooltips (various placements)</Text>
    <HStack mt={12} justifyContent="flex-start">
      <Tooltip hasArrow label="Tooltip" isOpen={true} placement="top-start">
        <Button size="sm">top-start</Button>
      </Tooltip>
      <Tooltip hasArrow label="Tooltip" isOpen={true} placement="top">
        <Button size="sm">top</Button>
      </Tooltip>
      <Tooltip hasArrow label="Tooltip" isOpen={true} placement="top-end">
        <Button size="sm">top-end</Button>
      </Tooltip>
    </HStack>
    <HStack align="flex-start" mt={5} justifyContent="flex-start">
      <Tooltip hasArrow label="Tooltip" isOpen={true} placement="bottom-start">
        <Button size="sm">bottom-start</Button>
      </Tooltip>
      <Tooltip hasArrow label="Tooltip" isOpen={true} placement="bottom">
        <Button size="sm">bottom</Button>
      </Tooltip>
      <Tooltip hasArrow label="Tooltip" isOpen={true} placement="bottom-end">
        <Button size="sm">bottom-end</Button>
      </Tooltip>
    </HStack>
  </>
);

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

let params = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/ziXjEufb8v3FVDZQo55ZK2/UI-Designs?node-id=451%3A2424",
  },
};
Primary.parameters = params;
