import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

function NotFound() {
  const history = useHistory();

  useEffect(() => {
    alert('Not Found');
    history.push('/');
  }, []);

  return (
    <div css={notFoundCss}>
      <div className="not-found">Not Found</div>
    </div>
  );
}

const notFoundCss = css`
  .not-found {
    font-size: 20rem;
    text-align: center;
  }
`;

export default NotFound;
