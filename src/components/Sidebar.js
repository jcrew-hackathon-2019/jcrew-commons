import React, { Component } from 'react'

class Sidebar extends Component {
  render() {

  return (
    <div class="commons--nav">
		<div class="commons--nav-main">
			<div class="commons-nav-logo"><a href="#">J.Crew Commons</a></div>
		</div>
		<div class="commons--nav-subnav">
			<div class="commons--subnav-header"></div>
			<h3>Framework</h3>
			<ul>
				<li><a href="#">Grid</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
			</ul>
			<h3>Components</h3>
			<ul>
				<li class="active"><a href="#">Buttons</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
			</ul>
			<h3>Patterns</h3>
			<ul>
				<li><a href="#">Forms</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
			</ul>
		</div>
	</div>
	// <div class="commons--content">

	// </div>
  )
  }
}

export default Sidebar
