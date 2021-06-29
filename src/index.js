import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
