import React from 'react';

function lists(props) {
  const { title, description } = props.data;
  return (
    <div className="col-sm-3 text-center">
      <h6>{title}</h6>
      <div>{description}</div>
    </div>
  );
}

export default lists;
