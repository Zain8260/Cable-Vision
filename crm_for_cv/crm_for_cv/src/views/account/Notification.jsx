import React, { Component } from "react";
//import { data } from "../../data";
import { Link } from "react-router-dom";
import { ReactComponent as IconClock } from "bootstrap-icons/icons/clock.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconCartCheckFill } from "bootstrap-icons/icons/cart-check-fill.svg";
import { ReactComponent as IconCartxFill } from "bootstrap-icons/icons/cart-x-fill.svg";
import { ReactComponent as IconTagFill } from "bootstrap-icons/icons/tag-fill.svg";
import Tabs from "./Tabs";

const data = [
  {
    heading: "Home",
    body: "Student Package",
    body2: "Triple Play"
  },
  {
    heading: "Corporate",
    body: "Connect Packages",
    body2: "Triple Play"
  },
  {
    heading: "All",
    body: "Student Package",
    body2: "Triple Play"
  }
];
class NotificationView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App" style={{padding:20}}>
      
      <Tabs data={data} />
    </div>
    );
  }
}

export default NotificationView;
