// route 변경 시 스크롤을 Top으로 올려줌

import { PureComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class ScrollToTop extends PureComponent<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {}

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
