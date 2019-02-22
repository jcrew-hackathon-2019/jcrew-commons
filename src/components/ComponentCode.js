export default {
  jcrewButtonCode: (
`import React, { Component } from 'react'
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
        className={cx(\`button button--\${theme}\`, className,  {
          'button--pending': pending,
          'button--disabled': disabled,
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
`),
  buttonPrimary: (
`<JcrewButton theme='blue'>
  Primary
</JcrewButton>`),
  buttonPrimaryAlternative: (
`<JcrewButton theme='white'>
  Primary Alternate
</JcrewButton>`
  ),
  buttonPrimaryDisabled: (
`<JcrewButton
  theme='blue'
  disabled
>
  Disabled
</JcrewButton>`
  ),
  buttonSubtle: (
`<JcrewButton theme='subtle'>
  Cancel
</JcrewButton>`
  ),
  buttonAddToBag: (
`<JcrewButton theme='add-to-bag'>
  Add to Bag
</JcrewButton>`
  ),
  buttonAddToBagDisabled: (
`<JcrewButton
  theme='add-to-bag'
  disabled
>
  Out of Stock
</JcrewButton>`
  ),
  buttonPdpSecondary: (
`<JcrewButton theme='pdp-secondary'>
  Add to Wishlist
</JcrewButton>`
  ),
  buttonPdpSecondaryDisabled: (
`<JcrewButton
  theme='pdp-secondary'
  disabled
>
  Add to Wishlist
</JcrewButton>`
  ),
  buttonTransact: (
`<JcrewButton theme='transact'>
  Transact Button
</JcrewButton>`
  ),
  buttonTransactDisabled: (
`<JcrewButton
  theme='transact'
  disabled
>
  Transact Button Disabled
</JcrewButton>`
  ),
  buttonQuickshop: (
`<JcrewButton theme='quickshop'>
  Quick Shop
</JcrewButton>`
  ),
  buttonPill: (
`<JcrewButton theme='pill'>
  Pill button
</JcrewButton>`
  ),
  buttonShopTheLook: (
`<JcrewButton theme='cta'>
  Shop the look
</JcrewButton>`
  )
}
