import React from "react";
import '../components/Error.css'
const Error = ({error}) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
       {error}
      </div>
    </div>
  );
};

export default Error;