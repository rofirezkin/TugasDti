import React from "react";
import Profil from "../Component/Profile";
import Lists from "../Component/lists";
import Description from "../Component/description";

function homepage() {
  const lists = [
    {
      title: "Location",
      description: "Banten",
    },
    {
      title: "Phone",
      description: "085771813299",
    },
    {
      title: "Github",
      description: "rofirezkin",
    },
    {
      title: "Email",
      description: "rofirezkin@gmail.com",
    },
  ];
  const isiHalaman = [
    {
      title: "CSS BEGINNER",
      description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    },
    {
      title: "FRONT-END DESIGN",
      description: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly",
    },
    
    {
      title: "REACT JS LIBRARY",
      description: "React JS is a JavaScript library used in web development to build interactive elements on websites.",
    },
    {
      title: "REACT NATIVE",
      description: "React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.",
    },
    "FIGMA",
    "CST STUDIO 2020",
    "NETWORK ANALYZER"


  ];
  console.log(isiHalaman);
  

  return (

    <div>
      <Profil />
      <div >
        <div className="container">
          <div class="row justify-content-end">
            <div class="col-8 line-bar ">
              <div class="row justify-content-center mt-3">
                  {lists.map((list, index) => (
                    <Lists key={index} data={list}></Lists>
                  ))}        
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
}

export default homepage;
