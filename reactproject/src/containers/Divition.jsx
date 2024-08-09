import React from "react";
import { PropTypes } from "prop-types";

const Divition = ({ children, className }) => {
  return <div className={`w-full shadow-inner ${className}`}>{children}</div>;
};
Divition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Divition;
