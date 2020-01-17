import React from 'react';
import {connect} from 'react-redux'; //higher order component that let's us modify our component to have access to things in redux
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({currentUser}) => (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
        {currentUser ?
            <div className="option" onClick={() => auth.signOut()}> SIGN
              OUT</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon/>
      </div>

    </div>
);

//function to access the state!
//state <- root state reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

//higher order components(connect) are just functions that take components as arguments and then return you a new subcomponent
// 2 arguments:
// -- the function that let's us access the state
// --- the second function (optional)
export default connect(mapStateToProps)(Header);