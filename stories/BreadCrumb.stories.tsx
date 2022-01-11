import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import CFButton from "../src/components/CFButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/BreadCrumb",
  component: Breadcrumb,
  decorators: [withDesign],
} as ComponentMeta<typeof Breadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <VStack align="flex-start">
    <Text>Breadcrumb</Text>
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </VStack>
);

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

let params = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/ziXjEufb8v3FVDZQo55ZK2/UI-Designs?node-id=354%3A961",
  },
};
Primary.parameters = params;
