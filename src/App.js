import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from "./pages/checkout/checkout.component";


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser2} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser2({
            id: snapShot.id,
            ...snapShot.data()
          })
        });

      }
      setCurrentUser2(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route exact path="/signin"
                   render={() => this.props.currentUser ? (<Redirect to="/"/>)
                       : (<SignInAndSignUp/>)}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser2: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
