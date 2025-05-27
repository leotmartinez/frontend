// Importa o hook useState do React para gerenciar estado local nos stories
import { useState } from 'react';
// Importa os tipos do Storybook para tipagem dos stories
import type { Meta, StoryObj } from '@storybook/react';
// Importa o componente InputArea que será demonstrado no Storybook
import InputArea from './InputArea';

// Define as configurações do Storybook para o componente InputArea
const meta: Meta<typeof InputArea> = {
  title: 'Components/Molecules/InputArea', // Caminho e nome do componente na sidebar do Storybook
  component: InputArea, // Componente a ser documentado
  tags: ['autodocs'], // Tags para geração automática de docs
};

export default meta;

// Define o tipo base para os stories deste componente
type Story = StoryObj<typeof InputArea>;

// Story principal (Default) que demonstra o uso do InputArea
export const Default: Story = {
  render: () => {
    // Estado local para controlar o texto da pergunta
    const [question, setQuestion] = useState('');
    // Estado local para controlar o loading (enviando)
    const [loading, setLoading] = useState(false);

    // Função chamada ao enviar a pergunta
    const handleSubmit = () => {
      setLoading(true); // Ativa loading
      setTimeout(() => {
        alert(`Pergunta enviada: "${question}"`); // Mostra alerta simulando envio
        setLoading(false); // Desativa loading
        setQuestion(''); // Limpa o campo
      }, 1000); // Simula delay de 1 segundo
    };

    // Renderiza o componente InputArea com os estados e handlers controlados
    return (
      <InputArea
        question={question} // Valor do input
        onChange={setQuestion} // Atualiza o valor ao digitar
        onSubmit={handleSubmit} // Função de envio
        loading={loading} // Indica se está carregando
      />
    );
  },
};

// ...código comentado abaixo é um exemplo antigo e pode ser removido ou usado como referência...

// import { useState } from 'react';
// import type { Meta, StoryObj } from '@storybook/react';
// import QuestionInput from './InputArea';

// const meta: Meta<typeof QuestionInput> = {
//   title: 'Components/Organisms/QuestionInput',
//   tags: ['autodocs'],
//   component: QuestionInput,
// };

// export default meta;

// type Story = StoryObj<typeof QuestionInput>;

// export const Default: Story = {
//   render: () => {
//     const [question, setQuestion] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = () => {
//       setLoading(true);
//       setTimeout(() => {
//         alert(`Pergunta enviada: "${question}"`);
//         setLoading(false);
//         setQuestion('');
//       }, 1000);
//     };

//     return (
//       <QuestionInput
//         question={question}
//         onChange={setQuestion}
//         onSubmit={handleSubmit}
//         loading={loading}
//       />
//     );
//   },
// };
