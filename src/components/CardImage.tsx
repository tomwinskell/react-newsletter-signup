import styled from 'styled-components';
import useMediaQuery from '../mq.hook';
import { device } from '../device';
import imageUrlMobile from '../assets/images/illustration-sign-up-mobile.svg';
import imageUrlDesktop from '../assets/images/illustration-sign-up-desktop.svg';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledContainer = styled.div`
  @media ${device.mobile} {
    grid-row: 1 / span 1;
    grid-column: 2 / 3;
    padding: 1.5rem;
  }
  @media ${device.tablet} {
    grid-row: 1 / span 2;
    padding: 0;
  }
`;

export default function CardImage() {
  const isMobile = useMediaQuery(device.mobile);
  return (
    <StyledContainer>
      <StyledImage
        src={isMobile ? imageUrlDesktop : imageUrlMobile}
        alt="Illustration sign up"
      />
    </StyledContainer>
  );
}
