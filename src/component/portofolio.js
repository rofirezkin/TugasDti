import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import profil from '../assets/images/undraw_Onboarding_re_6osc.png';
import Tandon from '../assets/images/figma tandon.PNG';

import Doctor from '../assets/images/mydoctor.PNG';
import Museum2 from '../assets/images/figma museum.PNG';
import Web from '../assets/images/web.PNG';

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
          <div className="col-sm-6 p-1">
            <div className="card">
              <img
                src={Tandon}
                alt="foto profil"
                style={{ width: '100%', height: '100%' }}
                className="img-thumbnail"
              />
              <div className="card-body">
                <h4 className="card-title">React Native</h4>
                <p className="card-text">
                  pembuatan aplikasi IoT android dengan react native, dimana
                  aplikasi ini bisa memonitoring kekeruhan air
                </p>
                <Router>
                  <a href="https://www.figma.com/file/J5fjmtuli0pDwzBxmqYSip/Aplikasi-tandon-Air?node-id=0%3A1gle.com">
                    Lihat Project
                  </a>
                </Router>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-1">
            <div className="card">
              <img
                src={Web}
                alt="foto profil"
                style={{ width: '100%', height: '100%' }}
                className="img-thumbnail"
              />
              <div className="card-body">
                <h4 className="card-title">Website Marketplace</h4>
                <p className="card-text">
                  Pembuatan Aplikasi Website Marketplace dengan Framework
                  Laravel, jenis aplikasi B2C atau Aplikasi Dropshipper
                </p>
                <Router>
                  <a href="https://www.figma.com/file/J5fjmtuli0pDwzBxmqYSip/Aplikasi-tandon-Air?node-id=0%3A1gle.com">
                    Lihat Project
                  </a>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container sub-margin">
        <div className="row justify-content-center">
          <div className="col-sm-6 p-1">
            <div className="card">
              <img
                src={Museum2}
                alt="foto profil"
                style={{ width: '100%', height: '100%' }}
                className="img-thumbnail"
              />
              <div className="card-body">
                <h4 className="card-title">Website Museum Kota Makassar</h4>
                <p className="card-text">
                  Pembuatan Website Museum Makassar,dengan bahasa pemograman PHP
                  dan javascript
                </p>
                <Router>
                  <a href="https://www.figma.com/file/xzs5C4emJL82Fn3pZdufnH/Untitled?node-id=1%3A2">
                    Lihat Project
                  </a>
                </Router>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-1">
            <div className="card">
              <img
                src={Doctor}
                alt="foto profil"
                style={{ width: '100%', height: '100%' }}
                className="img-thumbnail"
              />
              <div className="card-body">
                <h4 className="card-title">React Native Consultasi Dokter</h4>
                <p className="card-text">
                  Pembuatan aplikasi konsultasi dokter berbasis Android, dengan
                  bahasa pemograman react native
                </p>
                <Router>
                  <a href="https://www.figma.com/file/QqbElH8hobFpGRD12gYhY7/MyDoctor?node-id=0%3A1">
                    Lihat Project
                  </a>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-bawah" />
    </div>
  );
}

export default portofolio;
