import React from 'react';

function Skill({ data }) {
  return (
    <div className="col-sm-6 mt-4">
      <h5>
        <span className="text-danger">{data.presentation}</span>
        {data.title}
      </h5>
      <div className="progress">
        <div
          className="progress-bar bg-danger "
          style={{ width: data.presentation }}
        >
          {data.presentation}
        </div>
      </div>
    </div>
  );
}

export default Skill;
