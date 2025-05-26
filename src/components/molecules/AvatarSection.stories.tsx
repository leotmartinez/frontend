import AvatarSection from './AvatarSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AvatarSection> = {
  component: AvatarSection,
  title: 'Components/Molecules/AvatarSection',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AvatarSection>;

export const Default: Story = {
  render: () => <AvatarSection />,
};
