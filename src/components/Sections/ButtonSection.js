import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const codeSample = `  render() {
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
      {body}
    </main>
  );`

class ButtonSection extends Component {

  render() {
    return (
      <div>
        <h1>Buttons</h1>
        <hr className='hr-with-margin'/>
        <SyntaxHighlighter
          language='jsx'
          showLineNumbers
        >{codeSample}</SyntaxHighlighter>
        <h2>Usage</h2>

      </div>
    )
  }
}

export default ButtonSection
