import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  componentDidMount() {
    this.setState({ location: this.props.location });
  }

  render() {
    return (
      <>
        <hr style={{ margin: 10 }} />

        <div style={{ textAlign: "center" }}>
          <a
            style={{
              color: this.state.location.pathname === "/" ? "black" : "dimgray",
              textDecorationLine: "none"
            }}
            href="/"
          >
            Bio
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              color:
                this.state.location.pathname === "/experience"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/experience"
          >
            Experience
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              color:
                this.state.location.pathname === "/skills"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/skills"
          >
            Skills
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              color:
                this.state.location.pathname === "/education"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/education"
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
              color:
                this.state.location.pathname === "/resume"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/resume"
            type="post"
          >
            <u>.pdf</u>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              color:
                this.state.location.pathname === "/articles"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/articles"
          >
            Articles
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              color:
                this.state.location.pathname === "/3d-models"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/3d-models"
          >
            3d Models
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              color:
                this.state.location.pathname === "/contact"
                  ? "black"
                  : "dimgray",
              textDecorationLine: "none"
            }}
            href="/contact"
          >
            Contact
          </a>
        </div>
        <hr style={{ margin: 10 }} />
      </>
    );
  }
}
