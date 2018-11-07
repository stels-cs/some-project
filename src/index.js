import 'core-js/es6/map';
import 'core-js/es6/set';
import {Provider} from "react-redux"
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
import registerServiceWorker from './sw';
import store from './store'
import {StartCounter} from "./modules/Counter"

// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
registerServiceWorker();


store.dispatch(StartCounter())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
