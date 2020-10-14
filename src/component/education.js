import React from "react";
import propTypes from "prop-types";

function education(props) {
  return (
    <div className="row">
      <div className="col-sm-6 ">
        <h5 className="mb-4">FORMAL</h5>
        <p className="number-expertise">
          <b>MA MALNU PUSAT MENES</b>
        </p>
        <p className="number-expertise">
          <b> TELKOM UNIVERSITY</b>
        </p>
      </div>
      <div className="col-sm-6 ">
        <h5 className="mb-4">NON-FORMAL</h5>
        <p className="number-expertise">
          <b >KURSUS NURUL FIKRI</b>
        </p>
        <p className="number-expertise">
          <b> COURSERA</b>
        </p>
      </div>
    </div>
  );
}

education.propTypes = {
  data: propTypes.object,
};

export default education;
