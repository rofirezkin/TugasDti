import React from 'react';

import profil from '../assets/images/undraw_Onboarding_re_6osc.png';
import Tandon from '../assets/images/figma tandon.PNG';
import Museum from '../assets/images/figma website.PNG';
import Doctor from '../assets/images/reactdoctor.PNG';
import Market from '../assets/images/Marketplace.PNG';

function portofolio() {
  return (
    <div>
      <div className="container margin-atas ">
        <div className="row">
          <div className="col-sm-4">
            <img src={profil} alt="foto profil" style={{ width: '100%' }} />
          </div>
          <div className="row col-sm-8 margin-left align-items-center">
            <div>
              <div className="text-name-big">MY PORTOFOLIO</div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-bar text-center ">
        <h3 className="sub-margin">This My Project</h3>
      </div>
      <div className="container sub-margin">
        <div className="row">
          <div className="col-sm-4 p-1">
            <img
              src={Tandon}
              alt="foto profil"
              style={{ width: '100%', height: '100%' }}
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-4 p-1">
            <img
              src={Museum}
              alt="foto profil"
              style={{ width: '100%' }}
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-4 p-1">
            <img
              src={Doctor}
              alt="foto profil"
              style={{ width: '100%' }}
              className="img-thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="container sub-margin">
        <div className="row">
          <div className="col-sm-4 p-1">
            <img
              src={Market}
              alt="foto profil"
              style={{ width: '100%', height: '100%' }}
              className="img-thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default portofolio;
