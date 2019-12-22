import React from "react";

export default class Education extends React.Component {
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
          University of Montana: Bachelors of Computer Science (Math Minor)
          <br />
        </div>
      </>
    );
  }
}
