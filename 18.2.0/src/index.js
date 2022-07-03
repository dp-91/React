import React from 'react'
import { ReactDOM, createRoot } from "react-dom/client";
import { useEffect, Component } from 'react';

import List from './component/List/List';

const AppWithCallbackAfterRender = () => {
  useEffect(() => {
    console.log('rendered');
  });

  return <div><List /></div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);