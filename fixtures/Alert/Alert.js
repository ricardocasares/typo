import React from "react";
import PropTypes from "prop-types";

export class Alert extends React.Component {
  static propTypes = {
    alert: PropTypes.bool
  };

  render() {
    return <h1>Hello</h1>;
  }
}
