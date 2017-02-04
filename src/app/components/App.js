import React from "react";

import AccountScreen from "./accountScreen/AccountScreen";

export default class App extends React.Component {
	render() {
    return (
      <div className="application_wrapper">
        <div className="application_routeHandler">
            <AccountScreen/>
        </div>
      </div>
    );
  }
}