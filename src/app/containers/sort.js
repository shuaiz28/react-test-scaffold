import React from 'react';

import '../app.css';

const mockData = ['banana', '1', 'apple', '#1', 'apple1', '2banana'];

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedArray: mockData.join(', '),
    };
  }

  handleSort = () => this.setState({
    sortedArray: [...mockData].sort().join(', ')
  });

  handleReset = () => this.setState({
    sortedArray: mockData.join(', '),
  });

  render() {
    return (
      <div data-testid="app" className="container">
        <div className="buttonContainer">
          <button onClick={this.handleSort}>排序</button>
          <button onClick={this.handleReset}>重置</button>
        </div>
        <div className="sortedList">{this.state.sortedArray}</div>
      </div>
    );
  }
}

export default Sort;
