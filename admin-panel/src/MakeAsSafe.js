import {Component} from "react";
import React from "react";
import { Button, crudUpdateMany } from 'react-admin';
import { connect } from 'react-redux';

class MakeAsSafe extends Component {
  handleClick = () => {
    const { basePath, crudUpdateMany, resource, selectedIds } = this.props;
    crudUpdateMany(resource, selectedIds, { isSafe: true }, basePath);
  };

  render() {
    return <Button label="Make as safe" onClick={this.handleClick} />;
  }
}

export default connect(undefined, { crudUpdateMany })(MakeAsSafe);