import React from 'react';
import profil from '../assets/images/formal.jpg';

function Profile() {
  return (
    <div>
      <div className="container margin-atas ">
        <div className="row">
          <div className="col-sm-4">
            <img
              src={profil}
              alt="foto profil"
              className="img-thumbnail"
              style={{ width: '70%' }}
            />
          </div>
          <div className="row col-sm-8 margin-left align-items-center">
            <div>
              <div className="text-name-big">ROFI REZKIN</div>
              <h4 className="text-name-small">D3 TEKNIK TELEKOMUNIKASI</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
