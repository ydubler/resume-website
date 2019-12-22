import React from "react";

export default class Contact extends React.Component {
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
          ydubler@gmail.com
          <br />
          <br />
          805-451-8565
        </div>
      </>
    );
  }
}
