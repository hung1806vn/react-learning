import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    console.log("counters - render");
    const { onReset, onDelete, onIncrease, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-warning btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrease={onIncrease}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
