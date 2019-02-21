import React, { Component } from 'react'

class Welcome extends Component {

  render() {
    return (
      <div>
      <h1>Page Header</h1>
      <section class="commons--content-overview">
        <h2>Overview</h2>
        <p></p>
      </section>
      <section class="commons--content-variations">
        <h2>Variations</h2>
        <dl>
          <dt><img src="" alt="" /></dt>
          <dd><p>Description...</p></dd>
          <dt><img src="" alt="" /></dt>
          <dd><p>Description...</p></dd>
          <dt><img src="" alt="" /></dt>
          <dd><p>Description...</p></dd>
        </dl>
      </section>
      <section class="commons--content-usage">
        <h2>Usage</h2>
        <div class="commons--content-code"></div>
        <div class="commons--content-examples"></div>
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
      </div>
    )
  }
}

export default Welcome
