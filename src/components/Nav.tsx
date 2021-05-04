import { css } from '@emotion/react';

function Nav() {
  return (
    <div css={navCss}>
      <div className="nav-container">
        <h1>Nav</h1>
      </div>
    </div>
  );
}

const navCss = css`
  .nav-container {
  }
`;

export default Nav;
