import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <BrowserRouter>
          <ReduxToastr
            timeOut={ 5000 }
            newestOnTop={ false }
            preventDuplicates
            position="top-center"
            getState={ (state) => state.toastr } // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
