import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import TopBar from './components/topbar';
import ViewProduct from './components/viewProduct';
import AddProduct from './components/addProduct';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';


const routing = (


  <Router>

    <div>
      <TopBar />

      <Switch>

        <Route exact path="/ViewProduct/:id" component={ViewProduct} />
        {localStorage.getItem("admin") &&
        <Route exact path="/AddProduct" component={AddProduct} />}

        {!localStorage.getItem("user") &&
        <Route exact path="/Login" component={Login} />}
        <Route path="*" component={App} />

      </Switch>



    </div>
  </Router>
)




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
