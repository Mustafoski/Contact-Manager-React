import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contacts from './components/Contacts/Contacts';
import Header from './components/layout/Header/Header';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import AddContact from './components/Contacts/AddContact/AddContact';
import EditContact from './components/Contacts/EditContact/EditContact';
import { Provider } from './contacts';




class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className = "App" >
          <div className="container">
            <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div> 
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;