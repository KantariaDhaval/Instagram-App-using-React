import React, { Component } from "react";

function withToggleHandler(WrappedComponent, getToggleData) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = getToggleData(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState((prevState) => {
        return {
          isToggled: !prevState.isToggled,
          numberOfCounts: prevState.isToggled
            ? prevState.numberOfCounts - 1
            : prevState.numberOfCounts + 1,
        };
      });
    }

    render() {
      return (
        <WrappedComponent
          isToggled={this.state.isToggled}
          numberOfCounts={this.state.numberOfCounts}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  };
}

export default withToggleHandler;
