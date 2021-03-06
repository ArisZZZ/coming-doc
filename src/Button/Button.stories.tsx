import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "coming";

export default {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "这是一个很好用的按钮组件",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "默认",
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "主要",
  type: "danger",
};
