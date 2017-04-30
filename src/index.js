import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';

import './style/main.css'

import GeoAppContaner from './components/GeoAppContaner';


ReactDOM.render((
  <Provider store={store}>
  	<GeoAppContaner />
  </Provider>
), document.getElementById('root'));
