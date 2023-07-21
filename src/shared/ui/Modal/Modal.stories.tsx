import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quos
  aut voluptate quisquam placeat veritatis consectetur odit voluptas amet
  sed delectus, cupiditate atque exercitationem quia praesentium quaerat.
  Mollitia, perferendis ea.`,
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quos
  aut voluptate quisquam placeat veritatis consectetur odit voluptas amet
  sed delectus, cupiditate atque exercitationem quia praesentium quaerat.
  Mollitia, perferendis ea.`,
  className: "dark",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
