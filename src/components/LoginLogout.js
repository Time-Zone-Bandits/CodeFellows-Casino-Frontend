import { useAuth0 } from '@auth0/auth0-react';


function LoginLogout() {
    let { isAuthenticated, loginWithRedirect, error, logout } = useAuth0();
    console.log(isAuthenticated, error);

    return !isAuthenticated 
    ? <button onClick={loginWithRedirect} id="login">Login</button> 
    : <button onClick={logout} id="logout">Logout</button> 
}

export default LoginLogout;