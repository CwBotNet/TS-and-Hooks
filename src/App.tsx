import React, { useEffect, useState } from 'react';
// import { useNotification } from './customHookd';
import './App.css'
import axios from 'axios';
import { useNotification } from './customHooks';




function App() {

  return (
    <>
      <div>
        <h1>Ts and Hooks</h1>

        <hr />
        <h3>function base component</h3>
        <MyComponentFnc />
        <hr />
        <h3>class base component</h3>
        <MyComponent />


        <hr />
        <h1>custom data fetching hook</h1>
        <Notification />

      </div>
    </>
  )
}

export default App


function MyComponentFnc() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


function Notification() {
  const data: any = useNotification()
  return (
    <div>
      <p>Network :{data.network}</p>
      <p>Jobs :{data.jobs}</p>
      <p>Messaging :{data.messaging}</p>
      <p>Notifications :{data.notifications}</p>
    </div>
  )
}


