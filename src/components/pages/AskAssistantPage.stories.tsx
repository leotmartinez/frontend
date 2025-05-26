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



// // src/components/pages/AskAssistantPage.stories.tsx
// import type { Meta, StoryObj } from '@storybook/react';
// import { AskAssistantPage } from './AskAssistantPage';
// import { expect, userEvent, within } from '@storybook/test';

// const meta = {
//   title: 'Components/Pages/AskAssistantPage',
//   component: AskAssistantPage,
//   tags: ['autodocs'],
//   parameters: {
//     layout: 'fullscreen',
//   },
// } satisfies Meta<typeof AskAssistantPage>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedOut: Story = {};

// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = canvas.getByRole('button', { name: /Log in/i });
//     await expect(loginButton).toBeInTheDocument();
//     await userEvent.click(loginButton);
//     await expect(loginButton).not.toBeInTheDocument();

//     const logoutButton = canvas.getByRole('button', { name: /Log out/i });
//     await expect(logoutButton).toBeInTheDocument();
//   },
// };


// // src/components/pages/AskAssistantPage.stories.tsx
// import type { Meta, StoryObj } from '@storybook/react';
// import AskAssistantPage from './AskAssistantPage';

// const meta: Meta<typeof AskAssistantPage> = {
//   title: 'Components/Pages/AskAssistantPage',
//   component: AskAssistantPage,
// };

// export default meta;

// type Story = StoryObj<typeof AskAssistantPage>;

// export const Default: Story = {
//   render: () => <AskAssistantPage />,
// };
