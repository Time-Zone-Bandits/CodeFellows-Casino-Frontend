import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const url = process.env.REACT_APP_SERVER;

function LoginLogout() {
    let { isAuthenticated, loginWithRedirect, error, logout } = useAuth0();
    console.log(isAuthenticated, error);

    if (isAuthenticated) {
        axios.post(url + `/user`);
    }


    return !isAuthenticated 
    ? <button onClick={loginWithRedirect}>Login</button>
    : <button onClick={logout}>Logout</button>
}

export default LoginLogout;