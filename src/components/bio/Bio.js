import React from "react";

export default class Bio extends React.Component {
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
      <div
        style={{
          width: "500px",
          height: "500px"
        }}
      >
        HOME 𝖄𝖚𝖗𝖎 𝕯𝖚𝖇𝖑𝖊𝖗
      </div>
    );
  }
}
