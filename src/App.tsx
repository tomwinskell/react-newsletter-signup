import CardText from './components/CardText';
import Form from './components/Form';
import CardImage from './components/CardImage';
import styled from 'styled-components';
import { useState } from 'react';
import Confirmation from './Confirmation';
import { device } from './device';

const StyledContainer = styled.div`
  font-family: 'Roboto';

  @media ${device.mobile} {
    background: white;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 550px;
  }

  @media ${device.tablet} {
    grid-template-columns: 1.1fr 0.9fr;
    padding: 2rem;
    max-width: 750px;
    column-gap: 2em;
  }
`;

const StyledMobileContainer = styled.div`
  font-family: 'Roboto';

  @media ${device.mobile} {
    background: white;
    border-radius: 30px;
    max-width: 400px;
    height: min-content;
    padding: 1em;
  }
`;

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const list = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  if (submitted) {
    return (
      <StyledMobileContainer>
        <Confirmation
          email={emailAddress}
          reRender={() => setSubmitted(false)}
        />
      </StyledMobileContainer>
    );
  } else {
    return (
        <StyledContainer>
          <CardImage />
          <CardText
            heading="Stay updated!"
            paragraph="Join 60,000+ product managers receiving monthly updates on:"
            list={list}
          />
          <Form
            renderConfirmation={(email: string) => {
              setEmailAddress(email);
              setSubmitted(true);
            }}
          />
        </StyledContainer>
    );
  }
}

export default App;
