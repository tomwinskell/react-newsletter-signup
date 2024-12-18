import { createGlobalStyle } from "styled-components";
import RobotoRegular from './roboto-v32-latin-regular.woff2';
import RobotoBold from './roboto-v32-latin-900.woff2';

const FontStyles = createGlobalStyle`

@font-face {
  font-display: swap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${RobotoRegular});
}

@font-face {
  font-display: swap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(${RobotoBold});
}
`;

export default FontStyles;