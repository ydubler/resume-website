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
        <div
          style={{
            width: "100%",

            textAlign: "center"
          }}
        >
          <div
            style={{ width: "680", maxWidth: "680", display: "inline-block" }}
          >
            <div style={{ textAlign: "left" }}>
              Welcome to my website! My name is Yuri Dubler and I live in
              Missoula, Montana. I graduated from the University of Montana in
              the Summer of 2020 with a Bachelors of Computer Science with a
              minor in mathematics. In addition to practicing different facets
              of Computer Science, I love maintaining my physical health by
              attending the gym regularly with an additional love for swimming.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
