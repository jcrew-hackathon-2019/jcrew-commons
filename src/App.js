import React, { Component } from 'react';
import './app.scss';

import Sidebar from './components/Sidebar'
import Welcome from './components/Sections/Welcome'
import ButtonSection from './components/Sections/ButtonSection'

class App extends Component {
  constructor() {
    super()
    this.state = {
      section: 'welcome',
    }
  }

  navigateSection = (section) => this.setState({ section })

  render() {
    const {
      section
    } = this.state

    const body = {
      welcome: <Welcome />,
      buttons: <ButtonSection />,
    }[section]

    return (
      <main>
        <Sidebar
          navigateSection={this.navigateSection}
        />
        {body}
      </main>
    );
  }
}

export default App;
