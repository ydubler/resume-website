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
              width: "500px",
              textAlign: "left"
            }}
          >
            <u>Article Name</u>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
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
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "auto",
                color: "purple",
                cursor: "pointer"
              }}
              onClick={() => {
                this.props.history.push("/articles/insertion-sort");
              }}
            >
              Insertion Sort
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
              backgroundColor: "aliceblue"
            }}
          >
            1/7/2020
          </div>
          <br />
          <br />
          {/* Recursion */}
          <div
            style={{
              display: "inline-block",
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="/articles/insertion-sort"
            >
              Recursion
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
              backgroundColor: "aliceblue"
            }}
          >
            Under Construction
          </div>
          <br />
          <br />
          {/*Minimum Spanning Trees */}
          <div
            style={{
              display: "inline-block",
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Binary Search
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
              backgroundColor: "aliceblue"
            }}
          >
            ?
          </div>
          <br />
          <br />
          {/* Binary Search */}
          <div
            style={{
              display: "inline-block",
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Minimum Spanning Trees
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
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
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Suffix Trees
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
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
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Convolution / FFT
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
              backgroundColor: "aliceblue"
            }}
          >
            ?
          </div>
          <br />
          <br />
          {/* Kernels / Image Processing */}
          <div
            style={{
              display: "inline-block",
              width: "500px",
              textAlign: "left",
              backgroundColor: "aliceblue"
            }}
          >
            <a style={{ textDecoration: "none" }} href="">
              Kernels / Image Processing
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
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
