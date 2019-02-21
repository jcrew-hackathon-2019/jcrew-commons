import React, { Component } from 'react'
import SyntaxBlock from '../SyntaxBlock'
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  copyText = () => {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.setAttribute('value', codeSample)
    textarea.select()
    console.log(textarea)
    document.execCommand('copy');
    document.body.removeChild(textarea)
  }

  render() {
    return (
      <div>
        <h1>Buttons</h1>
        <hr className='hr-with-margin'/>

        <SyntaxBlock
          codeSample={codeSample}
        />

        <CopyToClipboard text={codeSample}>
        <button>Copy to clipboard with button</button>
        </CopyToClipboard>
        <h2>Usage</h2>
      </div>
    )
  }
}

export default ButtonSection
