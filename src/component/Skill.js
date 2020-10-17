import React from 'react';

function Skill(props) {
  const { presentation, title } = props.data;
  return (
    <div className="col-sm-6 mt-4">
      <h5>
        <span className="text-danger">{presentation}</span>
        {title}
      </h5>
      <div className="progress">
        <div
          className="progress-bar bg-danger "
          style={{ width: presentation }}
        >
          {presentation}
        </div>
      </div>
    </div>
  );
}

export default Skill;
