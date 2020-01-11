import React from "react";
import { StyleSheet, css } from "aphrodite";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      buffer: 20,
      urls: [
        "",
        "education",
        "skills",
        "articles",
        "3dmodels",
        "contact",
        "resume"
      ],
      buttons: [
        "Bio",
        "Education",
        "Skills",
        "Articles",
        "3DModels",
        "Contact",
        "Resume"
      ],
      widthBio: 0,
      widthEducation: 0,
      widthSkills: 0,
      widthResume: 0,
      widthArticles: 0,
      width3DModels: 0,
      widthContact: 0,
      insideBio: false,
      insideEducation: false,
      insideSkills: false,
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

    let widthBio = document.getElementById("width_bio").clientWidth;
    let widthEducation = document.getElementById("width_education").clientWidth;
    let widthSkills = document.getElementById("width_skills").clientWidth;
    let widthResume = document.getElementById("width_resume").clientWidth;
    let widthArticles = document.getElementById("width_articles").clientWidth;
    let width3DModels = document.getElementById("width_3dmodels").clientWidth;
    let widthContact = document.getElementById("width_contact").clientWidth;

    let location = "/";
    for (let i = 1; i < this.props.location.pathname.length; i++) {
      let char = this.props.location.pathname.charAt(i);

      if (char === "/") break;

      location += this.props.location.pathname.charAt(i);
    }

    this.setState({
      location: this.props.location,
      pathname: location,
      windowInnerWidth: window.innerWidth,
      widthBio: widthBio,
      widthEducation: widthEducation,
      widthSkills: widthSkills,
      widthResume: widthResume,
      widthArticles: widthArticles,
      width3DModels: width3DModels,
      widthContact: widthContact
    });

    let widths = [
      widthBio,
      widthEducation,
      widthSkills,
      widthResume,
      widthArticles,
      width3DModels,
      widthContact
    ];

    this.createJigglyAnimations(widths);
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
            transform: "rotate(2deg) scale(1.05)"
          },
          ["50%"]: {
            transform: "rotate(0deg) scale(1.1)"
          },
          ["75%"]: {
            transform: "rotate(-2deg) scale(1.05)"
          },
          ["100%"]: {
            transform: "rotate(0deg) scale(1.0)"
          }
        },
        animationDuration: "2s",
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
        <div
          id="width_bio"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Bio
        </div>
        <div
          id="width_education"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Education
        </div>
        <div
          id="width_experience"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Experience
        </div>
        <div
          id="width_skills"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Skills
        </div>
        <div
          id="width_resume"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Resume
        </div>
        <div
          id="width_articles"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Articles
        </div>
        <div
          id="width_3dmodels"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          3D-Models
        </div>
        <div
          id="width_contact"
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            width: "auto",
            whiteSpace: "nowrap",
            fontFamily: "Arial",
            fontWeight: "regular",
            fontSize: "12"
          }}
        >
          Contact
        </div>
        <div style={{ textAlign: "center" }}>
          <svg
            width={this.getButtonStartX(this.state.buttons.length)}
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
                      this.setState({ pathname: "/" + this.state.urls[index] });
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
                      fontWeight={
                        this.state.pathname === "/" + this.state.urls[index]
                          ? "bold"
                          : this.state["inside" + value]
                          ? "bold"
                          : "regular"
                      }
                      fontSize="12"
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
                  <a href={"/" + this.state.urls[index]}>
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
                        this.props.history.push("/" + this.state.urls[index]);
                        this.setState({
                          pathname: "/" + this.state.urls[index]
                        });
                        // this.props.location = "/" + this.state.urls[index];
                        // this.window.location = "/" + this.state.urls[index];
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
                      fontWeight={
                        this.state["inside" + value] ? "bold" : "regular"
                      }
                      fontSize="12"
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
    );
  }
}
