import React from 'react';
import GlobalStyle from '../src/util/style/global'
import Routes from './routes';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import history from '../src/services/history'
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>

  )
}

export default App;
