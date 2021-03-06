import React from 'react';

import JSONDataKeseluruhan from '../assets/dummy';

import {
  Description,
  DesExpertise,
  Education,
  Lists,
  Skill,
  Content,
} from '../component';

function homepage() {
  const JSONData = JSONDataKeseluruhan.JSONDataKeseluruhan;

  return (
    <div>
      <div>
        <Content />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 line-bar ">
            <div className="row justify-content-center mt-3">
              {JSONData.lists.map((list) => {
                return <Lists key={list.number} data={list} />;
              })}
            </div>
          </div>
        </div>
        <Description />
        <div className="row sub-margin">
          <div className="col-sm-4 ">
            <div>
              <h3>EDUCATION</h3>
              <h6>educational background</h6>
            </div>
          </div>
          <div className="col-sm-8 desc-expertise">
            <Education />
          </div>
        </div>
        <div className="row sub-margin">
          <div className="col-sm-4 ">
            <div>
              <h3>EXPERTISE</h3>
              <h6>What I am All About</h6>
            </div>
          </div>
          <div className="col-sm-8 desc-expertise">
            <div className="row ">
              {JSONData.isiHalaman
                .filter((data, index) => {
                  return index < 4;
                })
                .map((data) => {
                  return <DesExpertise key={data.number} data={data} />;
                })}
            </div>
          </div>
        </div>

        <div>
          <div className="row sub-margin">
            <div className="col-sm-4 ">
              <div>
                <h3>SKILLS</h3>
                <h6>On Progress Bars</h6>
              </div>
            </div>
            <div className="col-sm-8 desc-expertise">
              <div className="row">
                {JSONData.isiHalaman
                  .filter((data, index) => {
                    return index > 3;
                  })
                  .map((data) => {
                    return <Skill key={data} data={data} />;
                  })}
              </div>
            </div>
          </div>
          <div className="margin-bawah" />
        </div>
      </div>
    </div>
  );
}

export default homepage;
