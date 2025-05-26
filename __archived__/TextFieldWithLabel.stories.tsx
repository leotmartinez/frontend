import type { Meta, StoryObj } from '@storybook/react';
import TextFieldWithLabel from './TextFieldWithLabel';

const meta: Meta<typeof TextFieldWithLabel> = {
  title: 'Components/Molecules/TextFieldWithLabel',
  component: TextFieldWithLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextFieldWithLabel>;

export const Default: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Digite seu email',
  },
};
