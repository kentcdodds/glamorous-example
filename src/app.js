import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import glamorous from 'glamorous'
import * as polished from 'polished'
import Toggle from './toggle'

class Toggler extends Component {
  state = {on: false}
  onToggle = newOn => {
    this.setState({on: newOn})
  }
  render() {
    const {on} = this.state
    const {children} = this.props
    return (
      <div>
        <Toggle onToggle={this.onToggle}>
          {children}
        </Toggle>
        <glamorous.Div marginTop={20}>
          {on ? 'on' : 'off'}
        </glamorous.Div>
      </div>
    )
  }
}

function App() {
  return (
    <glamorous.Div display="flex" width={600} justifyContent="space-between" margin="50px auto" textAlign="center">
      <Toggler>Glamorous 💄</Toggler>
    </glamorous.Div>
  )
}

export default App
