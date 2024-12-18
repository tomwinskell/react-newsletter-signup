import Button from './Button';
import styled from 'styled-components';
import { useState, useId } from 'react';
import { device } from '../device';

interface Props {
  renderConfirmation: (email: string) => void;
}

const StyledContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
  
  @media ${device.tablet} {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

const StyledLMContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 900;
`;

const StyledMessage = styled.p`
  font-size: 0.8rem;
  font-weight: 900;
  color: var(--orange);
  margin: 0;
`;

const StyledInput = styled.input<{ $error: boolean }>`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 0.5em;
  border: solid thin;
  ${(props) =>
    props.$error
      ? `background: var(--orange-transparent); 
          border-color: var(--vermellion); 
          color: var(--vermellion);`
      : `border-color: var(--gray);
          &:hover {
            border-color: var(--navy);
            color: var(--navy);
          }`}
`;

function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function Form({ renderConfirmation }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const emailInputId = useId();

  return (
    <StyledContainer>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          isEmail(inputValue)
            ? renderConfirmation(inputValue)
            : setInputError(true);
        }}
      >
        <StyledLMContainer>
          <StyledLabel htmlFor={emailInputId}>Email address</StyledLabel>
          {inputError && <StyledMessage>Valid email required</StyledMessage>}
        </StyledLMContainer>
        <StyledInput
          id={emailInputId}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
          placeholder="email@company.com"
          $error={inputError}
        />
        <Button type="submit" text="Subscribe to monthly newsletter" />
      </form>
    </StyledContainer>
  );
}
