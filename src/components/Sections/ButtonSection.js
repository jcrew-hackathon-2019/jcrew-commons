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
			<code class=""></code>
			<h2>Variations</h2>
			<div class="commons--content-variations">
				<div class="commons--content-examples">
					<dl>
						<dt><button class="button">Button</button></dt>
						<dd>Unstyled button</dd>
					</dl>
					<dl>
						<dt><button class="button button--blue">Primary</button></dt>
						<dd>Primary: To call attention to an action on a form, or highlight the strongest call to action on a page. Primary buttons should only appear once per screen (not including the application header or in a modal dialog). Not every screen requires a primary button.</dd>
					</dl>
					<dl>
						<dt><button class="button button--white">Primary Alternate</button></dt>
						<dd>Primary Alternate: Use on dark backgrounds.</dd>
					</dl>
					<dl>
						<dt><button class="button button--blue button--disabled">Disabled</button></dt>
						<dd>Use when another action has to be completed before the button is usable, like changing a field value or waiting for a system response. Use only with primary and standard button types.</dd>
					</dl>
					<dl>
						<dt><button class="button button--subtle">Cancel</button></dt>
						<dd>Subtle: Use with a primary button for actions that are less crucial such as “Cancel".</dd>
					</dl>
					<dl>
						<dt><button class="button button--add-to-bag">Add to Bag</button></dt>
						<dd>Add to Bag Button: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt><button class="button button--add-to-bag button--disabled">Out of Stock</button></dt>
						<dd>Add to Bag Disabled (Out of Stock): Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt><button class="button button--pdp-secondary">Add to Wishlist</button></dt>
						<dd>PDP Secondary: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt><button class="button button--pdp-secondary button--disabled">Add to Wishlist</button></dt>
						<dd>PDP Secondary Disabled: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
					</dl>
					<dl>
						<dt><button class="button button--transact">Transact Button</button></dt>
						<dd>Transact: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt><button class="button button--transact button--disabled">Transact Button Disabled</button></dt>
						<dd>Transact Disabled: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt>
							<div class="product-tile">
								<div class="product-tile--image">
									<img src="https://www.jcrew.com/s7-img-facade/J6366_YL5403_m?fmt=jpeg&qlt=100,0&resMode=sharp&op_usm=.1,0,0,0&wid=1300&hei=1300" alt="sample image" />
									<button class="button button--quickshop">Quick Shop</button>
								</div>
							</div>
						</dt>
						<dd>Quick Shop: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt><button class="button button--pill">Pill button</button></dt>
						<dd>Pill: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
					<dl>
						<dt><button class="button button--cta">Shop the look</button></dt>
						<dd>CTA Link: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
					</dl>
				</div>
				<div class="commons--content-code">
          <SyntaxBlock
            code={Code.jcrewButtonCode}
            style={{'width': 'auto'}}
          />
        </div>
      </div>
		</section>
		<section class="commons--content-properties">
			<h2>Properties</h2>
			<div class="commons--content-property">
				<h3 class="commons--content-property-header"><code>className</code> <code>string</code></h3>
				<p>Add a classname to the button.</p>
			</div>
			<div class="commons--content-property">
				<h3 class="commons--content-property-header"><code>className</code> <code>string</code></h3>
				<p>Add a classname to the button.</p>
			</div>
		</section>






        {/* <section class="commons--content-usage">
          <h2>Usage</h2>
          <div class="commons--content-code"></div>
          <div class="commons--content-examples"></div>
        </section>
        <SyntaxBlock
          code={`import { JcrewButton } from 'jcrew-commons'`}
          noExpand
          autoHeight
        />
        <div>
          <section class="commons--content-usage">
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
                <dd>Primary: To call attention to an action on a form, or highlight the strongest call to action on a page. Primary buttons should only appear once per screen (not including the application header or in a modal dialog). Not every screen requires a primary button.
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
                    onClick={asldj}
                  >
                    Primary Alternate
                  </JcrewButton>
                </dt>
                <dd>Primary Alternate: Use on dark backgrounds.
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
                <dd>Use when another action has to be completed before the button is usable, like changing a field value or waiting for a system response. Use only with primary and standard button types.
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
                <dd>Subtle: Use with a primary button for actions that are less crucial such as “Cancel".
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
                <dd>Add to Bag Button: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <dd>Add to Bag Disabled (Out of Stock): Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <dd>PDP Secondary: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <dd>PDP Secondary Disabled: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                <dd>Transact: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <dd>Transact Disabled: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <dd>Quick Shop: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <SyntaxBlock
                    code={Code.buttonQuickshop}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
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
                <dd>Pill: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <dd>CTA Link: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <SyntaxBlock
                    code={Code.buttonShopTheLook}
                    style={{'width': 'auto'}}
                    noExpand
                    autoHeight
                  />
                </dd>
              </dl>
            </div>
          </section>
        </div> */}
      </div>
    )
  }
}

export default ButtonSection
