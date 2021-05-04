import { css } from '@emotion/react';

function Footer() {
  return (
    <div css={footerCss}>
      <div className="footer-container">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

const footerCss = css`
  .footer-container {
  }
`;

export default Footer;
