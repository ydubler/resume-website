import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  componentDidMount() {
    this.setState({
      location: this.props.location,
      windowInnerWidth: window.innerWidth
    });

    window.addEventListener("resize", () => {
      console.log("resize");
      this.setState({ windowInnerWidth: window.innerWidth });
    });
  }

  render() {
    return (
      <>
        {this.state.windowInnerWidth >= 0 ? (
          <>
            <hr style={{ margin: 0 }} />
            <div
              style={{
                width: "100%",
                height: "15px",
                backgroundColor: "lightgray"
              }}
            ></div>
            <div style={{ textAlign: "center", backgroundColor: "lightgray" }}>
              <a
                style={{
                  color: this.state.mouseEnterBio
                    ? "black"
                    : this.state.location.pathname === "/"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/"
                onMouseEnter={() => {
                  this.setState({ mouseEnterBio: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterBio: false });
                }}
              >
                Bio
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{
                  color: this.state.mouseEnterExperience
                    ? "black"
                    : this.state.location.pathname === "/experience"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/experience"
                onMouseEnter={() => {
                  this.setState({ mouseEnterExperience: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterExperience: false });
                }}
              >
                Experience
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{
                  color: this.state.mouseEnterSkills
                    ? "black"
                    : this.state.location.pathname === "/skills"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/skills"
                onMouseEnter={() => {
                  this.setState({ mouseEnterSkills: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterSkills: false });
                }}
              >
                Skills
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{
                  color: this.state.mouseEnterEducation
                    ? "black"
                    : this.state.location.pathname === "/education"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/education"
                onMouseEnter={() => {
                  this.setState({ mouseEnterEducation: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterEducation: false });
                }}
              >
                Education
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <div style={{ display: "inline-block", color: "dimgray" }}>
                Resume
              </div>
              &nbsp;
              <a
                style={{
                  color: this.state.mouseEnterDownloadResume
                    ? "black"
                    : this.state.location.pathname === "/resume"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/resume"
                type="post"
                onMouseEnter={() => {
                  this.setState({ mouseEnterDownloadResume: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterDownloadResume: false });
                }}
              >
                <u>.pdf</u>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{
                  color: this.state.mouseEnterArticles
                    ? "black"
                    : this.state.location.pathname === "/articles"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/articles"
                onMouseEnter={() => {
                  this.setState({ mouseEnterArticles: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterArticles: false });
                }}
              >
                Articles
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{
                  color: this.state.mouseEnter3dModels
                    ? "black"
                    : this.state.location.pathname === "/3d-models"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/3d-models"
                onMouseEnter={() => {
                  this.setState({ mouseEnter3dModels: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnter3dModels: false });
                }}
              >
                3d Models
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{
                  color: this.state.mouseEnterContact
                    ? "black"
                    : this.state.location.pathname === "/contact"
                    ? "black"
                    : "dimgray",
                  textDecorationLine: "none"
                }}
                href="/contact"
                onMouseEnter={() => {
                  this.setState({ mouseEnterContact: true });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseEnterContact: false });
                }}
              >
                Contact
              </a>
            </div>
            <div
              style={{
                width: "100%",
                height: "15px",
                backgroundColor: "lightgray"
              }}
            ></div>
            <hr style={{ margin: 0 }} />
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}
