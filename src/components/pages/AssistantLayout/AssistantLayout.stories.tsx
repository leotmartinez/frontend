// src/dashboard/AssistantLayout.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import AssistantLayout from './AssistantLayout';

const meta = {
  title: 'Components/Pages/AssistantLayout',
  component: AssistantLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AssistantLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
