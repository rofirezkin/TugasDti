import React from 'react'
import profil from '../assets/images/formal.jpg'

function Profile() {
    return (
        <div>
      <div class="container margin-atas" >
      <div class="row">
            <div class="col-sm-4">
                <img src={profil} alt="foto profil" class="img-thumbnail" />
            </div>
            <div class="row col-sm-8 margin-left align-items-center">
                <div>
                    <div class="text-name-big">ROFI REZKIN</div>
                    <h4 class="text-name-small">D3 TEKNIK TELEKOMUNIKASI</h4>
                </div>
            </div>
        </div>
      </div>
        </div>
    )
}

export default Profile
