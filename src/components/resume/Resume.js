import React from "react";

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
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
          <a href="/articles/insertion-sort" style={{ textDecoration: "none" }}>
            Download Resume (PDF)
          </a>
        </div>
      </>
    );
  }
}
