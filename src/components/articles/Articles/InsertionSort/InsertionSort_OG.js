import React from "react";
import { StyleSheet, css } from "aphrodite";

export default class InsertionSort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Location
      location: "",
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
      codeLines_OG: [
        "// Insertion Sort Pseudocode for Visualization",
        "// initialization",
        "index = 1",
        "i = 1",
        "j = 0",
        "",
        "// iterate over the array",
        "while(index < numElements)",
        "// set comparison indices for current values",
        "i = index",
        "j = index - 1",
        "// Get current and previous values",
        "current = array[i]",
        "previous = array[j]",
        "",
        "// keep comparing the current and previous values...",
        "while(current < previous)",
        "// Swap",
        "array[j] = current",
        "array[i] = previous",
        "",
        "// can j be decremented? We want to keep it in bounds!",
        "if(j > 0)",
        "// decrement comparison indicies (i & j)",
        "i = i - 1",
        "j = j - 1",
        "// Get values",
        "current = array[i]",
        "previous = array[j]",
        "else",
        "break // If j can't be decremented, increment index",
        "",
        "// increment",
        "index = index + 1 (33)"
      ],
      // Indentation of Code
      codeIndendation_OG: [
        0,
        0,
        0,
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
        3,
        3,
        3,
        2,
        3,
        2,
        1,
        1
      ],
      // Number of elements in the array (dependent on componentDidMount())
      numElements: 10,
      // The actual array being sorted (dependent on componentDidMount())
      array: [],
      // Animation Delay (Smaller = Faster)
      animationDelay: 300,
      // The Y Coordinates of the Indicies (0 to N-1) and the Array Contents
      arrayIndiciesY: 67,
      arrayContentsY: 133,
      // Number of comparisons
      numComparisons: 0,
      // Number of swaps
      numSwaps: 0,
      // Keeps track of sorting index
      sortVar_I: 1,
      // Keeps track of index as it is decrementing (for comparisons)
      sortVar_i: 1,
      sortIndex_i: 1,
      // Keeps track of previous index (for comparisons)
      sortVar_j: 0,
      sortIndex_j: 0,
      // The animation states
      comparedBeforeSwap: false,
      swapping: false,
      incrementing: false,
      decrementingJ: false,
      animateDecrementingJ: false,
      hittingWall: false,
      // can we take an action
      actionable: true,
      // SOLVE FUNCTIONS
      solving: false,
      finished: false
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
      array: array,
      numComparisons: 0,
      numSwaps: 0,
      sortVar_I: 1,
      sortVar_i: 1,
      sortVar_j: 0,
      swapping: false,
      incrementing: false,
      decrementingJ: false,
      animateDecrementingJ: false,
      actionable: true,
      solving: false,
      finished: false
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
      numComparisons: 0,
      numSwaps: 0,
      sortVar_I: 1,
      sortVar_i: 1,
      sortVar_j: 0,
      swapping: false,
      incrementing: false,
      decrementingJ: false,
      animateDecrementingJ: false,
      actionable: true,
      solving: false,
      finished: false
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
      numComparisons: 0,
      numSwaps: 0,
      sortVar_I: 1,
      sortVar_i: 1,
      sortVar_j: 0,
      swapping: false,
      incrementing: false,
      decrementingJ: false,
      animateDecrementingJ: false,
      actionable: true,
      solving: false,
      finished: false
    });
  }

  // Create an unsorted array
  createReversedArray() {
    let array = [];
    for (let i = 0; i < this.state.numElements; i++) {
      array.push(this.state.numElements - i);
    }

    this.setState({
      array: array,
      numComparisons: 0,
      numSwaps: 0,
      sortVar_I: 1,
      sortVar_i: 1,
      sortVar_j: 0,
      swapping: false,
      incrementing: false,
      decrementingJ: false,
      animateDecrementingJ: false,
      actionable: true,
      solving: false,
      finished: false
    });
  }

  //
  step() {
    if (this.state.actionable) {
      this.setState(prevState => {
        // Decrementing J?
        if (prevState.decrementingJ) {
          // Is J > 0?
          if (prevState.sortVar_j > 1) {
            console.log("decrementing j, j>0");

            // Set the timeout
            setTimeout(
              () =>
                this.setState({
                  actionable: true,
                  decrementingJ: false,
                  animateDecrementingJ: false
                }),
              this.state.animationDelay + 100
            );

            return {
              actionable: false,
              sortVar_j: prevState.sortVar_j - 2,
              animateDecrementingJ: true
            };
          } else {
            console.log("decrementing j => j hitting the wall");

            // Set the timeout
            setTimeout(
              () =>
                this.setState({
                  actionable: true,
                  decrementingJ: false,
                  animateDecrementingJ: false,
                  hittingWall: false
                }),
              this.state.animationDelay + 100
            );

            return {
              sortVar_j: -1,
              hittingWall: true,
              actionable: false,
              numComparisons: prevState.numComparisons + 1
            };
          }
        }
        // J > 0 => SWAP
        else if (
          prevState.array[prevState.sortVar_i] <
          prevState.array[prevState.sortVar_j]
          //&&  prevState.sortVar_j >= 0
        ) {
          if (prevState.comparedBeforeSwap === false) {
            // Set the timeout
            return {
              actionable: true,
              displayComparison: true,
              comparedBeforeSwap: true,
              numComparisons: prevState.numComparisons + 1
            };
          } else {
            console.log("swapping");
            // copy array and reassign positions
            let newArray = prevState.array;

            let cur = prevState.array[prevState.sortVar_i];
            let prev = prevState.array[prevState.sortVar_j];

            console.log(newArray);
            // Swap
            newArray[prevState.sortVar_j] = cur;
            newArray[prevState.sortVar_i] = prev;

            console.log(newArray);

            // Set the timeout
            setTimeout(
              () =>
                this.setState({
                  actionable: true,
                  swapping: false
                }),
              this.state.animationDelay + 100
            );

            return {
              array: newArray,
              sortVar_i: prevState.sortVar_j,
              sortVar_j: prevState.sortVar_i,
              numSwaps: prevState.numSwaps + 1,
              actionable: false,
              swapping: true,
              decrementingJ: true,
              comparedBeforeSwap: false,
              displayComparison: false
            };
          }
        }
        // increment
        else {
          // increment if the index is within bounds
          if (prevState.sortVar_I < prevState.numElements) {
            if (
              prevState.comparedBeforeSwap === false &&
              prevState.sortVar_j >= 0
            ) {
              return {
                actionable: true,
                displayComparison: true,
                comparedBeforeSwap: true,
                numComparisons: prevState.numComparisons + 1
              };
            } else {
              console.log(
                "incrementing w/" +
                  (this.state.sortVar_I + 1) * (500 / this.state.numElements)
              );

              // Set the timeout
              setTimeout(
                () =>
                  this.setState({
                    actionable: true,
                    incrementing: false
                  }),
                this.state.animationDelay + 100
              );

              return {
                sortVar_I: prevState.sortVar_I + 1,
                sortVar_i: prevState.sortVar_I + 1,
                sortVar_j: prevState.sortVar_I,
                distanceToGo:
                  (prevState.sortVar_I + 1) * (500 / this.state.numElements),
                sortVar_curVal: prevState.array[prevState.sortVar_I + 1],
                sortVar_prevVal: prevState.array[prevState.sortVar_I],
                actionable: false,
                incrementing: true,
                displayComparison: false,
                comparedBeforeSwap: false
              };
            }
          } else {
            console.log("sort finished!");
            return {
              finished: true,
              solving: false
            };
          }
        }
      });
    }
  }

  // //
  // step_OG() {
  //   if (this.state.actionable) {
  //     this.setState(prevState => {
  //       // Decrementing J?
  //       if (prevState.decrementingJ) {
  //         // Is J > 0?
  //         if (prevState.sortVar_j > 0) {
  //           console.log("decrementing j, j>0");

  //           // Set the timeout
  //           setTimeout(
  //             () =>
  //               this.setState({
  //                 actionable: true,
  //                 animateDecrementingJ: false
  //               }),
  //             this.state.animationDelay + 10
  //           );

  //           return {
  //             actionable: false,
  //             sortVar_j: prevState.sortVar_j - 2,
  //             decrementingJ: false,
  //             animateDecrementingJ: true
  //           };
  //         } else {
  //           console.log("decrementing j => j hitting the wall");
  //         }
  //       }
  //       // J > 0 => SWAP
  //       else if (
  //         prevState.array[prevState.sortVar_i] <
  //         prevState.array[prevState.sortVar_j]
  //         //&&  prevState.sortVar_j >= 0
  //       ) {
  //         console.log(
  //           "swapping " +
  //             prevState.array[prevState.sortVar_i] +
  //             " with " +
  //             prevState.array[prevState.sortVar_j]
  //         );
  //         // copy array and reassign positions
  //         let newArray = prevState.array;

  //         let cur = prevState.array[prevState.sortVar_i];
  //         let prev = prevState.array[prevState.sortVar_j];

  //         console.log(newArray);
  //         // Swap
  //         newArray[prevState.sortVar_j] = cur;
  //         newArray[prevState.sortVar_i] = prev;

  //         console.log(newArray);

  //         // Set the timeout
  //         setTimeout(
  //           () =>
  //             this.setState({
  //               actionable: true,
  //               swapping: false
  //             }),
  //           this.state.animationDelay + 10
  //         );

  //         return {
  //           array: newArray,
  //           sortVar_i: prevState.sortVar_j,
  //           sortVar_j: prevState.sortVar_i,
  //           numComparisons: prevState.numComparisons + 1,
  //           numSwaps: prevState.numSwaps + 1,
  //           actionable: false,
  //           swapping: true,
  //           decrementingJ: true
  //         };
  //       }
  //       // increment
  //       else {
  //         // increment if the index is within bounds
  //         if (prevState.sortVar_I < prevState.numElements) {
  //           console.log("incrementing");
  //           // Set the timeout
  //           setTimeout(
  //             () =>
  //               this.setState({
  //                 actionable: true,
  //                 incrementing: false
  //               }),
  //             this.state.animationDelay + 10
  //           );

  //           return {
  //             sortVar_I: prevState.sortVar_I + 1,
  //             sortVar_i: prevState.sortVar_I + 1,
  //             sortVar_j: prevState.sortVar_I,
  //             sortVar_curVal: prevState.array[prevState.sortVar_I + 1],
  //             sortVar_prevVal: prevState.array[prevState.sortVar_I],
  //             numComparisons: prevState.numComparisons + 1,
  //             actionable: false,
  //             incrementing: true
  //           };
  //         } else {
  //           console.log("sort finished!");
  //           return {
  //             finished: true,
  //             solving: false
  //           };
  //         }
  //       }
  //     });
  //   }
  // }

  // on every click, perform logic and  update position
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
              <svg
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
              </svg>
              <br />
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
