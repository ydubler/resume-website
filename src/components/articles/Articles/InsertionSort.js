import React from "react";

export default class InsertionSort extends React.Component {
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
          <div
            style={{
              display: "inline-block",
              width: "680"
            }}
          >
            <b>Insertion Sort</b>
            <br />
            <br />
            <div
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "left"
              }}
            >
              <hr style={{ margin: "3px" }} />
              <div style={{ backgroundColor: "azure" /*color: "dimgray"*/ }}>
                <div style={{ textAlign: "center" }}>Article Summary</div>
                <br />
                Insertion Sort is a stable, in-place, online sorting algorithm
                that compares the current element to at least one previous
                element, swapping the current element with a previous element as
                many times as is neccesary to create an ordered list. Insertion
                Sort has a linear best case runtime and a quadratic worst case
                runtime.
              </div>
              <hr style={{ margin: "3px" }} />
            </div>
            <br />
            <br />
            Center Aligned Text (Default)
            <div
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "left"
              }}
            >
              Insertion Sort
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
