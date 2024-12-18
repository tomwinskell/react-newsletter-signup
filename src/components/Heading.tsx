import styled from 'styled-components';

interface HeadingProps {
  text: string;
}

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin: .4em 0;
`;

export default function Heading({ text }: HeadingProps) {
  return <StyledHeading>{text}</StyledHeading>;
}
