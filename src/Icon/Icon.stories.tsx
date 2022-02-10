import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "coming";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "这是一个很好用的按钮组件",
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon></Icon>;

export const Default = Template.bind({});
Default.args = {
  children: "默认",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "主要",
};
