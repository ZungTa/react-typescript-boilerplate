import { css } from '@emotion/react';
import { Switch, Route } from 'react-router-dom';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ScrollToTop from '@/components/ScrollToTop';
import NotFound from '@/pages/NotFound';
import SamplePage from '@/pages/SamplePage';

function App() {
  return (
    <div css={appCss}>
      <Nav />
      <div className="content-container">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={SamplePage} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

const appCss = css``;

export default App;
