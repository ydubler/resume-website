import React from "react";
import { StyleSheet, css } from "aphrodite";

export default class SVGFirstLastName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playNameAnimation: false,

      firstNameBaseX: 0,
      firstNameBaseY: 150,
      firstNamePathLength: 1215,

      lastNameBaseX: 280,
      lastNameBaseY: 370,
      lastNamePathLength: 1987,

      bottomLineStartX: 0,

      windowInnerWidth: this.props.windowInnerWidth,

      firstNameIFill: "transparent" // this makes the dot over the i in Yuri transparent until needed
    };

    // Aphrodite Animation Stylesheet
    this.animations = StyleSheet.create({
      firstName_write: {
        animationName: {
          from: {
            strokeDashoffset: this.state.firstNamePathLength
          },
          to: {
            strokeDashoffset: 0
          }
        },
        animationDuration: "4s",
        animationIterationCount: "once",
        animationTimingFunction: "ease-in-ease-out",
        animationDirection: "forward"
      },
      firstName_dotI: {
        animationName: {
          from: {
            transform: "translate(0px, -200px)",
            r: "30"
          },
          to: {
            transform: "translate(0px, 0px)",
            r: "10"
          }
        },
        animationDuration: "1s",
        animationDelay: "3s",
        animationIterationCount: "once",
        animationTimingFunction: "ease-in-ease-out"
      },
      lastName_write: {
        animationName: {
          from: {
            strokeDashoffset: this.state.lastNamePathLength
          },
          to: {
            strokeDashoffset: 0
          }
        },
        animationDuration: "4s",
        animationIterationCount: "once",
        animationTimingFunction: "ease-in-ease-out",
        animationDirection: "forward"
      },
      bottomLine_write: {
        animationName: {
          from: {
            strokeDashoffset: 715
          },
          to: {
            strokeDashoffset: 0
          }
        },
        animationDuration: "4s",
        animationIterationCount: "once",
        animationTimingFunction: "ease-in-ease-out",
        animationDirection: "forward"
      }
    });
  }

  componentDidMount() {
    // Set the inverval
    // setInterval(
    //   () =>
    //     this.setState(prevState => {
    //       return { firstNameBaseX: prevState.firstNameBaseX + 1 };
    //     }),
    //   100
    // );

    console.log(this.firstNamePath.getTotalLength());
    console.log(this.lastNamePath.getTotalLength());
    console.log(this.bottomLinePath.getTotalLength());

    const windowInnerWidth = window.innerWidth;
    this.setState({
      firstNameBaseX: (windowInnerWidth - 715) / 2 - 100,
      lastNameBaseX: 280 + (windowInnerWidth - 715) / 2 - 100,
      firstNamePathLength: this.firstNamePath.getTotalLength(),
      lastNamePathLength: this.lastNamePath.getTotalLength(),
      windowInnerWidth: windowInnerWidth
    });

    window.addEventListener("resize", () => {
      const windowInnerWidth = window.innerWidth;
      console.log(windowInnerWidth);
      console.log(this.firstNamePath.getTotalLength());
      console.log(this.lastNamePath.getTotalLength());
      this.setState({
        firstNameBaseX: (windowInnerWidth - 715) / 2 - 100,
        lastNameBaseX: 280 + (windowInnerWidth - 715) / 2 - 100,
        firstNamePathLength: this.firstNamePath.getTotalLength(),
        lastNamePathLength: this.lastNamePath.getTotalLength(),
        windowInnerWidth: windowInnerWidth
      });
    });

    // Set the timeout
    setTimeout(() => this.setState({ playNameAnimation: true }), 500);

    // Set the timeout
    setTimeout(() => this.setState({ firstNameIFill: "aquamarine" }), 3000);
  }

  render() {
    return (
      <>
        <svg width="100%" height="600px">
          {/* <line
            x1="0"
            y1="50"
            x2="100%"
            y2="50"
            stroke="aquamarine"
            strokeWidth="20px"
          ></line> */}
          <path
            ref={ref => (this.firstNamePath = ref)}
            id="firstName"
            className={
              this.state.playNameAnimation
                ? css(this.animations.firstName_write)
                : undefined
            }
            strokeDashoffset="0"
            strokeDasharray={this.state.firstNamePathLength}
            fill="transparent"
            stroke={this.state.playNameAnimation ? "aquamarine" : "transparent"}
            strokeLinecap="round"
            strokeWidth="20px"
            strokeLinejoin="round"
            d={`M ${this.state.firstNameBaseX + 130} ${this.state
              .firstNameBaseY - 30} v -60 v 60 C ${this.state.firstNameBaseX +
              130} ${this.state.firstNameBaseY - 30}, ${this.state
              .firstNameBaseX + 130} ${this.state.firstNameBaseY}, ${this.state
              .firstNameBaseX + 160} ${this.state.firstNameBaseY} h 20 C ${this
              .state.firstNameBaseX + 180} ${this.state.firstNameBaseY},  ${this
              .state.firstNameBaseX + 210} ${this.state.firstNameBaseY}, ${this
              .state.firstNameBaseX + 210} ${this.state.firstNameBaseY -
              30} v -60 L ${this.state.firstNameBaseX + 210}  ${this.state
              .firstNameBaseY + 90} C ${this.state.firstNameBaseX + 210} ${this
              .state.firstNameBaseY + 90}, ${this.state.firstNameBaseX +
              210}  ${this.state.firstNameBaseY + 120}, ${this.state
              .firstNameBaseX + 180} ${this.state.firstNameBaseY + 120} C ${this
              .state.firstNameBaseX + 180} ${this.state.firstNameBaseY +
              120},${this.state.firstNameBaseX + 150} ${this.state
              .firstNameBaseY + 120},${this.state.firstNameBaseX + 150} ${this
              .state.firstNameBaseY + 90} C ${this.state.firstNameBaseX +
              150} ${this.state.firstNameBaseY + 50},${this.state
              .firstNameBaseX + 260} ${this.state.firstNameBaseY + 40} , ${this
              .state.firstNameBaseX + 260} ${this.state.firstNameBaseY} L ${this
              .state.firstNameBaseX + 260} ${this.state.firstNameBaseY -
              50} L ${this.state.firstNameBaseX + 260} ${this.state
              .firstNameBaseY - 20} C ${this.state.firstNameBaseX + 260} ${this
              .state.firstNameBaseY - 20}, ${this.state.firstNameBaseX + 260} ${
              this.state.firstNameBaseY
            } ,${this.state.firstNameBaseX + 280} ${
              this.state.firstNameBaseY
            } C ${this.state.firstNameBaseX + 280} ${
              this.state.firstNameBaseY
            }, ${this.state.firstNameBaseX + 300} ${
              this.state.firstNameBaseY
            },${this.state.firstNameBaseX + 300} ${this.state.firstNameBaseY -
              20} L ${this.state.firstNameBaseX + 300} ${this.state
              .firstNameBaseY - 50} L ${this.state.firstNameBaseX + 300} ${this
              .state.firstNameBaseY - 20} C ${this.state.firstNameBaseX +
              300} ${this.state.firstNameBaseY - 20},${this.state
              .firstNameBaseX + 300} ${this.state.firstNameBaseY},${this.state
              .firstNameBaseX + 320} ${this.state.firstNameBaseY} C ${this.state
              .firstNameBaseX + 320} ${this.state.firstNameBaseY},${this.state
              .firstNameBaseX + 340} ${this.state.firstNameBaseY}, ${this.state
              .firstNameBaseX + 340} ${this.state.firstNameBaseY - 20} L ${this
              .state.firstNameBaseX + 340} ${this.state.firstNameBaseY -
              40} C ${this.state.firstNameBaseX + 340} ${this.state
              .firstNameBaseY - 40}, ${this.state.firstNameBaseX + 340} ${this
              .state.firstNameBaseY - 60}, ${this.state.firstNameBaseX +
              360} ${this.state.firstNameBaseY - 60} C ${this.state
              .firstNameBaseX + 360} ${this.state.firstNameBaseY - 60}, ${this
              .state.firstNameBaseX + 380} ${this.state.firstNameBaseY -
              60} , ${this.state.firstNameBaseX + 380} ${this.state
              .firstNameBaseY - 40} C ${this.state.firstNameBaseX + 380} ${this
              .state.firstNameBaseY - 40} , ${this.state.firstNameBaseX +
              380} ${this.state.firstNameBaseY - 20} , ${this.state
              .firstNameBaseX + 360} ${this.state.firstNameBaseY - 20} C ${this
              .state.firstNameBaseX + 360} ${this.state.firstNameBaseY -
              20}, ${this.state.firstNameBaseX + 360} ${
              this.state.firstNameBaseY
            } , ${this.state.firstNameBaseX + 380} ${
              this.state.firstNameBaseY
            } h 20 C ${this.state.firstNameBaseX + 400} ${
              this.state.firstNameBaseY
            }, ${this.state.firstNameBaseX + 420} ${
              this.state.firstNameBaseY
            } ,${this.state.firstNameBaseX + 420} ${this.state.firstNameBaseY -
              20} v -30`}
          ></path>
          <circle
            className={css(this.animations.firstName_dotI)}
            cx={this.state.firstNameBaseX + 420}
            cy={this.state.firstNameBaseY + -80}
            r="10px"
            fill={this.state.firstNameIFill}
          ></circle>
          <path
            ref={ref => (this.bottomLinePath = ref)}
            className={css(this.animations.bottomLine_write)}
            transform="scale(0.9,1.0)"
            strokeDashoffset="0"
            strokeDasharray="715"
            fill="transparent"
            stroke="deepskyblue"
            strokeLinecap="round"
            strokeWidth="20px"
            strokeLinejoin="round"
            d={`M ${this.state.firstNameBaseX + 150} ${this.state
              .lastNameBaseY *
              0.85 +
              10} h 715`}
          ></path>
          <path
            ref={ref => (this.lastNamePath = ref)}
            id="lastName"
            className={
              this.state.playNameAnimation
                ? css(this.animations.lastName_write)
                : undefined
            }
            transform="scale(0.85,0.85)"
            strokeDashoffset="0"
            strokeDasharray={this.state.lastNamePathLength}
            fill="transparent"
            stroke={this.state.playNameAnimation ? "aqua" : "transparent"}
            strokeLinecap="round"
            strokeWidth="20px"
            strokeLinejoin="round"
            d={`M ${this.state.lastNameBaseX} ${
              this.state.lastNameBaseY
            } v -140 C ${this.state.lastNameBaseX} ${this.state.lastNameBaseY -
              140},${this.state.lastNameBaseX + 80} ${this.state.lastNameBaseY -
              140},${this.state.lastNameBaseX + 80} ${this.state.lastNameBaseY -
              70} C ${this.state.lastNameBaseX + 80} ${this.state
              .lastNameBaseY - 70}, ${this.state.lastNameBaseX + 80} ${
              this.state.lastNameBaseY
            } , ${this.state.lastNameBaseX} ${
              this.state.lastNameBaseY
            } h 100 C  ${this.state.lastNameBaseX + 100} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 130} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 130} ${this.state.lastNameBaseY -
              30} v -30 v 30 C ${this.state.lastNameBaseX + 130} ${this.state
              .lastNameBaseY - 30}, ${this.state.lastNameBaseX + 130} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 160} ${
              this.state.lastNameBaseY
            } C  ${this.state.lastNameBaseX + 160} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 190} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 190} ${this.state.lastNameBaseY -
              30} v -30 v 30 C ${this.state.lastNameBaseX + 190} ${this.state
              .lastNameBaseY - 30},${this.state.lastNameBaseX + 190} ${
              this.state.lastNameBaseY
            } , ${this.state.lastNameBaseX + 220} ${
              this.state.lastNameBaseY
            } C ${this.state.lastNameBaseX + 220} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 250} ${
              this.state.lastNameBaseY
            } , ${this.state.lastNameBaseX + 250} ${this.state.lastNameBaseY -
              30} v -70 v 70 C ${this.state.lastNameBaseX + 250} ${this.state
              .lastNameBaseY - 30}, ${this.state.lastNameBaseX + 250} ${this
              .state.lastNameBaseY - 60},${this.state.lastNameBaseX +
              280} ${this.state.lastNameBaseY - 60} C ${this.state
              .lastNameBaseX + 280} ${this.state.lastNameBaseY - 60},${this
              .state.lastNameBaseX + 310} ${this.state.lastNameBaseY -
              60}, ${this.state.lastNameBaseX + 310} ${this.state
              .lastNameBaseY - 30} C ${this.state.lastNameBaseX + 310} ${this
              .state.lastNameBaseY - 30}, ${this.state.lastNameBaseX + 310} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 280} ${
              this.state.lastNameBaseY
            }  h 40 C ${this.state.lastNameBaseX + 320} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 360} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 360} ${this.state.lastNameBaseY -
              40} v -60 v 70 C ${this.state.lastNameBaseX + 360} ${this.state
              .lastNameBaseY - 40},${this.state.lastNameBaseX + 360} ${
              this.state.lastNameBaseY
            } , ${this.state.lastNameBaseX + 400} ${
              this.state.lastNameBaseY
            } C ${this.state.lastNameBaseX + 400} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 430} ${
              this.state.lastNameBaseY
            }, ${this.state.lastNameBaseX + 430} ${this.state.lastNameBaseY -
              30} C ${this.state.lastNameBaseX + 430} ${this.state
              .lastNameBaseY - 30} , ${this.state.lastNameBaseX + 430} ${this
              .state.lastNameBaseY - 60}, ${this.state.lastNameBaseX +
              460} ${this.state.lastNameBaseY - 60} C ${this.state
              .lastNameBaseX + 460} ${this.state.lastNameBaseY - 60}, ${this
              .state.lastNameBaseX + 490} ${this.state.lastNameBaseY -
              60}, ${this.state.lastNameBaseX + 490} ${this.state
              .lastNameBaseY - 30} h -60 C ${this.state.lastNameBaseX +
              430} ${this.state.lastNameBaseY - 30}, ${this.state
              .lastNameBaseX + 430} ${this.state.lastNameBaseY}, ${this.state
              .lastNameBaseX + 460} ${this.state.lastNameBaseY} h 60 C ${this
              .state.lastNameBaseX + 520} ${this.state.lastNameBaseY}, ${this
              .state.lastNameBaseX + 550} ${this.state.lastNameBaseY},${this
              .state.lastNameBaseX + 550} ${this.state.lastNameBaseY -
              30}  v -30 C ${this.state.lastNameBaseX + 550} ${this.state
              .lastNameBaseY - 60}, ${this.state.lastNameBaseX + 550} ${this
              .state.lastNameBaseY - 90}, ${this.state.lastNameBaseX +
              580} ${this.state.lastNameBaseY - 90} C ${this.state
              .lastNameBaseX + 580} ${this.state.lastNameBaseY - 90}, ${this
              .state.lastNameBaseX + 610} ${this.state.lastNameBaseY -
              90}, ${this.state.lastNameBaseX + 610} ${this.state
              .lastNameBaseY - 60} C ${this.state.lastNameBaseX + 610} ${this
              .state.lastNameBaseY - 60},  ${this.state.lastNameBaseX +
              610} ${this.state.lastNameBaseY - 30},${this.state.lastNameBaseX +
              580} ${this.state.lastNameBaseY - 30} C ${this.state
              .lastNameBaseX + 580} ${this.state.lastNameBaseY - 30}, ${this
              .state.lastNameBaseX + 580} ${this.state.lastNameBaseY} , ${this
              .state.lastNameBaseX + 610} ${this.state.lastNameBaseY}`}
          ></path>
        </svg>
      </>
    );
  }
}
