import { css } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <div css={boxCss}></div>
    </div>
  );
}

const boxCss = css`
  width: 200px;
  height: 200px;
  background-color: red;
`;

export default App;
