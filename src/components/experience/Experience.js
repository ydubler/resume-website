import React from "react";

export default class Experience extends React.Component {
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
        <br />
        <div style={{ textAlign: "center" }}>
          General Scholastic Experience
          <br />
          <br />
          Senior Project (Web Development)
        </div>
      </>
    );
  }
}
