import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './layout/index'

import OrderList from './components/order/list'


function App() {
  return (
    <Provider store={store}>
        <Router>
          <Layout>
            <Route path="/" exact render={()=> <div>Welcome To HomePage</div>}></Route>
            <Route path="/order/:id"  render={()=> <OrderList></OrderList>}></Route>
          </Layout>
      </Router>
    </Provider>
  );
}

export default App;
