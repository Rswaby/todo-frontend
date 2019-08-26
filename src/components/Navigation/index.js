import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const style = {
  link: {
    "textDecoration": "none",
    "color": "black",
    "textAlign": "center",
  }
}
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
          <NavigationNonAuth />
        )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <div id={"nav-bar"} className={"nav justify-content-end"}>
    <div id={"nav-bar-item"}>
      <Link style={style.link} to={ROUTES.HOME}>HOME</Link>
    </div>
    <div id={"nav-bar-item"}>
      <Link style={style.link} to={ROUTES.ACCOUNT}>ACCOUNT</Link>
    </div>
    {!!authUser.roles[ROLES.ADMIN] && (
      <div id={"nav-bar-item"}>
        <Link style={style.link} to={ROUTES.ADMIN}>ADMIN</Link>
      </div>
    )}
    <div id={"nav-bar-item"}>
      <SignOutButton />
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <nav id={"nav-bar"} className={"navbar navbar-light bg-light justify-content-end"}>
    <div id={"nav-bar-item"} className={"nav-item"}>
      <Link style={style.link} to={ROUTES.LANDING}>LANDING</Link>
    </div>
    <div id={"nav-bar-item"} className={"nav-item"}>
      <Link style={style.link} to={ROUTES.SIGN_IN}>SIGN IN</Link>
    </div>
  </nav>
);

export default Navigation;
