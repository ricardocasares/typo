import React from "react";
import PropTypes from "prop-types";

export class Panel extends React.Component {
  static propTypes = {
    test: PropTypes.bool
  };

  render() {
    return <h1>Hello</h1>;
  }
}
