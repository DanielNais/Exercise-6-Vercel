import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({ size, color, speed }) => {
  const loaderStyle = {
    width: size,
    height: size,
    border: `${size / 8}px solid #f3f3f3`,
    borderTop: `${size / 8}px solid ${color}`,
    borderRadius: "50%",
    animation: `spin ${speed}s linear infinite`,
  };

  return <div className="loader" style={loaderStyle}></div>;
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
};

Loader.defaultProps = {
  size: 48,
  color: "#0070f3",
  speed: 1,
};

export default Loader;
