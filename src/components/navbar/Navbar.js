import React from "react";
import { StyleSheet, css } from "aphrodite";

// Detect the device being used
import { isBrowser, isMobile } from "react-device-detect";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowInnerWidth: 20,
      location: "",
      buffer: 20,
      urls: [
        "",
        "education",
        "skills",
        "portfolio",
        "articles",
        "3dmodels",
        "contact",
        "resume"
      ],
      buttons: [
        "Bio",
        "Education",
        "Skills",
        "Portfolio",
        "Articles",
        "3DModels",
        "Contact",
        "Resume"
      ],
      widthBio: 0,
      widthEducation: 0,
      widthSkills: 0,
      widthPortfolio: 0,
      widthResume: 0,
      widthArticles: 0,
      width3DModels: 0,
      widthContact: 0,
      insideBio: false,
      insideEducation: false,
      insideSkills: false,
      insidePortfolio: false,
      insideResume: false,
      insideArticles: false,
      inside3DModels: false,
      insideContact: false
    };

    this.animations = StyleSheet.create({});

    this.getButtonStartX = this.getButtonStartX.bind(this);
    this.createJigglyAnimations = this.createJigglyAnimations.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      console.log("resize");
      this.setState({ windowInnerWidth: window.innerWidth });
    });

    // Get the widths of the buttons
    let widthBio = document.getElementById("width_bio").clientWidth;
    let widthEducation = document.getElementById("width_education").clientWidth;
    let widthSkills = document.getElementById("width_skills").clientWidth;
    let widthPortfolio = document.getElementById("width_portfolio").clientWidth;
    let widthResume = document.getElementById("width_resume").clientWidth;
    let widthArticles = document.getElementById("width_articles").clientWidth;
    let width3DModels = document.getElementById("width_3dmodels").clientWidth;
    let widthContact = document.getElementById("width_contact").clientWidth;

    // Create the widths array to make the jiggly animations
    let widths = [
      widthBio,
      widthEducation,
      widthSkills,
      widthPortfolio,
      widthArticles,
      width3DModels,
      widthContact,
      widthResume
    ];

    // Create jiggly animations
    this.createJigglyAnimations(widths);

    // get the root path (so that articles/articleName highlights the Articles tab)
    let location = "/";
    for (let i = 1; i < this.props.location.pathname.length; i++) {
      let char = this.props.location.pathname.charAt(i);

      if (char === "/") break;

      location += this.props.location.pathname.charAt(i);
    }

    // Set the state
    this.setState({
      windowInnerWidth: window.innerWidth,
      location: this.props.location,
      pathname: location,
      windowInnerWidth: window.innerWidth,
      widthBio: widthBio,
      widthEducation: widthEducation,
      widthSkills: widthSkills,
      widthPortfolio: widthPortfolio,
      widthArticles: widthArticles,
      width3DModels: width3DModels,
      widthContact: widthContact,
      widthResume: widthResume
    });
  }

  // Get the button start X position
  getButtonStartX(buttonNumber) {
    let x = 0;

    for (let i = 0; i < buttonNumber; i++) {
      x += this.state["width" + this.state.buttons[i]] + 2 * this.state.buffer;
    }

    return x;
  }

  // Animations used in the Navbar
  createJigglyAnimations(widthsIn) {
    let animations = {};

    for (let i = 0; i < this.state.buttons.length; i++) {
      let startX = 0;
      for (let j = 0; j < i; j++) {
        startX += widthsIn[j] + 2 * this.state.buffer;
      }

      animations["jiggly_" + i] = {
        transformOrigin: `${startX +
          (2 * this.state.buffer + widthsIn[i]) / 2}px 20px`,
        animationName: {
          ["0%"]: {
            transform: "rotate(0deg) scale(1.0)"
          },
          ["25%"]: {
            transform: "rotate(1deg) scale(1.3)"
          },
          ["50%"]: {
            transform: "rotate(0deg) scale(1.0)"
          },
          ["75%"]: {
            transform: "rotate(-1deg) scale(1.3)"
          },
          ["100%"]: {
            transform: "rotate(0deg) scale(1.0)"
          }
        },
        animationDuration: "1s",
        animationDelay: "0s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      };
    }

    animations["downloadArrow"] = {
      animationName: {
        ["0%"]: {
          transform: "translate(0px, 0px)"
        },
        ["50%"]: {
          transform: "translate(0px, 5px)"
        },
        ["100%"]: {
          transform: "translate(0px, 0px)"
        }
      },
      animationDuration: "1s",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear"
    };

    this.animations = StyleSheet.create(animations);
  }

  render() {
    return (
      <>
        {/* DESKTOP BROWSERS */}
        {isBrowser && (
          <>
            {this.state.buttons.map((value, index) => (
              <div
                key={Math.random()}
                id={"width_" + value.toLowerCase()}
                style={{
                  position: "absolute",
                  visibility: "hidden",
                  height: "auto",
                  width: "auto",
                  whiteSpace: "nowrap",
                  fontFamily: "Arial",
                  fontWeight: "regular",
                  fontSize: "14"
                }}
              >
                {value}
              </div>
            ))}

            <div style={{ textAlign: "center" }}>
              <svg
                width={this.getButtonStartX(this.state.buttons.length) - 20}
                height="45px"
              >
                {this.state.buttons.map((value, index) =>
                  value != "Resume" ? (
                    <g key={Math.random()}>
                      {/* <a href={"/" + this.state.urls[index]}> */}
                      <rect
                        x={this.getButtonStartX(index)}
                        y="-5"
                        width={
                          this.state["width" + this.state.buttons[index]] +
                          2 * this.state.buffer
                        }
                        height={
                          this.state.pathname === "/" + this.state.urls[index]
                            ? "50"
                            : "45"
                        }
                        rx={
                          this.state.pathname === "/" + this.state.urls[index]
                            ? "5"
                            : "0"
                        }
                        fill={
                          this.state.pathname === "/" + this.state.urls[index]
                            ? "dodgerblue"
                            : this.state["inside" + value]
                            ? "dodgerblue"
                            : "deepskyblue"
                        }
                        onMouseEnter={() =>
                          this.setState({ ["inside" + value]: true })
                        }
                        onMouseLeave={() =>
                          this.setState({ ["inside" + value]: false })
                        }
                        onClick={() => {
                          // console.log(this.props.history.location.pathname);
                          this.props.history.push("/" + this.state.urls[index]);
                          this.setState({
                            pathname: "/" + this.state.urls[index]
                          });
                          // this.props.location = "/" + this.state.urls[index];
                          // this.window.location = "/" + this.state.urls[index];
                        }}
                      ></rect>
                      {/* </a> */}
                      {this.state["inside" + value] &&
                      this.state.pathname != "/" + this.state.urls[index] ? (
                        <>
                          <line
                            x1={this.getButtonStartX(index) + 1}
                            y1="0"
                            x2={this.getButtonStartX(index) + 1}
                            y2="45"
                            stroke="white"
                            strokeWidth="2"
                            pointerEvents="none"
                          ></line>
                          <line
                            x1={this.getButtonStartX(index + 1) - 1}
                            y1="0"
                            x2={this.getButtonStartX(index + 1) - 1}
                            y2="45"
                            stroke="white"
                            strokeWidth="2"
                            pointerEvents="none"
                          ></line>
                        </>
                      ) : (
                        <></>
                      )}
                      <g
                        key={Math.random()}
                        className={
                          this.state["inside" + value]
                            ? css(this.animations["jiggly_" + index])
                            : undefined
                        }
                      >
                        <text
                          x={
                            this.getButtonStartX(index) +
                            (2 * this.state.buffer +
                              this.state["width" + this.state.buttons[index]]) /
                              2
                          }
                          y="20"
                          fontFamily="Arial"
                          fontSize="14"
                          fontWeight={
                            this.state.pathname === "/" + this.state.urls[index]
                              ? "bold"
                              : this.state["inside" + value]
                              ? "bold"
                              : "regular"
                          }
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          pointerEvents="none"
                          fill="white"
                        >
                          {value}
                        </text>
                      </g>
                    </g>
                  ) : (
                    <g key={Math.random()}>
                      <a
                        xlinkHref={"/" + this.state.urls[index]}
                        href={"/" + this.state.urls[index]}
                      >
                        <rect
                          x={this.getButtonStartX(index) + 3}
                          y="-10"
                          width={
                            this.state["width" + this.state.buttons[index]] +
                            2 * this.state.buffer -
                            6 -
                            20
                          }
                          height="50"
                          rx="10"
                          fill={
                            this.state["inside" + value]
                              ? "darkmagenta"
                              : "darkorchid"
                          }
                          onMouseEnter={() =>
                            this.setState({ ["inside" + value]: true })
                          }
                          onMouseLeave={() =>
                            this.setState({ ["inside" + value]: false })
                          }
                          onClick={() => {
                            // console.log(this.props.history.location.pathname);
                            // this.props.history.push("/" + this.state.urls[index]);
                            // this.setState({
                            //   pathname: "/" + this.state.urls[index]
                            // });
                            // this.props.location = "/" + this.state.urls[index];
                            // this.window.location = "/" + this.state.urls[index];
                            // this.downloadResume();
                          }}
                        ></rect>
                      </a>
                      ) : (<></>
                      )}
                      <g>
                        <text
                          x={
                            this.getButtonStartX(index) +
                            (2 * this.state.buffer +
                              this.state["width" + this.state.buttons[index]]) /
                              2 -
                            10
                          }
                          y="10"
                          fontFamily="Arial"
                          fontSize="14"
                          fontWeight={
                            this.state["inside" + value] ? "bold" : "regular"
                          }
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          pointerEvents="none"
                          fill="white"
                        >
                          {value}
                        </text>
                      </g>
                      <path
                        key={Math.random()}
                        className={
                          this.state["inside" + value]
                            ? css(this.animations.downloadArrow)
                            : undefined
                        }
                        stroke="black"
                        strokeWidth="0"
                        fill="white"
                        d={`M${this.getButtonStartX(index) +
                          this.state.widthResume / 2 +
                          this.state.buffer -
                          16} 17 h 12 v 8 h 6 L ${this.getButtonStartX(index) +
                          this.state.widthResume / 2 +
                          this.state.buffer -
                          10} 32 L ${this.getButtonStartX(index) +
                          this.state.widthResume / 2 +
                          this.state.buffer -
                          22} 25 h 6`}
                        pointerEvents="none"
                      ></path>
                      <line
                        x1={this.getButtonStartX(index) + 20}
                        y1="38"
                        x2={this.getButtonStartX(index + 1) - 40}
                        y2="38"
                        stroke="white"
                        strokeWidth="2"
                        pointerEvents="none"
                      ></line>
                    </g>
                  )
                )}
              </svg>
            </div>
          </>
        )}
        {/* MOBILE BROWSERS */}
        {isMobile && (
          <>
            {this.state.buttons.map((value, index) => (
              <div
                key={Math.random()}
                id={"width_" + value.toLowerCase()}
                style={{
                  position: "absolute",
                  visibility: "hidden",
                  height: "auto",
                  width: "auto",
                  whiteSpace: "nowrap",
                  fontFamily: "Arial",
                  fontWeight: "regular",
                  fontSize: "14"
                }}
              >
                {value}
              </div>
            ))}
            <div style={{ display: "inline" }}>
              <svg
                width="100%"
                height={40 * this.state.buttons.length + "px"}
                x="0"
                y="0"
              >
                {this.state.buttons.map((value, index) =>
                  value != "Resume" ? (
                    <g key={Math.random()}>
                      {/* <a href={"/" + this.state.urls[index]}> */}
                      <rect
                        x="10"
                        y={40 * index}
                        width={this.state.windowInnerWidth - 20}
                        height="40px"
                        rx="10"
                        fill={
                          this.state.pathname === "/" + this.state.urls[index]
                            ? "dodgerblue"
                            : "deepskyblue"
                        }
                        onClick={() => {
                          // console.log(this.props.history.location.pathname);
                          this.props.history.push("/" + this.state.urls[index]);
                          this.setState({
                            pathname: "/" + this.state.urls[index]
                          });
                          // this.props.location = "/" + this.state.urls[index];
                          // this.window.location = "/" + this.state.urls[index];
                        }}
                      ></rect>
                      <g>
                        <text
                          x="50%"
                          y={40 * index + 20}
                          fontFamily="Arial"
                          fontSize="20"
                          fontWeight={
                            this.state.pathname === "/" + this.state.urls[index]
                              ? "bold"
                              : "regular"
                          }
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          pointerEvents="none"
                          fill="white"
                        >
                          {value}
                        </text>
                      </g>
                      <line
                        x1="0"
                        y1={40 * (index + 1)}
                        x2="100%"
                        y2={40 * (index + 1)}
                        stroke="white"
                        strokeWidth="3"
                      ></line>
                    </g>
                  ) : (
                    <g key={Math.random()}>
                      <a
                        xlinkHref={"/" + this.state.urls[index]}
                        href={"/" + this.state.urls[index]}
                      >
                        <rect
                          x="5%"
                          y={40 * index}
                          width="90%"
                          height="40"
                          rx="20"
                          fill="darkmagenta"
                          onMouseEnter={() =>
                            this.setState({ ["inside" + value]: true })
                          }
                          onMouseLeave={() =>
                            this.setState({ ["inside" + value]: false })
                          }
                          onClick={() => {
                            // console.log(this.props.history.location.pathname);
                            // this.props.history.push("/" + this.state.urls[index]);
                            // this.setState({
                            //   pathname: "/" + this.state.urls[index]
                            // });
                            // this.props.location = "/" + this.state.urls[index];
                            // this.window.location = "/" + this.state.urls[index];
                            // this.downloadResume();
                          }}
                        ></rect>
                      </a>
                      ) : (<></>
                      )}
                      <g>
                        <text
                          x="50%"
                          y={40 * index + 20}
                          fontFamily="Arial"
                          fontSize="20"
                          fontWeight="bold"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          pointerEvents="none"
                          fill="white"
                        >
                          Download {value} (PDF)
                        </text>
                      </g>
                    </g>
                  )
                )}
              </svg>
            </div>
          </>
        )}
        <br />
      </>
    );
  }
}
