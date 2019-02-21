import React, { Component } from 'react'

class JcrewButton extends Component {

  render() {
    const {
      text,
      onClick,
      children,
      className,
      ...rest
    } = this.props

    return (
      <button
        className={className}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    )
  }
}

export default JcrewButton
