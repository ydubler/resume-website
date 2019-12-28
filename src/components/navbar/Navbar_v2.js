import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  componentDidMount() {
    this.setState({ location: this.props.location });
  }

  render() {
    return (
      <>
        <div>
          <svg width="100%" height="70px">
            <rect width="100%" height="100%" fill="black"></rect>
            <rect x="10" y="10" width="50px" height="50px" fill=""></rect>
          </svg>
        </div>
      </>
    );
  }
}
