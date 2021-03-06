import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';


class AppSetupHelpers extends React.Component {
    // From https://reacttraining.com/react-router/web/guides/scroll-restoration
    // Tells react-router to scroll to top of page when you visit a new page.
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }

    componentDidMount() {
      // Google Analytics setup
      ReactGA.initialize('UA-125429696-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
      this.props.history.listen((location, action) => {
        // console.log('History changed!', location, action);
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      });

      // Fb Pixel setup
      const fbPixelOptions = {
        autoConfig: true,
        debug: false
      }
      ReactPixel.init('317821249004038', fbPixelOptions);
      ReactPixel.pageView();
    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default withRouter(AppSetupHelpers);