import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Homepage from './pages/homepage/homepage.jsx'
import ShopPage from './pages/shop/shop.jsx'
import Header from './components/header/header'
import SigningForms from './components/signing-forms/signing-forms'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null 

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SigningForms}/>
      </Switch>
      </div>
    );
    }
}

export default App;
