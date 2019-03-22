import React from "react";
import PropTypes from "prop-types";

export function Panel({ open = false }) {
  return <div>{open}</div>;
}

Panel.propTypes = {
  open: PropTypes.bool
};
