import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { withRouter } from "next/router";
import "../styles/globals.css";
import "../styles/antd.less";
class MyApp extends App {
  constructor(props) {
    super(props);
    this.routerTracker = this.routerTracker.bind(this);
  }
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (!ctx.req) {
      localStorage.setItem("asPath", router.asPath);
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  /* ------------- set last path in application into localStorage ------------- */
  routerTracker() {
    const { lastRout } = this.props;
    localStorage.setItem("asPath", lastRout);
  }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Application {...this.props} />
        </Provider>
      </React.Fragment>
    );
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(withRouter(MyApp));

const Application = ({ Component, pageProps }) => <Component {...pageProps} />;
