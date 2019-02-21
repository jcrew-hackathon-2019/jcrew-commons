import React, { Component } from 'react';
import './app.scss';
import './app2.scss'

import Sidebar from './components/Sidebar'
import Welcome from './components/Sections/Welcome'
import AccessibilitySection from './components/Sections/AccessibilitySection'
import AccountNavigationSection from './components/Sections/AccountNavigationSection'
import AuthenticationSection from './components/Sections/AuthenticationSection'
import BadgeSection from './components/Sections/BadgeSection'
import BreadcrumbSection from './components/Sections/BreadcrumbSection'
import ButtonSection from './components/Sections/ButtonSection'
import CheckboxSection from './components/Sections/CheckboxSection'
import ColorPaletteSection from './components/Sections/ColorPaletteSection'
import ColorSection from './components/Sections/ColorSection'
import FormSection from './components/Sections/FormSection'
import GridSection from './components/Sections/GridSection'
import HomepageModulesSection from './components/Sections/HomepageModulesSection'
import IconographySection from './components/Sections/IconographySection'
import SpinnerSection from './components/Sections/SpinnerSection'
import TypographySection from './components/Sections/TypographySection'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeSection: 'welcome',
    }
  }

  navigateSection = (e) => this.setState({ activeSection: e.target.id })

  render() {
    const {
      activeSection
    } = this.state

    const body = {
      welcome: <Welcome />,
      accessibility: <AccessibilitySection />,
      accountNavigation: <AccountNavigationSection/>,
      authentication: <AuthenticationSection/>,
      badges: <BadgeSection/>,
      breadcrumbs: <BreadcrumbSection/>,
      buttons: <ButtonSection/>,
      checkboxes: <CheckboxSection/>,
      colorpalette: <ColorPaletteSection/>,
      color: <ColorSection/>,
      forms: <FormSection/>,
      grid: <GridSection/>,
      homepageModules: <HomepageModulesSection/>,
      iconography: <IconographySection/>,
      spinners: <SpinnerSection/>,
      typography: <TypographySection/>,
    }[activeSection]

    return (
      <main>
        <Sidebar
          navigateSection={this.navigateSection}
          activeSection={activeSection}
        />
        <div className='commons--content'>
          {body}
        </div>
      </main>
    );
  }
}

export default App;
