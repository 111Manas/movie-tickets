import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {store,persistor} from './Redux/store';
// import {PersistGate} from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
      // <Provider store ={store}>
        <BrowserRouter>
          {/* <PersistGate persistor={persistor}> */}
            <App />
            {/* </PersistGate> */}
        </BrowserRouter>
      // </Provider>
  ,document.getElementById('root'));

 
serviceWorker.unregister();
