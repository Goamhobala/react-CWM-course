import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 4,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div className="counter">
        <span className={this.getBadgeClasses}>{this.formatCount}</span>
        <button className="btn bg-secondary btn-sm">+</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  get getBadgeClasses() {
    let classes = "badge m-3 ";
    return (classes += this.state.count === 0 ? "bg-warning" : "bg-primary");
  }

  get formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
