import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Theme } from "app/providers/themeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Text title",
  text: "Text text",
};

export const Error = Template.bind({});
Error.args = {
  title: "Text title",
  text: "Text text",
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: "Text title",
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: "Text text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Text title",
  text: "Text text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
