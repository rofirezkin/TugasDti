import React from 'react';

function desExpertise(props) {
  const { title, number, description } = props.data;

  return (
    <div className="col-sm-6 ">
      <div className="row">
        <div className="col-1">
          <h5 className="number-expertise">{number}</h5>
        </div>
        <div className="col-10">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default desExpertise;
