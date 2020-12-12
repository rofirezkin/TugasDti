import React, { useState } from 'react';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        console.log(res);
        const cookieToken = res.token;
        const cookieUser = res;
        setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <div className="loginPage">
      <div className="container my-5">
        <div className="row justify-content-md-center">
          <div className="col-sm-6">
            <div className="login px-3">
              <h1>halaman login</h1>
              <form
                className="login_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmitLogin();
                }}
              >
                <div className="form-group">
                  Username :
                  <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                Password :
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div>
                  <input
                    className="my-2 text-center"
                    type="submit"
                    value="Submit"
                    disabled={isLoginLoading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Login

// form => post ke server => waiting for response (loading state) =>
// receive response from server => success -> success statement to user
//                              => error -> error statement to user  -> next ngapain user?

// if success - get token from be - save Token to cookie -> redirect ??

// Loading state treatment
// race condition -> unstable connection

// Action A -> Response A  ->  Action B ->  Response B -> success
