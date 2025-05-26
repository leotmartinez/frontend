import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionInput from '../../components/organisms/QuestionInput';

const meta: Meta<typeof QuestionInput> = {
  title: 'Components/Organisms/QuestionInput',
  tags: ['autodocs'],
  component: QuestionInput,
};

export default meta;

type Story = StoryObj<typeof QuestionInput>;

export const Default: Story = {
  render: () => {
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
        alert(`Pergunta enviada: "${question}"`);
        setLoading(false);
        setQuestion('');
      }, 1000);
    };

    return (
      <QuestionInput
        question={question}
        onChange={setQuestion}
        onSubmit={handleSubmit}
        loading={loading}
      />
    );
  },
};
