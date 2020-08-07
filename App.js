import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  getLocation = async () => {
    const location = Location.getCurrentPositionAsync(); //parameter option -> permission 해야함. 위치 받아오는 것.
    console.log(location);
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}

//항상 레이아웃을 flex로 짜도록 하자!
