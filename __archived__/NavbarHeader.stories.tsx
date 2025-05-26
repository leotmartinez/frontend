import NavbarHeader from './NavbarHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavbarHeader> = {
  component: NavbarHeader,
  title: 'Components/Molecules/NavbarHeader',
};

export default meta;

type Story = StoryObj<typeof NavbarHeader>;

export const Default: Story = {
  render: () => <NavbarHeader />,
};
