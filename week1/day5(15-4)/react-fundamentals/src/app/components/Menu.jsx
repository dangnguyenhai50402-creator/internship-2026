"use client";

import { act, useState } from "react";
import Counter from "./Counter";
import StopWatch from "./StopWatch";
import UserList from "./UserList";

const components = {
  counter: Counter,
  userlist: UserList,
  stopwatch: StopWatch,
};

function Menu() {
  const [active, setActive] = useState("counter");

  const ActiveComponent = components[active];

  return (
    <div>
      <h1>Menu</h1>

      <div className="btn-group">
        <button onClick={() => setActive("counter")}>Counter</button>
        <button onClick={() => setActive("userlist")}>UserList</button>
        <button onClick={() => setActive("stopwatch")}>StopWatch</button>
      </div>

      <hr />

      <div className="content">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default Menu;
