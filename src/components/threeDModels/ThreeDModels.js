import React from "react";

export default class ThreeDModels extends React.Component {
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
          Select a Model: <br />
          <br />
          <div
            style={{
              display: "inline-block",
              width: "300px",
              textAlign: "left"
            }}
          >
            <u>Model</u>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "100px",
              textAlign: "right"
            }}
          >
            <u>Published</u>
          </div>
          <br />
          <br />
          {/*Insertion Sort*/}
          <div
            style={{
              display: "inline-block",
              width: "300px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="/articles/insertion-sort"
            >
              Lizardman
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "100px",
              textAlign: "right",
              backgroundColor: "aliceblue"
            }}
          >
            10/19/2018
          </div>
        </div>
      </>
    );
  }
}
