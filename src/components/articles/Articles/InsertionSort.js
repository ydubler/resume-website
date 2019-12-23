import React from "react";

export default class InsertionSort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };

    this.insertionSort = this.insertionSort.bind(this);
  }

  componentDidMount() {
    this.setState({ location: this.props.location });
  }

  insertionSort() {
    let array = [5, 3, 1, 2, 4, 6, 2, 2, 5, 4, 7, 4, 6];

    let n = array.length;
    let ci = 1;
    let pi = 0;

    while (ci < n) {
      pi = ci - 1;

      let cur = array[ci];
      let prev = array[pi];

      let cni = ci;

      while (cur < prev) {
        // swap
        array[cni] = prev;
        array[pi] = cur;

        pi--;
        ci--;

        if (pi < 0) {
          break;
        } else {
          prev = array[pi];
        }
      }
      ci++;
    }

    console.log(array);
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
            <div
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "left"
              }}
            >
              Insertion Sort iterates over all elements in the array, comparing
              the current element with at least one element previous. If the
              current element is less than the element previous to it (assuming
              ascending order is desired), swap them and compare to the next
              previous element. If the current element is ever greater than or
              equal to the previous element, increment the current element.
              <button onClick={() => this.insertionSort()}>IS</button>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
