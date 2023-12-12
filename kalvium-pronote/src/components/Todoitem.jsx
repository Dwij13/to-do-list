import React, { Component } from "react";

export default class Todoitem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {e,i,deleteitem,update}=this.props
    return (
      <div key={i}>
        <input
          type="text"
          value={e}
          onChange={(hi) => update(hi.target.value, i)}
        ></input>
        <button
          className="delete"
          onClick={() => deleteitem(i)}
        >
          Delete
        </button>
      </div>
    );
  }
}
