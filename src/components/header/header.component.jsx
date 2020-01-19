import React from 'react';
import {connect} from 'react-redux'; //higher order component that let's us modify our component to have access to things in redux
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer
} from './header.styles.jsx';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ?
            <OptionLink as='div' onClick={() => auth.signOut()}> SIGN
              OUT</OptionLink>
            :
            <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon/>

      </OptionsContainer>
      {hidden ? null : <CartDropdown/>}

    </HeaderContainer>
);

//function to access the state!
//state <- root state reducer
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });
// above is the code without createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

//higher order components(connect) are just functions that take components as arguments and then return you a new subcomponent
// 2 arguments:
// -- the function that let's us access the state
// --- the second function (optional)
export default connect(mapStateToProps)(Header);