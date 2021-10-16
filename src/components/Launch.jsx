import React, { Component } from 'react';

class Launch extends Component {

  render() {

    let launch = this.props.launch;

    return (
      <li>
        <h2> { launch.mission_name } </h2>
        <div> Flight Number: { launch.flight_number } </div>
        <div> Rocket ID: { launch.rocket.rocket_id } </div>
        <div> Cost per Launch: { launch.cost } </div>
        <div> Description: { launch.details } </div>
      </li>
    );
  }
}

export default Launch;
