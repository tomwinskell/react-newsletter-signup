import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode | string;
}

const StyledParagraph = styled.p`
  line-height: 1.5em;
  margin: 0.7em 0;
`;

export default function Paragraph({ children }: Props) {
  return <StyledParagraph>{children}</StyledParagraph>;
}
