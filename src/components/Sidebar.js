import React, { Component } from 'react'
import cx from 'classnames'

class Sidebar extends Component {
  render() {
    const {
      navigateSection,
      activeSection,
    } = this.props


    return (
      <div class="commons--nav">
        <div class="commons--nav-main">
          <div class="commons-nav-logo"><a href="#">J.Crew Commons</a></div>
        </div>
        <div class="commons--nav-subnav">
          <div class="commons--subnav-header"><a href="#">/commons</a></div>
          <h3>Framework</h3>
          <ul>
            <li className={cx({
              'active': activeSection === 'grid'
            })}><a id='grid' onClick={navigateSection}>Grid</a></li>
            <li className={cx({
              'active': activeSection === 'accessibility'
            })}><a id='accessibility' onClick={navigateSection}>Accessbility</a></li>
            <li className={cx({
              'active': activeSection === 'iconography'
            })}><a id='iconography' onClick={navigateSection}>Iconography</a></li>
            <li className={cx({
              'active': activeSection === 'typography'
            })}><a id='typography' onClick={navigateSection}>Typography</a></li>
          </ul>
          <h3>Components</h3>
          <ul>
            <li className={cx({
              'active': activeSection === 'badges'
            })}><a id='badges' onClick={navigateSection}>Badges</a></li>
            <li className={cx({
              'active': activeSection === 'buttons'
            })}><a id='buttons' onClick={navigateSection}>Buttons</a></li>
            <li className={cx({
              'active': activeSection === 'checkboxes'
            })}><a id='checkboxes' onClick={navigateSection}>Checkboxes</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a id='buttons' onClick={navigateSection}>Link</a></li>
          </ul>
          <h3>Patterns</h3>
          <ul>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Forms</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Link</a></li>
            <li className={cx({
              'active': activeSection === 'link'
            })}><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
