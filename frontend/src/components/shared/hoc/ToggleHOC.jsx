import React from 'react'

const withToggle = (PassedComponent) =>
  class WithToggle extends React.Component {
    state = {
      toggleStatus: false,
    }
    constructor() {
      super()
      this.toggle = this.toggle.bind(this)
    }
    toggle() {
      this.setState({
        toggleStatus: !this.state.toggleStatus
      })
    }
    render() {
      return (
        <PassedComponent
          {...this.props}
          toggle={this.toggle}
          toggleStatus={this.state.toggleStatus}
        />
      )
    }
  }
  
export default withToggle