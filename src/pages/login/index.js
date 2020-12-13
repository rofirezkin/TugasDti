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
        window.location.replace('/');
        setLoginLoading(false);
      });
  };

  return (
    <div className="loginPage">
      <div className="constainer my-5">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <div className="login px-3">
              <h1 className="text-center">halaman login</h1>
              <form
                className="login_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmitLogin();
                }}
              >
                Username :
                <input
                  className="form-control"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                Password :
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  className="my-3 "
                  type="submit"
                  value="Submit"
                  disabled={isLoginLoading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
