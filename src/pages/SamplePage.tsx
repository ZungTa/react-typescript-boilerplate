import SampleComponent from '@/components/SampleComponent';
import { css } from '@emotion/react';

function SamplePage() {
  return (
    <div>
      <div className="sample-page-container">
        <h1>Sample Page</h1>
        <SampleComponent />
      </div>
    </div>
  );
}

const samplePageCss = css`
  .sample-page-container {
  }
`;

export default SamplePage;
