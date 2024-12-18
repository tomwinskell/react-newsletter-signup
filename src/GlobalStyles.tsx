import { createGlobalStyle } from 'styled-components';
import { device } from './device';

const GlobalReset = createGlobalStyle`
html {
--orange: #ff6a3a;
--tomato: #ff527b;
--orange-transparent: #FFD1CE;
--vermellion: #FF6155;
--navy: #242742;
--gray: hsl(231, 7%, 60%);
--pale-navy: #36384D;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    color: var(--navy);
    font-family: 'Roboto';
  }

  @media ${device.mobile} {
    body {
      height: 100vh;
      background: var(--pale-navy);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default GlobalReset;
