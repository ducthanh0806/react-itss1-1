import React, { Component } from "react";
import { Input } from "antd";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    let results = [];
    this.setState({
      results: [],
    });
    if (query.length > 0) {
      this.props.albums.map((item, idx) => {
        if (item.name.includes(query)) {
          results[idx] = item;
        }
      });
      this.state.results = results;
      // this.setState({
      //   results: results,
      // });
      this.props.callbackFromParent(this.state.results, false);
    }
    else {
      this.props.callbackFromParent(this.state.results, true);
    }
  };

  render() {
    return (
      <label>
        <Input
          placeholder="Album Search"
          onChange={this.handleOnInputChange}
          enterButton
        />
      </label>
    );
  }
}
export default Search;
