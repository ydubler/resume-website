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
      codeLinesLit: [],
      codeLines: [
        "",
        "// Initialization",
        "index = 1",
        "curIndex = 1",
        "prevIndex = 0",
        "",
        "// Enter into Iteration Loop (blue arrows)",
        "while(index < numElements)",
        "",
        "// Orient the current and previous indices",
        "curIndex = index",
        "prevIndex = index - 1",
        "",
        "// Get the current and previous values",
        "current = array[curIndex]",
        "previous = array[prevIndex]",
        "",
        "// Enter into Swap Loop (palegreen/mediumvioletred arrows)",
        "while(current < previous && prevIndex >= 0)",
        "",
        "// Get the current and previous elements ",
        "current = array[curIndex]",
        "previous = array[prevIndex]",
        "",
        "// Swap current and previous elements",
        "array[curIndex] = previous",
        "array[prevIndex] = current",
        "",
        "// Decrement indices",
        "curIndex--",
        "prevIndex--",
        "",
        "// Increment index",
        "index++",
        "",
        "// Array is sorted!",
        ""
      ],
      // Indentation of Code
      codeIndendation: [
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
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1,
        0,
        0,
        0
      ],
      sort_solving: false,
      sort_array: [9, 8, 7, 6, 5, 4, 3],
      sort_numElements: 10,
      sort_circleRadius: 25,
      sort_index: 1,
      sort_i: 1,
      sort_i_circle: 1,
      sort_j_circle: 0,
      sort_j: 0,
      sort_curVal: 0,
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
      sort_1_insideSecondLoop_numArrows: 2,
      sort_1_increment: false,
      sort_1_increment_display: false,
      sort_1_2_updateValues: false,
      sort_1_2_updateValues_display: false,
      sort_1_2_swap: false,
      sort_1_2_swap_display: false,
      sort_1_2_decrement: false,
      sort_1_2_decrement_display: false
    };

    // Aphrodite Animation Stylesheet
    this.animations = StyleSheet.create({
      incrementIndex: {
        animationName: {
          ["0%"]: {
            transform: `translate(-${451 /
              (this.state.sort_numElements + 1)}px, 0px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            //["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `0.5s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      decrementIndices: {
        animationName: {
          ["0%"]: {
            transform: `translate(${451 /
              (this.state.sort_numElements + 1)}px, 0px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            //["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `0.5s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      swapCurrent: {
        animationName: {
          ["0%"]: {
            transform: `translate(${451 /
              (this.state.sort_numElements + 1)}px, 0px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["50%"]: {
            transform: `translate(${451 /
              (2 * (this.state.sort_numElements + 1))}px, 15px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            //["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `0.5s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      },
      swapPrevious: {
        animationName: {
          ["0%"]: {
            transform: `translate(-${451 /
              (this.state.sort_numElements + 1)}px, 0px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["50%"]: {
            transform: `translate(-${451 /
              (2 * (this.state.sort_numElements + 1))}px, -15px)`
            // ["-webkit-transform"]: `translate(-${500 /
            //   this.state.numElements}px, 0px)`
          },
          ["100%"]: {
            transform: "translate(0px, 0px)"
            //["-webkit-transform"]: "translate(0px, 0px)"
          }
        },
        animationDuration: `0.5s`,
        animationIterationCount: "once",
        animationTimingFunction: "linear"
      }
    });

    this.createUnsortedArray = this.createUnsortedArray.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.step = this.step.bind(this);
    this.resetSortRandom = this.resetSortRandom.bind(this);
    this.resetSortBest = this.resetSortBest.bind(this);
    this.resetSortWorst = this.resetSortWorst.bind(this);
  }

  componentDidMount() {
    // Define the array
    let array = [];
    for (let i = 0; i < this.state.sort_numElements; i++) {
      array.push(i);
    }

    // Shuffle the array
    this.shuffle(array);

    // Set the state
    this.setState({
      location: this.props.location,
      sort_array: array
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
    for (let i = 0; i < this.state.sort_numElements; i++) {
      array.push(i);
    }

    this.shuffle(array);

    this.setState({
      sort_array: array
    });
  }

  // Create a sorted array
  createSortedArray() {
    let array = [];
    for (let i = 0; i < this.state.sort_numElements; i++) {
      array.push(i);
    }

    this.setState({
      sort_array: array,
      numComparisons: 0
    });
  }

  // Create an unsorted array
  createReversedArray() {
    let array = [];
    for (let i = 0; i < this.state.sort_numElements; i++) {
      array.push(this.state.sort_numElements - i);
    }

    this.setState({
      sort_array: array
    });
  }

  resetSortRandom() {
    // Define the array
    let array = [];
    for (let i = 0; i < this.state.sort_numElements; i++) {
      array.push(i);
    }

    // Shuffle the array
    this.shuffle(array);

    this.setState({
      sort_array: array,
      sort_circleRadius: 25,
      sort_index: 1,
      sort_i: 1,
      sort_i_circle: 1,
      sort_j_circle: 0,
      sort_j: 0,
      sort_curVal: 0,
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
      sort_1_insideSecondLoop_numArrows: 2,
      sort_1_increment: false,
      sort_1_increment_display: false,
      sort_1_2_updateValues: false,
      sort_1_2_updateValues_display: false,
      sort_1_2_swap: false,
      sort_1_2_swap_display: false,
      sort_1_2_decrement: false,
      sort_1_2_decrement_display: false
    });
  }

  resetSortWorst() {
    // Define the array
    let array = [];
    for (let i = this.state.sort_numElements - 1; i >= 0; i--) {
      array.push(i);
    }

    this.setState({
      sort_array: array,
      sort_circleRadius: 25,
      sort_index: 1,
      sort_i: 1,
      sort_i_circle: 1,
      sort_j_circle: 0,
      sort_j: 0,
      sort_curVal: 0,
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
      sort_1_insideSecondLoop_numArrows: 2,
      sort_1_increment: false,
      sort_1_increment_display: false,
      sort_1_2_updateValues: false,
      sort_1_2_updateValues_display: false,
      sort_1_2_swap: false,
      sort_1_2_swap_display: false,
      sort_1_2_decrement: false,
      sort_1_2_decrement_display: false
    });
  }

  resetSortBest() {
    // Define the array
    let array = [];
    for (let i = 0; i < this.state.sort_numElements; i++) {
      array.push(i);
    }

    this.setState({
      sort_array: array,
      sort_circleRadius: 25,
      sort_index: 1,
      sort_i: 1,
      sort_i_circle: 1,
      sort_j_circle: 0,
      sort_j: 0,
      sort_curVal: 0,
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
      sort_1_insideSecondLoop_numArrows: 2,
      sort_1_increment: false,
      sort_1_increment_display: false,
      sort_1_2_updateValues: false,
      sort_1_2_updateValues_display: false,
      sort_1_2_swap: false,
      sort_1_2_swap_display: false,
      sort_1_2_decrement: false,
      sort_1_2_decrement_display: false
    });
  }

  // Step through
  step() {
    this.setState(prev => {
      // if we haven't started
      // if (!prev.sort_started) {
      //   console.log("Have not started sort...\nInitializing Values...");
      //   return {
      //     sort_started: true,
      //     sort_started_display: true,
      //     codeLinesLit: []
      //   };
      // }

      // if we haven't initialized values
      if (!prev.sort_initValues) {
        console.log(
          "Values initialized...\nDetermining if we can enter first loop"
        );
        return {
          //sort_started_display: false,
          sort_initValues: true,
          sort_initValues_display: true,
          codeLinesLit: [1, 2, 3, 4]
        };
      }
      // if we aren't inside the first loop
      else if (!prev.sort_insideFirstLoop) {
        if (prev.sort_index < prev.sort_numElements) {
          console.log("First Loop: index < numElements");
          return {
            sort_1_increment_display: false,
            sort_initValues_display: false,
            sort_insideFirstLoop: true,
            sort_insideFirstLoop_display: true, // turn to false when first loop is finished
            codeLinesLit: [6, 7]
          };
        }
        // if we just exited the first loop then the sort is finished
        else if (!prev.sort_finished) {
          console.log("Sort finished. " + prev.sort_array);

          return {
            sort_insideFirstLoop_display: false,
            sort_1_increment_display: false,
            sort_finished: true,
            sort_finished_display: true,
            codeLinesLit: [35]
          };
        } else {
          console.log("Does nothing");
        }
      }
      // if we are inside the first loop
      else if (prev.sort_insideFirstLoop) {
        // if we haven't oriented the indices
        if (!prev.sort_1_orientIndices) {
          console.log("Loop 1: Orienting Indices.");
          return {
            sort_1_increment_display: false,
            sort_1_orientIndices: true,
            sort_1_orientIndices_display: true,
            sort_i: prev.sort_index, // delta
            sort_j: prev.sort_index - 1, // delta
            codeLinesLit: [9, 10, 11]
          };
        }
        // if we haven't updated the values
        else if (!prev.sort_1_updateValues) {
          console.log("Loop 1: Updating Values.");

          // determine how many palegreen arrows (j decrements) we are rendering
          let numArrows = 2;
          let curVal = prev.sort_array[prev.sort_index];
          let cur_j = prev.sort_index - 2;
          while (prev.sort_array[cur_j] > curVal && cur_j >= 0) {
            numArrows++;
            cur_j--;
          }

          return {
            sort_1_orientIndices_display: false,
            sort_1_updateValues: true,
            sort_1_updateValues_display: true,
            sort_curVal: curVal,
            sort_i_circle: prev.sort_i,
            sort_j_circle: prev.sort_j,
            sort_1_insideSecondLoop_numArrows: numArrows,
            codeLinesLit: [13, 14, 15]
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
              sort_1_insideSecondLoop_display: true,
              codeLinesLit: [17, 18]
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
              sort_index: prev.sort_index + 1, // delta
              codeLinesLit: [32, 33]
            };
          }
        }
        // if we are inside the second loop
        else {
          // update values
          if (!prev.sort_1_2_updateValues) {
            console.log("Second Loop: Updating Values");
            return {
              sort_i_circle: prev.sort_i,
              sort_j_circle: prev.sort_j,
              sort_1_increment_display: false,
              sort_1_2_updateValues: true,
              sort_1_2_updateValues_display: true,
              codeLinesLit: [20, 21, 22]
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
              sort_array: newArray,
              sort_i_circle: prev.sort_j,
              sort_j_circle: prev.sort_i,
              codeLinesLit: [24, 25, 26]
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
              sort_j: prev.sort_j - 1,
              codeLinesLit: [28, 29, 30]
            };
          }
          // break out of second loop (and re-evaluate if it needs to run again)
          else {
            // console.log("Second Loop Iteration Complete");
            // return {
            //   sort_1_insideSecondLoop: false,
            //   sort_1_2_updateValues: false,
            //   sort_1_2_updateValues_display: false,
            //   sort_1_2_swap: false,
            //   sort_1_2_swap_display: false,
            //   sort_1_2_decrement: false,
            //   sort_1_2_decrement_display: false
            // };

            //if the current element is less than the previous element
            if (prev.sort_array[prev.sort_i] < prev.sort_array[prev.sort_j]) {
              console.log("Entering 2nd Loop");

              return {
                sort_1_insideSecondLoop: true,
                sort_1_insideSecondLoop_display: true,
                sort_1_2_updateValues: false,
                sort_1_2_updateValues_display: false,
                sort_1_2_swap: false,
                sort_1_2_swap_display: false,
                sort_1_2_decrement: false,
                sort_1_2_decrement_display: false,
                codeLinesLit: [17, 18]
              };
            }
            // increment
            else {
              console.log("Incrementing.");
              return {
                sort_insideFirstLoop: false,
                sort_1_insideSecondLoop: false,
                sort_1_insideSecondLoop_display: false,
                sort_1_2_updateValues: false,
                sort_1_2_updateValues_display: false,
                sort_1_2_swap: false,
                sort_1_2_swap_display: false,
                sort_1_2_decrement: false,
                sort_1_2_decrement_display: false,
                sort_1_increment: true,
                sort_1_increment_display: true,
                sort_1_orientIndices: false,
                sort_1_orientIndices_display: false,
                sort_1_updateValues: false,
                sort_1_updateValues_display: false,
                sort_index: prev.sort_index + 1, // delta
                codeLinesLit: [32, 33]
              };
            }
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
                        this.state.codeLinesLit.includes(index)
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
              <input
                type="range"
                min="4"
                max="14"
                defaultValue="8"
                step="1"
                onChange={e => {
                  console.log("Array now has " + e.target.value + " elements.");
                  const numElements = parseInt(e.target.value);
                  // Define the array
                  let array = [];
                  for (let i = 0; i < numElements; i++) {
                    array.push(i);
                  }

                  // Shuffle the array
                  this.shuffle(array);

                  // Aphrodite Animation Stylesheet
                  this.animations = StyleSheet.create({
                    incrementIndex: {
                      animationName: {
                        ["0%"]: {
                          transform: `translate(-${451 /
                            (numElements + 1)}px, 0px)`
                          // ["-webkit-transform"]: `translate(-${500 /
                          //   this.state.numElements}px, 0px)`
                        },
                        ["100%"]: {
                          transform: "translate(0px, 0px)"
                          //["-webkit-transform"]: "translate(0px, 0px)"
                        }
                      },
                      animationDuration: `0.5s`,
                      animationIterationCount: "once",
                      animationTimingFunction: "linear"
                    },
                    decrementIndices: {
                      animationName: {
                        ["0%"]: {
                          transform: `translate(${451 /
                            (numElements + 1)}px, 0px)`
                          // ["-webkit-transform"]: `translate(-${500 /
                          //   this.state.numElements}px, 0px)`
                        },
                        ["100%"]: {
                          transform: "translate(0px, 0px)"
                          //["-webkit-transform"]: "translate(0px, 0px)"
                        }
                      },
                      animationDuration: `0.5s`,
                      animationIterationCount: "once",
                      animationTimingFunction: "linear"
                    },
                    swapCurrent: {
                      animationName: {
                        ["0%"]: {
                          transform: `translate(${451 /
                            (numElements + 1)}px, 0px)`
                          // ["-webkit-transform"]: `translate(-${500 /
                          //   this.state.numElements}px, 0px)`
                        },
                        ["50%"]: {
                          transform: `translate(${451 /
                            (2 * (numElements + 1))}px, 15px)`
                          // ["-webkit-transform"]: `translate(-${500 /
                          //   this.state.numElements}px, 0px)`
                        },
                        ["100%"]: {
                          transform: "translate(0px, 0px)"
                          //["-webkit-transform"]: "translate(0px, 0px)"
                        }
                      },
                      animationDuration: `0.5s`,
                      animationIterationCount: "once",
                      animationTimingFunction: "linear"
                    },
                    swapPrevious: {
                      animationName: {
                        ["0%"]: {
                          transform: `translate(-${451 /
                            (numElements + 1)}px, 0px)`
                          // ["-webkit-transform"]: `translate(-${500 /
                          //   this.state.numElements}px, 0px)`
                        },
                        ["50%"]: {
                          transform: `translate(-${451 /
                            (2 * (numElements + 1))}px, -15px)`
                          // ["-webkit-transform"]: `translate(-${500 /
                          //   this.state.numElements}px, 0px)`
                        },
                        ["100%"]: {
                          transform: "translate(0px, 0px)"
                          //["-webkit-transform"]: "translate(0px, 0px)"
                        }
                      },
                      animationDuration: `0.5s`,
                      animationIterationCount: "once",
                      animationTimingFunction: "linear"
                    }
                  });

                  // Set the state
                  this.setState({
                    sort_numElements: numElements,
                    sort_array: array,
                    sort_solving: false,
                    sort_circleRadius: 25,
                    sort_index: 1,
                    sort_i: 1,
                    sort_i_circle: 1,
                    sort_j_circle: 0,
                    sort_j: 0,
                    sort_curVal: 0,
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
                    sort_1_insideSecondLoop_numArrows: 2,
                    sort_1_increment: false,
                    sort_1_increment_display: false,
                    sort_1_2_updateValues: false,
                    sort_1_2_updateValues_display: false,
                    sort_1_2_swap: false,
                    sort_1_2_swap_display: false,
                    sort_1_2_decrement: false,
                    sort_1_2_decrement_display: false
                  });
                }}
              ></input>
              <svg width="680" height="255">
                <rect
                  width="100%"
                  height="100%"
                  fill="white"
                  stroke="black"
                  rx="15"
                ></rect>
                {/* Render Blue Arrows (Iteration Loop) */}
                {this.state.sort_insideFirstLoop_display &&
                  [...Array(this.state.sort_numElements).keys()].map(index => (
                    <>
                      <line
                        key={Math.random()}
                        x1={
                          197 +
                          (index + 2) *
                            (451 / (this.state.sort_numElements + 1))
                        }
                        y1="30"
                        x2={
                          197 +
                          (index + 2) *
                            (451 / (this.state.sort_numElements + 1))
                        }
                        y2="65"
                        stroke="blue"
                        opacity={
                          this.state.sort_index === index + 1 ? "1.0" : "0.3"
                        }
                      ></line>
                      <line
                        key={Math.random()}
                        x1={
                          192 +
                          (index + 2) *
                            (451 / (this.state.sort_numElements + 1))
                        }
                        y1="60"
                        x2={
                          197 +
                          (index + 2) *
                            (451 / (this.state.sort_numElements + 1))
                        }
                        y2="65"
                        stroke="blue"
                        opacity={
                          this.state.sort_index === index + 1 ? "1.0" : "0.3"
                        }
                      ></line>
                      <line
                        key={Math.random()}
                        x1={
                          202 +
                          (index + 2) *
                            (451 / (this.state.sort_numElements + 1))
                        }
                        y1="60"
                        x2={
                          197 +
                          (index + 2) *
                            (451 / (this.state.sort_numElements + 1))
                        }
                        y2="65"
                        stroke="blue"
                        opacity={
                          this.state.sort_index === index + 1 ? "1.0" : "0.3"
                        }
                      ></line>
                    </>
                  ))}
                <text
                  x="180"
                  y="85"
                  fontSize="20"
                  dominantBaseline="middle"
                  textAnchor="end"
                  fill="black"
                >
                  index
                </text>
                {/* Render Indices */}
                {[...Array(this.state.sort_numElements).keys()].map(index => (
                  <>
                    {/*  */}
                    <text
                      key={Math.random()}
                      x={
                        197 +
                        451 / (this.state.sort_numElements + 1) +
                        index * (451 / (this.state.sort_numElements + 1))
                      }
                      y="85"
                      fontSize="20"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="black"
                    >
                      {index}
                    </text>
                  </>
                ))}
                {/* array[index] */}
                <text
                  x="180"
                  y="150"
                  fontSize="20"
                  dominantBaseline="middle"
                  textAnchor="end"
                  fill="black"
                >
                  array[index]
                </text>
                {this.state.sort_initValues && !this.state.sort_finished && (
                  <>
                    <circle
                      className={
                        this.state.sort_1_2_swap_display
                          ? css(this.animations.swapCurrent)
                          : undefined
                      }
                      cx={
                        197 +
                        (this.state.sort_i_circle + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      cy="150"
                      r="15"
                      fill="orange"
                    ></circle>
                    <circle
                      className={
                        this.state.sort_1_2_swap_display
                          ? css(this.animations.swapPrevious)
                          : undefined
                      }
                      cx={
                        197 +
                        (this.state.sort_j_circle + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      cy="150"
                      r="15"
                      fill="mediumvioletred"
                    ></circle>
                  </>
                )}
                {/* Render array[indices] */}
                {this.state.sort_array.map((value, index) => (
                  <>
                    {index === this.state.sort_i ? (
                      <g
                        className={
                          this.state.sort_1_2_swap_display
                            ? css(this.animations.swapPrevious)
                            : undefined
                        }
                      >
                        <text
                          key={Math.random()}
                          x={
                            197 +
                            451 / (this.state.sort_numElements + 1) +
                            index * (451 / (this.state.sort_numElements + 1))
                          }
                          y="150"
                          fontSize="20"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          fill="black"
                        >
                          {value}
                        </text>
                      </g>
                    ) : index === this.state.sort_j ? (
                      <g
                        className={
                          this.state.sort_1_2_swap_display
                            ? css(this.animations.swapCurrent)
                            : undefined
                        }
                      >
                        <text
                          key={Math.random()}
                          x={
                            197 +
                            451 / (this.state.sort_numElements + 1) +
                            index * (451 / (this.state.sort_numElements + 1))
                          }
                          y="150"
                          fontSize="20"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          fill="black"
                        >
                          {value}
                        </text>
                      </g>
                    ) : (
                      <text
                        key={Math.random()}
                        x={
                          197 +
                          451 / (this.state.sort_numElements + 1) +
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y="150"
                        fontSize="20"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="black"
                      >
                        {value}
                      </text>
                    )}
                  </>
                ))}
                {/* Render palegreen Arrows (Swap Loop) */}
                {this.state.sort_1_insideSecondLoop_display &&
                  [
                    ...Array(
                      this.state.sort_1_insideSecondLoop_numArrows
                    ).keys()
                  ].map(index => (
                    <>
                      <line
                        key={Math.random()}
                        x1={
                          197 +
                          this.state.sort_index *
                            (451 / (this.state.sort_numElements + 1)) -
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y1="180"
                        x2={
                          197 +
                          this.state.sort_index *
                            (451 / (this.state.sort_numElements + 1)) -
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y2="215"
                        stroke="plum"
                      ></line>
                      <line
                        key={Math.random()}
                        x1={
                          197 +
                          this.state.sort_index *
                            (451 / (this.state.sort_numElements + 1)) -
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y1="180"
                        x2={
                          202 +
                          this.state.sort_index *
                            (451 / (this.state.sort_numElements + 1)) -
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y2="185"
                        stroke="plum"
                      ></line>
                      <line
                        key={Math.random()}
                        x1={
                          197 +
                          this.state.sort_index *
                            (451 / (this.state.sort_numElements + 1)) -
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y1="180"
                        x2={
                          192 +
                          this.state.sort_index *
                            (451 / (this.state.sort_numElements + 1)) -
                          index * (451 / (this.state.sort_numElements + 1))
                        }
                        y2="185"
                        stroke="plum"
                      ></line>
                    </>
                  ))}
                {this.state.sort_initValues && !this.state.sort_finished && (
                  <>
                    {/* blue index arrow */}
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_increment_display
                          ? css(this.animations.incrementIndex)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_index + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="30"
                      x2={
                        197 +
                        (this.state.sort_index + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="65"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="1.0"
                    ></line>
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_increment_display
                          ? css(this.animations.incrementIndex)
                          : undefined
                      }
                      x1={
                        192 +
                        (this.state.sort_index + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="60"
                      x2={
                        197 +
                        (this.state.sort_index + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="65"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="1.0"
                    ></line>
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_increment_display
                          ? css(this.animations.incrementIndex)
                          : undefined
                      }
                      x1={
                        202 +
                        (this.state.sort_index + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="60"
                      x2={
                        197 +
                        (this.state.sort_index + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="65"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="1.0"
                    ></line>
                    <text
                      className={
                        this.state.sort_1_increment_display
                          ? css(this.animations.incrementIndex)
                          : undefined
                      }
                      x={
                        197 +
                        451 / (this.state.sort_numElements + 1) +
                        this.state.sort_index *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y="15"
                      fontSize="12"
                      dominantBaseline="hanging"
                      textAnchor="middle"
                      fill="black"
                    >
                      index
                    </text>
                    {/* mediumvioletred j arrow */}
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="180"
                      x2={
                        197 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="215"
                      stroke="mediumvioletred"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="180"
                      x2={
                        202 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="185"
                      stroke="mediumvioletred"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="180"
                      x2={
                        192 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="185"
                      stroke="mediumvioletred"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <text
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x={
                        197 +
                        (this.state.sort_j + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y="230"
                      fontSize="12"
                      dominantBaseline="baseline"
                      textAnchor="middle"
                      fill="black"
                    >
                      prevIndex
                    </text>
                    {/* orange i arrow */}
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="180"
                      x2={
                        197 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="230"
                      stroke="orange"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="180"
                      x2={
                        202 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="185"
                      stroke="orange"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <line
                      key={Math.random()}
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x1={
                        197 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y1="180"
                      x2={
                        192 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y2="185"
                      stroke="orange"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></line>
                    <text
                      className={
                        this.state.sort_1_2_decrement_display
                          ? css(this.animations.decrementIndices)
                          : undefined
                      }
                      x={
                        197 +
                        (this.state.sort_i + 1) *
                          (451 / (this.state.sort_numElements + 1))
                      }
                      y="245"
                      fontSize="12"
                      dominantBaseline="baseline"
                      textAnchor="middle"
                      fill="black"
                    >
                      curIndex
                    </text>
                  </>
                )}
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
                  fill="mediumvioletred"
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
                  stroke="orange"
                  fill="orange"
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
                          : this.state.compaorangeBeforeSwap && index === 9
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
              <button
                onClick={() => {
                  if (this.state.sort_solving) {
                    clearInterval(timer);
                    this.setState({ sort_solving: false });
                  } else {
                    if (this.state.sort_finished) {
                      this.setState({ sort_solving: false });
                    } else {
                      this.step();
                      this.setState({ sort_solving: true });
                      // Set the timeout
                      var timer = setInterval(() => {
                        console.log("timer firing");
                        if (
                          this.state.sort_solving &&
                          !this.state.sort_finished
                        ) {
                          this.step();
                        } else {
                          clearInterval(timer);
                        }
                      }, 510);
                    }
                  }
                }}
              >
                {this.state.sort_solving ? "Pause" : "Solve"}
              </button>
              <button
                style={{ float: "right" }}
                onClick={() => this.resetSortRandom()}
              >
                Reset (Random)
              </button>
              <button
                style={{ float: "right" }}
                onClick={() => this.resetSortBest()}
              >
                Reset (Best Case)
              </button>
              <button
                style={{ float: "right" }}
                onClick={() => this.resetSortWorst()}
              >
                Reset (Worst Case)
              </button>
              <button
                onClick={() =>
                  console.log("numElements = " + this.state.sort_numElements)
                }
              >
                numElems
              </button>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}
