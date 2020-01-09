import React from "react";

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
        "resume",
        "articles",
        "3dmodels",
        "contact"
      ],
      buttons: [
        "Bio",
        "Education",
        "Skills",
        "Resume",
        "Articles",
        "3DModels",
        "Contact"
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

    this.getButtonStartX = this.getButtonStartX.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      console.log("resize");
      this.setState({ windowInnerWidth: window.innerWidth });
    });

    this.setState({
      location: this.props.location,
      windowInnerWidth: window.innerWidth,
      widthBio: document.getElementById("width_bio").clientWidth,
      widthEducation: document.getElementById("width_education").clientWidth,
      widthSkills: document.getElementById("width_skills").clientWidth,
      widthResume: document.getElementById("width_resume").clientWidth,
      widthArticles: document.getElementById("width_articles").clientWidth,
      width3DModels: document.getElementById("width_3dmodels").clientWidth,
      widthContact: document.getElementById("width_contact").clientWidth
    });
  }

  getButtonStartX(buttonNumber) {
    let x = 0;

    for (let i = 0; i < buttonNumber; i++) {
      x += this.state["width" + this.state.buttons[i]] + 2 * this.state.buffer;
    }

    return x;
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            {this.state.buttons.map((value, index) => (
              <g key={Math.random()}>
                <rect
                  x={this.getButtonStartX(index)}
                  y="0"
                  width={
                    this.state["width" + this.state.buttons[index]] +
                    2 * this.state.buffer
                  }
                  height={
                    this.state.location.pathname ===
                    "/" + this.state.urls[index]
                      ? "45"
                      : this.state["inside" + value]
                      ? "45"
                      : "40"
                  }
                  fill={
                    this.state.location.pathname ===
                    "/" + this.state.urls[index]
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
                ></rect>
                <line
                  x1={this.getButtonStartX(index)}
                  y1="0"
                  x2={this.getButtonStartX(index)}
                  y2="40"
                  stroke="lightblue"
                  pointerEvents="none"
                ></line>
                <text
                  x={this.getButtonStartX(index) + this.state.buffer}
                  y="20"
                  fontFamily="Arial"
                  fontWeight="bold"
                  fontSize="12"
                  alignmentBaseline="middle"
                  pointerEvents="none"
                  fill="white"
                >
                  {value}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </>
    );
  }
}
