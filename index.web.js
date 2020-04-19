
import React, {Component} from "react";
import {PersistGate} from "redux-persist/integration/react";

import {AppRegistry} from "react-native";
import {Provider} from "react-redux";
import setup from "./src/store/setup";

import Routes from "./src/config/routes";
import {Loader} from "./src/components/";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'bootstrap/dist/css/bootstrap.min.css';

toast.configure();

const {persistor, store} = setup();
// import "./src/container/html/style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: window.innerWidth,
    };
  }

  /**
   * Event listener watches the width of web
   */
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  /**
   * update the width of web on reducer
   */
  updateDimensions() {
    // store.dispatch(appAction.setWebWidth(window.innerWidth));
  }
  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Routes />
          {/* <Loader /> */}
          {/* <ToastNotification /> */}
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("react-root"),
});
