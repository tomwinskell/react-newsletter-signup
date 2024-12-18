import styled from 'styled-components';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import imageUrl from './assets/images/icon-success.svg';
import { device } from './device';

interface Props {
  email: string;
  reRender: () => void;
}

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 0 1rem;
  justify-content: space-between;

  @media ${device.mobile} {
    justify-content: center;
    height: auto;
  }
`;

const StyledGroup = styled.div`
  margin-top: 20%;

  @media ${device.mobile} {
    margin-top: 0;
  }
`;

const StyledImage = styled.img`
  width: 20vw;
  height: auto;

  @media ${device.mobile} {
    width: 75px;
  }
`;

const StyledSpan = styled.span`
font-weight: 900;
`;

export default function Confirmation({ email, reRender }: Props) {
  return (
    <StyledContainer>
      <StyledGroup>
        <StyledImage src={imageUrl} />
        <Heading text="Thanks for subscribing!" />
        <Paragraph>
          A confirmation email has been sent to <StyledSpan>{email}</StyledSpan>. Please
          open it and click the button inside to confirm your subscription.
        </Paragraph>
      </StyledGroup>
      <Button type="button" onClick={() => reRender()} text="Dismiss message" />
    </StyledContainer>
  );
}
