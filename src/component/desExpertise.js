import React from "react";
import propTypes from "prop-types";

function desExpertise(props) {
  return (
    <div className="col-sm-6 ">
      <div className="row">
        <div class="col-1">
          <h5 class="number-expertise">{props.data.number}</h5>
        </div>
        <div class="col-10">
          <h5>{props.data.title}</h5>
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

desExpertise.propTypes = {
  data: propTypes.object,
};

export default desExpertise;
