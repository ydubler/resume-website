import React from "react";
import { StyleSheet, css } from "aphrodite";

export default class InsertionSort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Location
      location: "",
      // Buffer
      buffer: 15,
      // Lines of Codes
      codeLines: [
        "// Insertion Sort Abstraction",
        "=> Initialize Variables",
        "",
        "// Iterate over array",
        "while(index < numElements)",
        "",
        " => Reset Index Pointers (i & j)",
        "",
        "// Compare the current value to the previous value",
        "while(current < previous)",
        "",
        "=> Swap Values",
        "",
        "if(j > 0)",
        "=> Decrement Indices",
        "else",
        "break",
        "",
        "=> Increment index"
      ],
      // Indentation of Code
      codeIndendation: [
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        3,
        2,
        3,
        2,
        1
      ],
      sort_array: [9, 8, 7, 6],
      sort_numElements: 10,
      sort_index: 1,
      sort_i: 1,
      sort_j: 0,
      sort_started: false,
      sort_started_display: false,
      sort_finished: false,
      sort_finished_display: false,
      sort_initValues: false,
      sort_initValues_display: false,
      sort_insideFirstLoop: false,
      sort_insideFirstLoop_display: false,
      sort_1_orientIndices: false,
      sort_1_orientIndices_display: false,
      sort_1_updateValues: false,
      sort_1_updateValues_display: false,
      sort_1_insideSecondLoop: false,
      sort_1_insideSecondLoop_display: false,
      sort_1_increment: false,
      sort_1_increment_display: false,
      sort_1_2_updateValues: false,
      sort_1_2_updateValues_display: false,
      sort_1_2_swap: false,
      sort_1_2_swap_display: false,
      sort_1_2_decrement: false,
      sort_1_2_decrement_display: false
    };

    // this.styles = StyleSheet.create({
    //   curTransformOrigin: {
    //     transformOrigin: `${160 +
    //       (500 / this.state.numElements) * this.state.sortVar_i -
    //       500 / this.state.numElements / 2}px 110px`
    //   },
    //   prevTransformOrigin: {
    //     transformOrigin: `${160 +
    //       (500 / this.state.numElements) * this.state.sortVar_j -
    //       500 / this.state.numElements / 2}px 110px`
    //   }
    // });

    // Aphrodite Animation Stylesheet
    this.animations = StyleSheet.create({
      incrementIndex: {
        animationName: {
          ["0%"]: {
            transform: `translate(-${500 / this.state.numElements}px, 0px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            //["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      incrementCircle: {
        animationName: {
          ["0%"]: {
            transform: `translate(-${this.state.sortVar_I *
              (500 / this.state.numElements)}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      decrementJ: {
        animationName: {
          ["0%"]: {
            transform: `translate(${2 *
              (500 / this.state.numElements)}px, 0px) `
            // ["-webkit-transform"]: `translate(${2 *
            //   (500 / this.state.numElements)}px, 0px)`
          },
          ["50%"]: {
            transform: `translate(${500 / this.state.numElements}px, 30px)`
            // ["-webkit-transform"]: `translate(${2 *
            //   (500 / this.state.numElements)}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            // ["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      hittingWall: {
        animationName: {
          ["0%"]: {
            transform: `translate(${500 / this.state.numElements}px, -30px) `
            // ["-webkit-transform"]: `translate(${2 *
            //   (500 / this.state.numElements)}px, 0px)`
          },
          ["10%"]: {
            transform: `translate(${500 / this.state.numElements}px, 0px)`
            // ["-webkit-transform"]: `translate(${2 *
            //   (500 / this.state.numElements)}px, 0px)`
          },
          ["50%"]: {
            transform: `translate(${500 / this.state.numElements / 2}px, 0px)`
            // ["-webkit-transform"]: `translate(${2 *
            //   (500 / this.state.numElements)}px, 0px)`
          },
          ["95%"]: {
            transform: `translate(-20px, 0px)`
            // ["-webkit-transform"]: `translate(${2 *
            //   (500 / this.state.numElements)}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            // ["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "ease-in"
      },
      wallAppear: {
        animationName: {
          ["0%"]: {
            opacity: "0"
          },
          ["50%"]: {
            opacity: "0.5"
          },
          ["90%"]: {
            opacity: "1.0"
          },
          ["100%"]: {
            opacity: "0.5"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "ease-in"
      },
      swapCurToPrevCircle: {
        animationName: {
          ["0%"]: {
            transform: `translate(${500 / this.state.numElements}px, 0px)`
            // ["-webkit-transform"]: `translate(${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["33%"]: {
            transform: `translate(${500 / this.state.numElements}px, -20px)`
            // ["-webkit-transform"]: `translate(${500 /
            //   this.state.numElements}px, -20px)`
          },
          ["66%"]: {
            transform: `translate(0px, -20px)`
            // ["-webkit-transform"]: `translate(0px, -20px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            // ["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      swapPrevToCurCircle: {
        animationName: {
          ["0%"]: {
            transform: `translate(-${500 / this.state.numElements}px, 0px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["33%"]: {
            transform: `translate(-${500 / this.state.numElements}px, 20px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 20px)`
          },
          ["66%"]: {
            transform: `translate(0px, 20px)`
            // ["-webkit-transform"]: `translate(0px, 20px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            // ["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `${this.state.animationDelay / 1000}s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      }
    });

    this.createUnsortedArray = this.createUnsortedArray.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.step = this.step.bind(this);
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
      array: array
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
      array: array
    });
  }

  // Create an unsorted array
  createSortedArray() {
    let array = [];
    for (let i = 0; i < this.state.numElements; i++) {
      array.push(i);
    }

    this.setState({
      array: array,
      numComparisons: 0
    });
  }

  // Create an unsorted array
  createReversedArray() {
    let array = [];
    for (let i = 0; i < this.state.numElements; i++) {
      array.push(this.state.numElements - i);
    }

    this.setState({
      array: array
    });
  }

  //
  step() {
    this.setState(prev => {
      // if we haven't started
      if (!prev.sort_started) {
        console.log("Have not started sort...\nInitializing Values...");
        return { sort_started: true, sort_started_display: true };
      }
      // if we haven't initialized values
      else if (!prev.sort_initValues) {
        console.log(
          "Values initialized...\nDetermining if we can enter first loop"
        );
        return {
          sort_started_display: false,
          sort_initValues: true,
          sort_initValues_display: true
        };
      }
      // if we aren't inside the first loop
      else if (!prev.sort_insideFirstLoop) {
        if (prev.sort_index < prev.sort_numElements) {
          console.log("First Loop: index < numElements");
          return {
            sort_initValues_display: false,
            sort_insideFirstLoop: true,
            sort_insideFirstLoop_display: true // turn to false when first loop is finished
          };
        }
        // if we just exited the first loop then the sort is finished
        else {
          console.log("Sort finished. " + prev.sort_array);

          return {
            sort_insideFirstLoop_display: false,
            sort_finished: true,
            sort_finished_display: true
          };
        }
      }
      // if we are inside the first loop
      else if (prev.sort_insideFirstLoop) {
        // if we haven't oriented the indices
        if (!prev.sort_1_orientIndices) {
          console.log("Loop 1: Orienting Indices.");
          return {
            sort_1_orientIndices: true,
            sort_1_orientIndices_display: true,
            sort_i: prev.sort_index, // delta
            sort_j: prev.sort_index - 1 // delta
          };
        }
        // if we haven't updated the values
        else if (!prev.sort_1_updateValues) {
          console.log("Loop 1: Updating Values.");
          return {
            sort_1_orientIndices_display: false,
            sort_1_updateValues: true,
            sort_1_updateValues_display: true
          };
        }
        // if we aren't inside the second loop
        else if (!prev.sort_1_insideSecondLoop) {
          console.log(
            prev.sort_array[prev.sort_i],
            prev.sort_array[prev.sort_j]
          );
          // if the current element is less than the previous element
          if (prev.sort_array[prev.sort_i] < prev.sort_array[prev.sort_j]) {
            console.log("Entering 2nd Loop");
            return {
              sort_1_updateValues_display: false,
              sort_1_insideSecondLoop: true,
              sort_1_insideSecondLoop_display: true
            };
          }
          // increment
          else {
            console.log("Incrementing.");
            return {
              sort_insideFirstLoop: false,
              sort_1_insideSecondLoop: false,
              sort_1_insideSecondLoop_display: false,
              sort_1_increment: true,
              sort_1_increment_display: true,
              sort_1_orientIndices: false,
              sort_1_orientIndices_display: false,
              sort_1_updateValues: false,
              sort_1_updateValues_display: false,
              sort_index: prev.sort_index + 1 // delta
            };
          }
        }
        // if we are inside the second loop
        else {
          // update values
          if (!prev.sort_1_2_updateValues) {
            console.log("Second Loop: Updating Values");
            return {
              sort_1_2_updateValues: true,
              sort_1_2_updateValues_display: true
            };
          }
          // swap
          else if (!prev.sort_1_2_swap) {
            console.log("Second Loop: Swapping");

            const cur = prev.sort_array[prev.sort_i];
            const prv = prev.sort_array[prev.sort_j];

            let newArray = prev.sort_array;
            newArray[prev.sort_j] = cur;
            newArray[prev.sort_i] = prv;

            return {
              sort_1_2_updateValues_display: false,
              sort_1_2_swap: true,
              sort_1_2_swap_display: true,
              sort_array: newArray
            };
          }
          // decrement
          else if (!prev.sort_1_2_decrement) {
            console.log("Second Loop: Decrementing");
            return {
              sort_1_2_swap_display: false,
              sort_1_2_decrement: true,
              sort_1_2_decrement_display: true,
              sort_i: prev.sort_i - 1,
              sort_j: prev.sort_j - 1
            };
          }
          // break out of second loop (and re-evaluate if it needs to run again)
          else {
            console.log("Second Loop Iteration Complete");
            return {
              sort_1_insideSecondLoop: false,
              sort_1_2_updateValues: false,
              sort_1_2_updateValues_display: false,
              sort_1_2_swap: false,
              sort_1_2_swap_display: false,
              sort_1_2_decrement: false,
              sort_1_2_decrement_display: false
            };
          }
        }
      } else {
        console.log("Last if statement.");
      }
    });
  }

  // on every click, perform logic and update position
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
              Visual Demo of Insertion Sort
              <svg width="680" height="390">
                <rect
                  width="100%"
                  height="100%"
                  fill="white"
                  stroke="black"
                  rx="15"
                ></rect>
                <rect
                  width="15px"
                  height="15px"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="15"
                  width="15px"
                  height="75px"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="90"
                  width="15px"
                  height="15"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="105"
                  width="15"
                  height="75"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="180"
                  width="15"
                  height="30"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="180"
                  width="15"
                  height="30"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="210"
                  width="15"
                  height="75"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="285"
                  width="15"
                  height="15"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="300"
                  width="15"
                  height="75"
                  stroke="red"
                  fill="white"
                ></rect>
                <rect
                  x="0"
                  y="375"
                  width="15"
                  height="15"
                  stroke="red"
                  fill="white"
                ></rect>

                <circle
                  cx="100"
                  cy="248"
                  r="20"
                  width="50"
                  height="50"
                  stroke="red"
                  fill="yellow"
                ></circle>

                <text
                  x="100"
                  y="248"
                  color="black"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="30"
                >
                  0
                </text>
              </svg>
              {/* <svg
                width="100%"
                height="200px"
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
                  y={this.state.arrayIndiciesY}
                  dominantBaseline="middle"
                  textAnchor="end"
                >
                  i
                </text>
                <circle
                  className={css(
                    (this.state.incrementing &&
                      this.animations.incrementIndex) ||
                      undefined
                  )}
                  cx={
                    160 + (500 / this.state.numElements) * this.state.sortVar_I
                  }
                  cy={this.state.arrayIndiciesY}
                  r="16"
                  stroke="gold"
                  strokeWidth="4"
                  fill="transparent"
                ></circle>
                {[...Array(this.state.numElements).keys()].map(index => (
                  <text
                    key={Math.random()}
                    x={160 + (500 / this.state.numElements) * index}
                    y={this.state.arrayIndiciesY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill={this.state.sortVar_I === index ? "black" : "gray"}
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
                  className={
                    (this.state.swapping &&
                      css(this.animations.swapPrevToCurCircle)) ||
                    (this.state.animateDecrementingJ &&
                      css(this.animations.decrementJ)) ||
                    (this.state.hittingWall &&
                      css(this.animations.hittingWall)) ||
                    undefined
                  }
                  cx={
                    this.state.sortVar_j < 0
                      ? `160`
                      : `${160 +
                          (500 / this.state.numElements) *
                            this.state.sortVar_j}`
                  }
                  cy={
                    this.state.sortVar_j < 0
                      ? this.state.arrayContentsY + 40
                      : this.state.arrayContentsY
                  }
                  r="16"
                  fill="orange"
                ></circle>
                <circle
                  className={
                    (this.state.swapping &&
                      css(this.animations.swapCurToPrevCircle)) ||
                    undefined
                  }
                  cx={`${160 +
                    (500 / this.state.numElements) * this.state.sortVar_i}`}
                  cy={this.state.arrayContentsY}
                  r="16"
                  fill="gold"
                ></circle>
                {this.state.array.map((value, index) => (
                  <g
                    key={Math.random()}
                    className={
                      (this.state.swapping &&
                        this.state.sortVar_i === index &&
                        css(this.animations.swapCurToPrevCircle)) ||
                      (this.state.swapping &&
                        this.state.sortVar_j === index &&
                        css(this.animations.swapPrevToCurCircle)) ||
                      undefined
                    }
                  >
                    <text
                      x={160 + (500 / this.state.numElements) * index}
                      y={this.state.arrayContentsY}
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      {value}
                    </text>
                    {this.state.displayComparison &&
                      index === this.state.sortVar_i && (
                        <text
                          x={
                            160 + (500 / this.state.numElements) * (index - 0.5)
                          }
                          y={this.state.arrayContentsY}
                          dominantBaseline="middle"
                          textAnchor="middle"
                        >
                          {this.state.array[this.state.sortVar_i] <
                          this.state.array[this.state.sortVar_j]
                            ? ">"
                            : "<"}
                        </text>
                      )}
                  </g>
                ))}
                <line
                  className={
                    (this.state.hittingWall &&
                      css(this.animations.wallAppear)) ||
                    undefined
                  }
                  opacity={this.state.sortVar_j < 0 ? "1.0" : "0.0"}
                  x1="130"
                  y1="30"
                  x2="130"
                  y2="200"
                  stroke="red"
                  fill="red"
                ></line>
              </svg>
              <button onClick={() => this.step()}>Step</button>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  if (this.state.solving) {
                    clearInterval(timer);
                    this.setState({ solving: false });
                  } else {
                    if (this.state.finished) {
                      this.setState({ solving: false });
                    } else {
                      this.step();
                      this.setState({ solving: true });
                      // Set the timeout
                      var timer = setInterval(() => {
                        console.log("timer firing");
                        if (this.state.solving && !this.state.finished) {
                          this.step();
                        } else {
                          clearInterval(timer);
                        }
                      }, this.state.animationDelay + 100);
                    }
                  }
                }}
              >
                {this.state.solving ? "Pause" : "Play"}
              </button>
              &nbsp;&nbsp;&nbsp;Comparisons: {this.state.numComparisons} ||
              Swaps: {this.state.numSwaps}
              <button
                style={{ float: "right" }}
                onClick={() => {
                  this.createUnsortedArray();
                }}
              >
                Reset (Random)
              </button>
              <button
                style={{ float: "right" }}
                onClick={() => {
                  this.createSortedArray();
                }}
              >
                Reset (Best Case)
              </button>
              <button
                style={{ float: "right" }}
                onClick={() => {
                  this.createReversedArray();
                }}
              >
                Reset (Worst Case)
              </button>
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
                      fill={
                        this.state.incrementing && index === 18
                          ? "azure"
                          : this.state.animateDecrementingJ &&
                            (index === 14 || index === 13)
                          ? "azure"
                          : this.state.swapping && index === 11
                          ? "azure"
                          : this.state.comparedBeforeSwap && index === 9
                          ? "azure"
                          : "aliceblue"
                      }
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
              </svg> */}
              <br />
              <button onClick={() => this.step()}>STEP</button>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
