import React from "react";
import propTypes from "prop-types";

function Skill(props) {
  
   
  return (
    <div class="col-sm-6 mt-4">
      <h5>
        <span class="text-danger">{props.data.presentation}</span> {props.data.title}
      </h5>
      <div class="progress">
              <div class="progress-bar bg-danger " style={{ width: props.data.presentation }}>{props.data.presentation}</div>
      </div>
    </div>
  );
}

Skill.propTypes = {
  data: propTypes.object,
};

export default Skill;
