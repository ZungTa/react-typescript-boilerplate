import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';

function Nav() {
  const { t } = useTranslation();

  return (
    <div css={navCss}>
      <div className="nav-container">
        <h1>Nav, {t('name')}</h1>
      </div>
    </div>
  );
}

const navCss = css`
  .nav-container {
  }
`;

export default Nav;
