import React, { Component } from 'react';

class Launch extends Component {
  container = React.createRef();
  state = {
    showDetails: false,
  };

  handleClick = () => {
    this.setState((state) => {
      return {
        showDetails: !state.showDetails,
      };
    });
  };

  handlePageClick = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        showDetails: false,
      });
    }
  };

  // React Ref tutorial source: https://codedaily.io/tutorials/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked
  componentDidMount() {
    document.addEventListener("mousedown", this.handlePageClick);
  } 

  // React Ref tutorial source: https://codedaily.io/tutorials/Create-a-Dropdown-in-React-that-Closes-When-the-Body-is-Clicked
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handlePageClick);
  }

  render() {
    let launch = this.props.launch;

    return (
      <ul>
        <div className="container" ref={this.container}>
          <button onClick={this.handleClick}><h2> { launch.mission_name } </h2></button>
          {this.state.showDetails && (
            <ul>
              <div>Rocket ID: { launch.rocket.rocket_id } </div>
              <div>Cost: { launch.cost } </div>
              <div>Details: { launch.details } </div>
            </ul>
          )}
        </div>
      </ul>
    );
  }
}

export default Launch;
