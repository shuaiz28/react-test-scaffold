import React from 'react';

import '../app.css';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedArray: '',
      originalArray: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/sortedItems")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            originalArray: result,
            sortedArray: [...result].join(', '),
          });
        },
        (error) => {
          console.log(error);
        }
      )
  }

  handleSort = () => this.setState({
    sortedArray: [...this.state.originalArray].sort().join(', ')
  });

  handleReset = () => this.setState({
    sortedArray: this.state.originalArray.join(', '),
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
