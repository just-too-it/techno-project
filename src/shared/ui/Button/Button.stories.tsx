import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonVariant } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
};

export const Clear = Template.bind({});
Clear.args = {
  variant: ButtonVariant.CLEAR,
  children: 'Button text',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Button text',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Button text',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]



