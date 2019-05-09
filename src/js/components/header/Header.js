import React, { Component } from "react";
import Navbar from "./navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters ={this.props.totalCounters}/>
      </React.Fragment>
    );
  }
}

export default Header;
