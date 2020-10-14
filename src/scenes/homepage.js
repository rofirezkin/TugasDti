import React from 'react';
import {
  Description,
  DesExpertise,
  Education,
  Lists,
  Profile,
  Skill,
} from '../component';

function homepage() {
  const lists = [
    {
      title: 'Location',
      description: 'Banten',
    },
    {
      title: 'Phone',
      description: '085771813299',
    },
    {
      title: 'Github',
      description: 'rofirezkin',
    },
    {
      title: 'Email',
      description: 'rofirezkin@gmail.com',
    },
  ];
  const isiHalaman = [
    {
      number: '01',
      title: 'CSS BEGINNER',
      description:
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    },
    {
      number: '02',
      title: 'FRONT-END DESIGN',
      description:
        'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly',
    },

    {
      number: '03',
      title: 'REACT JS LIBRARY',
      description:
        'React JS is a JavaScript library used in web development to build interactive elements on websites.',
    },
    {
      number: '04',
      title: 'REACT NATIVE',
      description:
        'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.',
    },
    {
      presentation: '60%',
      title: 'FIGMA',
    },
    {
      presentation: '70%',
      title: 'CST STUDIO 2020',
    },
    {
      presentation: '60%',
      title: 'NETWORK ANALYZER',
    },
    {
      presentation: '70%',
      title: 'ADOBE XD',
    },
  ];

  return (
    <div>
      <Profile />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-8 line-bar ">
            <div className="row justify-content-center mt-3">
              {lists.map((list) => {
                return <Lists key={list} data={list} />;
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
              {isiHalaman.filter((sortir, index) => {
                if (index < 4) {
                  return <DesExpertise key={sortir} data={sortir} />;
                }
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
                {isiHalaman
                  .filter((sortir, index) => {
                    return index > 4;
                  })
                  .map((sortir) => {
                    return <Skill key={sortir} data={sortir} />;
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
