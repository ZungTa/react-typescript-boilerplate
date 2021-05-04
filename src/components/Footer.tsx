import { useRootDispatch, useRootState } from '@/store/RootStore';
import { css } from '@emotion/react';

function Footer() {
  const rootState = useRootState();
  const rootDispatch = useRootDispatch();

  function setProjectName() {
    rootDispatch({
      type: 'setProjectName',
      newProjectName: 'Boiler Plate',
    });
  }

  return (
    <div css={footerCss}>
      <div className="footer-container">
        <h1>Footer, {rootState.projectName}</h1>

        <button onClick={setProjectName}>setProjectName</button>
      </div>
    </div>
  );
}

const footerCss = css`
  .footer-container {
  }
`;

export default Footer;
