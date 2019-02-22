import React, { Component } from 'react'
import SyntaxBlock from '../SyntaxBlock'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import JcrewButton from '../JcrewButton'
import Code from '../ComponentCode'
import '../../css/buttons.scss'

class ButtonSection extends Component {

  render() {
    return (
      <div>
        <section class="commons--content-header">
          <h1>Buttons</h1>
          <p>Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like forms, modals, and transactional pages.</p>
          <div class="commons--content-example">
            <div class="commons--example-container">
              <div class="commons--example-buttons">
                <div class="commons--example-buttons-atb"><button class="button button--add-to-bag">Add to Bag</button></div>
                <div class="commons--example-buttons-secondary"><button class="button button--pdp-secondary">Add to Wishlist</button><button class="button button--pdp-secondary">Find in Store</button></div>
              </div>
            </div>
          </div>
        </section>
        <section class="commons--content-usage">
          <h2>Usage</h2>
          <div class="commons--import-code">
            <SyntaxBlock
              code={`import { JcrewButton } from 'jcrew-commons`}
              style={{'width': 'auto'}}
              noExpand
              autoHeight
            />
          </div>
          <h2>Variations</h2>
          <div class="commons--content-variations">
            <div class="commons--content-examples">
              <dl>
                <dt><button class="button">Button</button></dt>
                <dd>Unstyled button</dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='blue'
                  >
                    Primary
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonPrimary}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='white'
                  >
                    Primary Alternate
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonPrimaryAlternative}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='blue'
                    disabled
                  >
                    Disabled
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonPrimaryDisabled}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='subtle'
                  >
                    Cancel
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonSubtle}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='add-to-bag'
                  >
                    Add to Bag
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonAddToBag}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='add-to-bag'
                    disabled
                  >
                    Out of Stock
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonAddToBagDisabled}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='pdp-secondary'
                  >
                    Add to Wishlist
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonPdpSecondary}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='pdp-secondary'
                    disabled
                  >
                    Add to Wishlist
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonPdpSecondaryDisabled}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='transact'
                  >
                    Transact Button
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonTransact}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='transact'
                    disabled
                  >
                    Transact Button Disabled
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonTransactDisabled}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <div class="product-tile">
                    <div class="product-tile--image">
                      <img src="https://www.jcrew.com/s7-img-facade/J6366_YL5403_m?fmt=jpeg&qlt=100,0&resMode=sharp&op_usm=.1,0,0,0&wid=1300&hei=1300" alt="sample image" />
                      <JcrewButton
                        theme='quickshop'
                      >
                        Quick Shop
                      </JcrewButton>
                    </div>
                  </div>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonQuickshop}
                    style={{'width': 'auto'}}
                    noExpand
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                 <JcrewButton
                    theme='pill'
                  >
                    Pill button
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonPill}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
              <dl>
                <dt>
                  <JcrewButton
                    theme='cta'
                  >
                    Shop the look
                  </JcrewButton>
                </dt>
                <dd>
                  <SyntaxBlock
                    code={Code.buttonShopTheLook}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
            </div>
            <div class="commons--content-code">
              <SyntaxBlock
                code={Code.jcrewButtonCode}
                style={{'width': 'auto'}}
                noCopy
              />
            </div>
            </div>
        </section>
        <section class="commons--content-properties">
          <h2>Properties</h2>
          <div class="commons--content-property">
            <div class="commons--content-property-header"><code>className</code> <code>string</code></div>
            <p>Add a classname to the button.</p>
          </div>
          <div class="commons--content-property">
            <div class="commons--content-property-header"><code>className</code> <code>string</code></div>
            <p>Add a classname to the button.</p>
          </div>
        </section>
      </div>
    )
  }
}

export default ButtonSection
