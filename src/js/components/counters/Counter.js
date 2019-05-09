import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  // };

  // constructor(){
  //     super();
  //     console.log('constructor', this);
  // }

  // renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //         <ul>
  //             {this.state.tags.map(tag => (
  //                 <li key={tag}>{tag}</li>
  //             ))}
  //         </ul>
  //     );
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call
    }
  }

  componentWillUnmount() {
    console.log("Counter- unmount");
  }

  render() {
    // console.log("props", this.props);
    console.log("counter - render");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrease(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
