import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.initialValue,
      currentUser: {
        name: 'tarun',
      },
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  decrement = () => {
    const nextValue = this.state.currentValue - 1;
    this.setState({ currentValue: nextValue });
  };
  increment = () => {
    const nextValue = this.state.currentValue + 1;
    this.setState({ currentValue: nextValue });
  };
  render() {
    return (
      <div className="ht">
        home {this.state.currentValue}
        <br />
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default Home;
