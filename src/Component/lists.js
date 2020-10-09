import React from "react";
import propTypes from "prop-types";

function lists(props) {
  return (
    <div className="col-sm-3">

              <h6>{props.data.title}</h6>
              <div>{props.data.description}</div>
          
    </div>
  );
}

lists.propTypes = {
  data: propTypes.object,
};
export default lists;
