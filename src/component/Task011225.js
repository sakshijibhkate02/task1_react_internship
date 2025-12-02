import React, { Component } from "react";
import axios from "axios";

export default class Task011225 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
      title: "",
      description: "",
    };
  }

  componentDidMount() {
    console.log("Component Mounted!");
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ num: value });

    if (value !== "") {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${value}`)
        .then((res) => {
          this.setState({
            title: res.data.title,
            description: res.data.body,
          });
        });
    }
  };

  render() {
    return (
      <div>
        <input type="number" placeholder="Enter ID" value={this.state.num} onChange={this.handleChange}/>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
