import React from 'react'
import { ReactDOM, createRoot } from "react-dom/client";
import { useEffect, Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>App</h1>
    );
  }
}

const AppWithCallbackAfterRender = () => {
  useEffect(() => {
    console.log('rendered');
  });

  return <App tab="home" />
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);