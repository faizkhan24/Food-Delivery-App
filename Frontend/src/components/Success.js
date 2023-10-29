import React from "react";
import '../components/Success.css'
const Success = ({success}) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {success}
      </div>
    </div>
  );
};

export default Success;
