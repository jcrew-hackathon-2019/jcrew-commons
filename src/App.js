import React, { Component } from 'react';
import './app.scss';

import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <main>
        <Sidebar />
      </main>
    );
  }
}

export default App;
