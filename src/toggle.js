import React, {Component} from 'react'
import {PrimaryButton} from './components/buttons'

class Toggle extends Component {
  state = {toggledOn: false}

  handleToggleClick = () => {
    this.setState(
      ({toggledOn}) => ({toggledOn: !toggledOn}),
      () => {
        this.props.onToggle(this.state.toggledOn)
      }
    )
  }

  render() {
    const {children} = this.props
    const {toggledOn} = this.state
    return (
      <PrimaryButton active={toggledOn} onClick={this.handleToggleClick}>
        {children}
      </PrimaryButton>
    )
  }
}

export default Toggle
