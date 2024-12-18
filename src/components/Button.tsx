import styled from 'styled-components';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  text: string;
}

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  background-color: #242742;
  color: #ffffff;
  border-radius: 10px;
  border: 0;
  padding: 1rem;
  font-size: 1rem;
  margin: 1em 0;
  &:hover {
    background: linear-gradient(#ff6a3a, #ff527b);
  }
`;

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
