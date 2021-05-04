import { css } from '@emotion/react';

function SampleComponent() {
  return (
    <div css={sampleComponentCss}>
      <div className="sample-component-container">
        <h1>Sample Component</h1>
      </div>
    </div>
  );
}

const sampleComponentCss = css`
  .sample-component-container {
  }
`;

export default SampleComponent;
