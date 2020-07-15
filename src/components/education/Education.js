import React from "react";

export default class Education extends React.Component {
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
        <br />
        <div style={{ textAlign: "center" }}>
          <div
            style={{ display: "inline-block", textAlign: "left", width: "680" }}
          >
            <b>University of Montana</b>
            <br />
            Bachelors of Computer Science, Math Minor (Summer 2020)
            <br />
            <br />
            <b>Classes</b>
            <br />
            &nbsp;&nbsp;Data Structures
            <br />
            &nbsp;&nbsp;Algorithms
            <br />
            &nbsp;&nbsp;Parallel Computing
            <br />
            &nbsp;&nbsp;Machine Learning
            <br />
            &nbsp;&nbsp;Advanced Programming I (Capstone Project 1/2)
            <br />
            &nbsp;&nbsp;Advanced Programming II (Capstone Project 2/2)
            <br />
            &nbsp;&nbsp;C/C++
            <br />
            &nbsp;&nbsp;Java I
            <br />
            &nbsp;&nbsp;Java II
          </div>
        </div>
      </>
    );
  }
}
