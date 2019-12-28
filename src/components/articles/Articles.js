import React from "react";

export default class Articles extends React.Component {
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
          Select an Article: <br />
          <br />
          <div
            style={{
              display: "inline-block",
              width: "300px",
              textAlign: "left"
            }}
          >
            <u>Article Name</u>
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
              Insertion Sort
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
            1/3/2020
          </div>
          <br />
          <br />
          {/*Minimum Spanning Trees */}
          <div
            style={{
              display: "inline-block",
              width: "300px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Minimum Spanning Trees (Pending)
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
            ?
          </div>
          <br />
          <br />
          {/* Suffix Trees */}
          <div
            style={{
              display: "inline-block",
              width: "300px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Suffix Trees (Pending)
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
            ?
          </div>
          <br />
          <br />
          {/* Convolution / FFT */}
          <div
            style={{
              display: "inline-block",
              width: "300px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Convolution / FFT (Pending)
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
            ?
          </div>
        </div>
      </>
    );
  }
}
