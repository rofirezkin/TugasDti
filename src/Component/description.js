import React from "react";

function description() {
  return (
    <div className="container">
      <div class="row sub-margin">
        <div class="col-sm-4 ">
          <div>
            <h3>INTRO</h3>
            <h6>What I am All About</h6>
          </div>
        </div>
        <div class="col-sm-8 desc-expertise">
          <p>
            I'am a beginner developer, linuxer, and sys admin. I keep learning
            for something new. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <DesExpertise />
      <DesSkill />
    </div>
  );
}

function DesExpertise() {
  return (
    <div class="row sub-margin">
      <div class="col-sm-4 ">
        <div>
          <h3>EXPERTISE</h3>
          <h6>What I am All About</h6>
        </div>
      </div>
      <div class="col-sm-8 desc-expertise">
        <div class="row">
          <div class="col-6 row">
            <div class="col-1">
              <h5 class="number-expertise">01</h5>
            </div>
            <div class="col-10">
              <h5>CSS BEGINNER</h5>
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML.
              </p>
            </div>
          </div>
          <div class="col-6 row">
            <div class="col-1">
              <h5 class="number-expertise">02</h5>
            </div>
            <div class="col-10">
              <h5>FRONT-END DESIGN</h5>
              <p>
                Front-end web development, also known as client-side development
                is the practice of producing HTML, CSS and JavaScript for a
                website or Web Application so that a user can see and interact
                with them directly
              </p>
            </div>
          </div>
        </div>
        <div class="row margin-expertise">
          <div class="col-6 row">
            <div class="col-1">
              <h5 class="number-expertise">03</h5>
            </div>
            <div class="col-10">
              <h5>REACT JS LIBRARY</h5>
              <p>
                React JS is a JavaScript library used in web development to
                build interactive elements on websites.
              </p>
            </div>
          </div>
          <div class="col-6 row">
            <div class="col-1">
              <h5 class="number-expertise">04</h5>
            </div>
            <div class="col-10">
              <h5>REACT NATIVE</h5>
              <p>
                React Native is a JavaScript framework for writing real,
                natively rendering mobile applications for iOS and Android.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DesSkill = () => {
  const style = {
    width: "70%",
  };
  return (
    <div>
      <div class="row sub-margin">
        <div class="col-sm-4 ">
          <div>
            <h3>SKILLS</h3>
            <h6>On Progress Bars</h6>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-6 ">
              <h5>
                <span class="text-danger">60</span>
                <small class="text-danger">%</small> ADOBE XD
              </h5>
              <div class="progress">
                <div class="progress-bar bg-danger " style={style}>
                  70%
                </div>
              </div>
            </div>
            <div class="col-6 ">
              <h5>
                <span class="text-danger">50</span>
                <small class="text-danger">%</small> FIGMA
              </h5>
              <div class="progress">
                <div class="progress-bar bg-danger " style={style}>
                  70%
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-6 ">
              <h5>
                <span class="text-danger">60</span>
                <small class="text-danger">%</small> CST STUDIO 2020
              </h5>
              <div class="progress">
                <div class="progress-bar bg-danger " style={style}>
                  70%
                </div>
              </div>
            </div>
            <div class="col-6 ">
              <h5>
                <span class="text-danger">50</span>
                <small class="text-danger">%</small> FIGMA
              </h5>
              <div class="progress">
                <div class="progress-bar bg-danger " style={style}>
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-bawah"></div>
    </div>
  );
};

export default description;
