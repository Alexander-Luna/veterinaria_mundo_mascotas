import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
//import "./styles/styless.scss";
import store from './redux/store';
import { Provider } from "react-redux"
// import { getAllServicios } from './redux/actionCreators';

// store.dispatch(getAllServicios())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

);


