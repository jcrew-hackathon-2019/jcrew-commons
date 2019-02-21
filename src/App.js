import React, { Component } from 'react';
import './app.scss';

import Sidebar from './components/Sidebar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      section: 'welcome',
    }
  }

  sectionChange = (section) => this.setState({ section })

  render() {

    // const body = {

    // }

    return (
      <main>
        <Sidebar />
        {/* {body} */}
      </main>
    );
  }
}

export default App;
