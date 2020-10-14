import React from "react";

function DesExpertise(props) {
  const { data } = props;
  const { title, number, description } = data;

  return (
    <div className="col-sm-6 ">
      <div className="row">
        <div class="col-1">
          <h5 class="number-expertise">{number}</h5>
        </div>
        <div class="col-10">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DesExpertise;
