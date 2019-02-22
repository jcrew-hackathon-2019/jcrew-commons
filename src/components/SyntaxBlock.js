import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { commons } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyToClipboard } from 'react-copy-to-clipboard';

class SyntaxBlock extends Component {
  state = {
    currentHeight: this.props.autoHeight ? 'auto' : '250px',
    clickLabel: 'Click to expand',
    ifExpanded: false,
  }

  toggleHeight = () => {
    this.setState({currentHeight: this.state.currentHeight!=='auto' ? 'auto' : '250px',
    clickLabel: this.state.clickLabel!=='Click to collapse' ? 'Click to collapse' : 'Click to expand',
    ifExpanded: this.state.ifExpanded ? false : true
    })
  }

  render() {
    console.log(commons)
    const {
      currentHeight,
      clickLabel,
      ifExpanded,
    } = this.state
    const {
      code,
      noExpand,
      style,
    } = this.props
    return (
      <div
        className="syntax-container"
        onMouseDown={!ifExpanded && !noExpand ? this.toggleHeight : null}
        style={{'height':currentHeight, 'cursor':!ifExpanded && 'pointer', ...style}}
      >
        {!noExpand && <div className="syntax-container-click" onClick={this.toggleHeight} >{clickLabel}</div>}
        <div onClick={e => e.stopPropagation()}>
          <CopyToClipboard text={code}>
            <button className="syntax-container-copy">Copy</button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          language='jsx'
          showLineNumbers
          customStyle={{'height': currentHeight}}
          style={commons}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    )
  }
}

export default SyntaxBlock
