import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class SyntaxBlock extends Component {
  state = {
    currentHeight: '250px',
    clickLabel: 'Click to expand',
  }

  toggleHeight = () => {
    this.setState({currentHeight: this.state.currentHeight!=='auto' ? 'auto' : '250px',
    clickLabel: this.state.clickLabel!=='Click to collapse' ? 'Click to collapse' : 'Click to expand'
    })
  }

  render() {
    const {currentHeight, clickLabel} = this.state
    const {codeSample} = this.props
    return (
      <div className="syntax-container" onClick={this.toggleHeight} style={{'height':currentHeight}}>
        <div className="syntax-container-click">{clickLabel}</div>
        <div onClick={e => e.stopPropagation()}>
          <CopyToClipboard text={codeSample}>
            <button className="syntax-container-copy">Copy</button>
          </CopyToClipboard>
        </div>
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

export default SyntaxBlock
