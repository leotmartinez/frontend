import type { Meta, StoryObj } from '@storybook/react';
import { AskAssistantPage } from './AskAssistantPage';

const meta: Meta<typeof AskAssistantPage> = {
  title: 'Components/Pages/AskAssistantPage',
  component: AskAssistantPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AskAssistantPage>;

export const Default: Story = {};