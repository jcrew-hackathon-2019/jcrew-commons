import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class SyntaxSection extends Component {
  state = {
    currentHeight: '250px'
  }

  toggleHeight = () => {
    this.setState({currentHeight: this.state.currentHeight!=='auto' ? 'auto' : '250px'})
  }

  render() {
    const {currentHeight} = this.state
    const {codeSample} = this.props
    return (
      <div className="syntax-container" onClick={this.toggleHeight} style={{'height':currentHeight}}>
        <div className="syntax-container-click">Click to expand</div>
        <CopyToClipboard text={codeSample}>
        <button className="syntax-container-copy">Copy to clipboard with button</button>
        </CopyToClipboard>
        <SyntaxHighlighter
          language='jsx'
          showLineNumbers
          customStyle={{'height': currentHeight}}
        >
          {codeSample}
        </SyntaxHighlighter>
      </div>
    )
  }
}

export default SyntaxSection
