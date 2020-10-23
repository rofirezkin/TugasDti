import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function myProject({ data }) {
  return (
    <div className="col-sm-6 p-1">
      <div className="card">
        <img
          src={data.foto}
          alt="foto profil"
          style={{ width: '100%', height: '100%' }}
          className="img-thumbnail"
        />
        <div className="card-body">
          <h4 className="card-title">{data.judul}</h4>
          <p className="card-text">{data.description}</p>
          <Router>
            <a href={data.link}>Lihat Project</a>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default myProject;
