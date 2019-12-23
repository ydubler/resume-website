import React from "react";

import SVGFirstLastName from "./SVGName/SVGFirstLastName";

export default class Bio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      windowInnerWidth: 3000
    };
  }

  componentDidMount() {
    this.setState({
      location: this.props.location,
      windowInnerWidth: window.innerWidth
    });
  }

  render() {
    return (
      <div>
        <SVGFirstLastName windowInnerWidth={this.state.windowInnerWidth} />
        <br />
        <div style={{ textAlign: "center" }}>
          This website is under construction!
        </div>
      </div>
    );
  }
}
