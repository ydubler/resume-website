import React from "react";

export default class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
    };
  }

  componentDidMount() {
    this.setState({ location: this.props.location });
  }

  render() {
    return (
      <>
        <br />
        <div style={{ textAlign: "center" }}>
          Select an Article: <br />
          <br />
          <div
            style={{
              display: "inline-block",
              width: "500px",
              textAlign: "left",
            }}
          >
            <u>Article Name</u>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
            }}
          >
            <u>Published</u>
          </div>
          <br />
          <br />
          {/*Insertion Sort*/}
          <div
            style={{
              display: "inline-block",
              width: "500px",
              textAlign: "left",
              backgroundColor: "Aquamarine",
              // border: "solid",
              // borderColor: "MediumSpringGreen"
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "auto",
                color: "purple",
                cursor: "pointer",
              }}
              onClick={() => {
                this.props.history.push("/articles/insertion-sort");
              }}
            >
              Insertion Sort
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
              backgroundColor: "Aquamarine",
              // border: "solid",
              // borderColor: "MediumSpringGreen"
            }}
          >
            1/7/2020
          </div>
          <br />
          <br />
        </div>
      </>
    );
  }
}
