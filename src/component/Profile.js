import React from 'react';

function Profile({ imgSrc, title, subtitle }) {
  return (
    <div className="padding-profile">
      <div className="container  ">
        <div className="row">
          <div className="col-sm-4">
            <img
              src={imgSrc}
              alt="foto profil"
              style={{ width: '70%', marginBottom: -20 }}
              className="img-thumbnail"
            />
          </div>
          <div className="row col-sm-8 margin-left align-items-center">
            <div>
              <div className="text-name-big">{title}</div>
              <h4 className="text-name-small">{subtitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
