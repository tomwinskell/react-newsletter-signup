import styled from 'styled-components';
import Heading from './Heading';
import List from './List';
import Paragraph from './Paragraph';
import { device } from '../device';

interface Props {
  heading: string;
  paragraph: string;
  list: string[];
}

const StyledContainer = styled.div`
  padding: 0 1.5em;
  padding-bottom: 1em;

  @media ${device.mobile} {
    padding: 0;
    padding-left: 1.5em;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  @media ${device.tablet} {
    padding-right: 1.5em;
    padding-bottom: 1em;
  }
`;

export default function CardText({ heading, paragraph, list }: Props) {
  return (
    <StyledContainer>
      <Heading text={heading} />
      <Paragraph>{paragraph}</Paragraph>
      {list && <List list={list} />}
    </StyledContainer>
  );
}
