import React, { Component } from 'react'
import cx from 'classnames'
import ButtonSection from './Sections/ButtonSection';

class JcrewButton extends Component {

  render() {
    const {
      text,
      onClick,
      children,
      className,
      theme,
      pending,
      disabled,
      ...rest
    } = this.props

    return (
      <button
        className={cx(className `button--${theme}`, {
          'pending': pending,
          'disabled': disabled,
        })}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    )
  }
}

export default JcrewButton
