import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/styles/index.scss';
import './assets/styles/antd-index.less';
import 'antd/dist/antd.less';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import { store } from './redux/store';
import 'moment/locale/id';
import './i18n';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
