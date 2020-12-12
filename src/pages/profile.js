import React, { useEffect, useState } from 'react';
import { userService } from '../services';
import { getCookie } from '../utils/cookie';

const Profile = () => {
  const [userDataLoading, setUserDataLoading] = useState(false);

  const userId = JSON.parse(getCookie('userData')).username;

  useEffect(() => {
    setUserDataLoading(true);
    userService
      .getProduct()
      .then((res) => {
        console.log('dasta', res);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, []);

  return (
    <div>
      <h1> My Profile!</h1>
      {userDataLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="container">
          <p>{`name : ${userId}`}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
