import React, { useEffect, useState } from 'react';
// import { useNotification } from './customHookd';
import './App.css'
import axios from 'axios';








const useNotification = () => {
  const [notification, setNotification] = useState({})

  useEffect(() => {
    (
      async () => {
        const response = await axios.get("https://sum-server.100xdevs.com/notifications")
        setNotification(response.data)
        console.log(response.data)
      }
    )()

    console.log(notification)
    return notification
  }, [])
}



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
  const [notification] = useNotification()

  console.log(notification)
  return (
    <div>
      <p>{data}</p>
    </div>
  )
}