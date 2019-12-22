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
          Select an Article: <br />
          <br />
          <a href="/articles/insertion-sort">Insertion Sort</a>
          <br />
          <br />
          <a href="/articles/insertion-sort">?</a>
        </div>
      </>
    );
  }
}
