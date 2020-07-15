import React from "react";

export default class Skills extends React.Component {
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
            <b>Programming Languages</b>
            <br />
            &nbsp;&nbsp;C
            <br />
            &nbsp;&nbsp;C++
            <br />
            &nbsp;&nbsp;C#
            <br />
            &nbsp;&nbsp;Objective-C
            <br />
            &nbsp;&nbsp;Python
            <br />
            &nbsp;&nbsp;JavaScript
            <br />
            &nbsp;&nbsp;Java
            <br />
            &nbsp;&nbsp;PyTorch (Machine Learning)
            <br />
            <br />
            <b>Parallel Computing</b>
            <br />
            &nbsp;&nbsp;Multi-Core parallelization using OpenMP
            <br />
            &nbsp;&nbsp;GPU parallelization using CUDA
            <br />
            &nbsp;&nbsp;SSE/AVX register parallelization
            <br />
            &nbsp;&nbsp;Network parallelization using MPI
            <br />
            <br />
            <b>Machine Learning</b>
            <br />
            &nbsp;&nbsp;Baye's Law
            <br />
            &nbsp;&nbsp;Linear Regression
            <br />
            &nbsp;&nbsp;Polynomial Regression
            <br />
            &nbsp;&nbsp;Back Propagation
            <br />
            &nbsp;&nbsp;Neural Networks
            <br />
            &nbsp;&nbsp;Convolutional Neural Networks
            <br />
            &nbsp;&nbsp;Recurrent Neural Networks
            <br />
            <br />
            <b>Web Stack</b>
            <br />
            &nbsp;&nbsp;Node
            <br />
            &nbsp;&nbsp;React
            <br />
            &nbsp;&nbsp;Express
            <br />
            &nbsp;&nbsp;PostgreSQL
            <br />
            &nbsp;&nbsp;Heroku
            <br />
            &nbsp;&nbsp;JavaScript
            <br />
            &nbsp;&nbsp;SVG Animations
            <br />
            <br />
            <b>Web Security</b>
            <br />
            &nbsp;&nbsp;HTTPS/RSA
            <br />
            &nbsp;&nbsp;Password Hashing for Authentication/Authorization
            <br />
            &nbsp;&nbsp;Cross Site Injection
            <br />
            <br />
            <b>3d Modeling (Blender)</b>
            <br />
            &nbsp;&nbsp;Modeling
            <br />
            &nbsp;&nbsp;Texturing
            <br />
            &nbsp;&nbsp;Rigging/Animating
          </div>
        </div>
      </>
    );
  }
}
