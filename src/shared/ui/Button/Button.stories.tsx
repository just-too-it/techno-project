import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonSize, ButtonVariant } from './Button';

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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  variant: ButtonVariant.CLEAR_INVERTED,
  children: 'Button text',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Button text',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Button text',
  size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Button text',
  size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  variant: ButtonVariant.OUTLINE,
  children: 'Button text',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  variant: ButtonVariant.BACKGROUND,
  children: 'Button text',
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  children: 'Button text',
};

export const Square = Template.bind({});
Square.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  children: '>',
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.M
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.XL
};
