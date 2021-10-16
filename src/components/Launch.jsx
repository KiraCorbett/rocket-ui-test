import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class Launch extends Component {
  constructor(props) {
    super(); 
    this.state = { showDetails: false };
  }

  showDetails = (bool) => {
    this.setState({
      showDetails: !bool
    });
  }

  render() {

    let launch = this.props.launch;
    const showDetails = this.state.showDetails;

    return (
      <li>
        <button onClick={this.showDetails.bind(null, showDetails)}><h2> { launch.mission_name } </h2></button>
        
        { this.state.showDetails && (
          <ul>
            <div>Rocket ID: { launch.rocket.rocket_id } </div>
            <div>Cost: { launch.cost } </div>
            <div>Details: { launch.details } </div>
          </ul>
        ) }
      </li>
    );
  }
}

export default Launch;
