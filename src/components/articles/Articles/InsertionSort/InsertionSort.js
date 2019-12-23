import React from "react";
import { StyleSheet, css } from "aphrodite";

export default class InsertionSort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      codeLines: [
        "void InsertionSort(int array[], int numElements)",
        "{",
        "int i, cur, j, prev;",
        "",
        "for(i = 1; i < numElements; i++)",
        "{",
        "cur = array[i];",
        "j = i - 1;",
        "prev = array[j];",
        "",
        "while(j >= 0 && prev > cur)",
        "{",
        "array[j+1] = prev;",
        "j = j - 1;",
        "prev = array[j];",
        "}",
        "",
        "array[j+1]=cur;",
        "}",
        "}"
      ],
      codeIndendation: [
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        2,
        2,
        2,
        1,
        0
      ],
      indiciesY: 70,
      arrayContentsY: 110,
      array: [],
      numElements: 8,
      sortVar_i: 1,
      sortVar_j: 0,
      sortVar_curVal: 0,
      sortVar_prevVal: 0,
      justSwapped: false
    };

    this.styles = StyleSheet.create({
      curTransformOrigin: {
        transformOrigin: `${160 +
          (500 / this.state.numElements) * this.state.sortVar_i -
          500 / this.state.numElements / 2}px 110px`
      },
      prevTransformOrigin: {
        transformOrigin: `${160 +
          (500 / this.state.numElements) * this.state.sortVar_j -
          500 / this.state.numElements / 2}px 110px`
      }
    });

    // Aphrodite Animation Stylesheet
    this.animations = StyleSheet.create({
      swapCurToPrev: {
        animationName: {
          from: {
            transform: "rotate(180deg)"
          },
          to: {
            transform: "rotate(0deg)"
          }
        },
        animationDuration: "1s",
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      swapPrevToCur: {
        animationName: {
          ["0%"]: {
            transform: `translate(${500 / this.state.numElements}px, 0px)`
          },
          ["50%"]: {
            transform: `translate(${500 / this.state.numElements / 2}px, 15px)`
          },
          ["100%"]: {
            transform: "translate(0px,0px)"
          }
        },
        animationDuration: "1s",
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      }
    });

    this.createUnsortedArray = this.createUnsortedArray.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    // Define the array
    let array = [];
    for (let i = 0; i < this.state.numElements; i++) {
      array.push(i);
    }

    // Shuffle the array
    this.shuffle(array);

    // Set the state
    this.setState({
      location: this.props.location,
      array: array,
      sortVar_i: 1,
      sortVar_j: 0,
      sortVar_curVal: array[1],
      sortVar_prevVal: array[0]
    });
  }

  // Shuffle the input array
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Create an unsorted array
  createUnsortedArray() {
    let array = [];
    for (let i = 0; i < this.state.numElements; i++) {
      array.push(i);
    }

    this.shuffle(array);

    this.setState({
      array: array,
      sortVar_i: 1,
      sortVar_j: 0,
      sortVar_curVal: array[1],
      sortVar_prevVal: array[0]
    });
  }

  render() {
    return (
      <>
        <br />
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              width: "680",
              fontFamily: "Optima"
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "100%"
              }}
            >
              <hr style={{ margin: "3px" }} />
              <div style={{ backgroundColor: "azure" }}>
                <b>Insertion Sort</b>
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
              <b>General Description</b>
              <br />
              Insertion Sort is a stable, in-place, online sorting algorithm
              that has a linear best case runtime (for a pre-sorted list) and a
              quadratic worst case runtime (for a list sorted in reverse).
              <br />
              <br />
              <b>Description of Algorithm</b>
              <br />
              Insertion Sort iterates over the entire array, sorting the current
              element by comparing it to at least one previous element. If the
              current element is less than the previous element (assuming
              ascending order), swap the current element with the previous and
              compare the current element to it's new previous element in the
              same fashion. If the previous element is less than the current
              element, increment the iterator as the array has been sorted up to
              the current index.
              <br />
              <br />
              <svg width="100%" height={22 * this.state.codeLines.length}>
                <rect width="100%" height="26" fill="aliceblue"></rect>
                {this.state.codeLines.map((line, index) => (
                  <g key={Math.random()}>
                    <rect
                      key={"code_line" + index + "_rect"}
                      x="0"
                      y={22 * index}
                      width="100%"
                      height="22"
                      fill="aliceblue"
                    ></rect>
                    <text
                      key={"code_line" + index}
                      dominantBaseline="middle"
                      x={15 + 50 * this.state.codeIndendation[index]}
                      y={11 + 22 * index}
                      fontFamily="Courier"
                    >
                      {line}
                    </text>
                  </g>
                ))}
              </svg>
              <br />
              <svg
                width="100%"
                height="250px"
                fontFamily="Optima"
                fontSize="20"
              >
                <rect
                  width="100%"
                  height="100%"
                  stroke="lightgray"
                  strokeWidth="5px"
                  fill="white"
                ></rect>
                <text
                  x="80"
                  y={this.state.indiciesY}
                  dominantBaseline="middle"
                  textAnchor="end"
                >
                  i
                </text>
                <circle
                  className={css(
                    (this.state.justSwapped && this.animations.swapPrevToCur) ||
                      undefined
                  )}
                  cx={160 + (500 / this.state.numElements) * 1}
                  cy={this.state.indiciesY}
                  r="16"
                  stroke="gold"
                  strokeWidth="4"
                  fill="transparent"
                ></circle>
                {[...Array(this.state.numElements).keys()].map(index => (
                  <text
                    key={Math.random()}
                    x={160 + (500 / this.state.numElements) * index}
                    y={this.state.indiciesY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="gray"
                  >
                    {index}
                  </text>
                ))}
                <text
                  x="80"
                  y={this.state.arrayContentsY}
                  dominantBaseline="middle"
                  textAnchor="end"
                >
                  array[i]
                </text>
                <circle
                  className={css(
                    (this.state.justSwapped && this.animations.swapCurToPrev) ||
                      undefined
                  )}
                  cx={160 + (500 / this.state.numElements) * 1}
                  cy={this.state.arrayContentsY}
                  r="16"
                  fill="gold"
                ></circle>
                {this.state.array.map((value, index) => (
                  <text
                    key={Math.random()}
                    className={
                      this.state.justSwapped && this.state.sortVar_i === index
                        ? css(
                            this.animations.swapCurToPrev,
                            this.styles.curTransformOrigin
                          )
                        : undefined ||
                          (this.state.justSwapped &&
                            this.state.sortVar_j === index)
                        ? css(
                            this.animations.swapPrevToCur,
                            this.styles.prevTransformOrigin
                          )
                        : undefined
                    }
                    x={160 + (500 / this.state.numElements) * index}
                    y={this.state.arrayContentsY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    {value}
                  </text>
                ))}
                <circle
                  cx={`${160 +
                    (500 / this.state.numElements) * this.state.sortVar_i -
                    500 / this.state.numElements / 2}`}
                  cy={this.state.arrayContentsY}
                  r="5"
                  fill="red"
                ></circle>
              </svg>
              <button
                onClick={() => {
                  this.setState(prevState => {
                    let newArray = prevState.array;

                    let cur = newArray[1];
                    let prev = newArray[0];
                    newArray[0] = cur;
                    newArray[1] = prev;

                    return { justSwapped: true, array: newArray };
                  });
                }}
              >
                Do It
              </button>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
