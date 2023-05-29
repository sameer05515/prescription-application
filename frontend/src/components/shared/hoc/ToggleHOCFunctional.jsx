import React, { useState } from 'react'

const withToggle = (PassedComponent) => (props) =>{
  const [toggleStatus, setToggleStatus]= useState(false);

  const toggle= ()=>{
    setToggleStatus(!toggleStatus);
  }

  return (
    <PassedComponent
      {...props}
      toggle={toggle}
      toggleStatus={toggleStatus}
    />
  )
}
  // class WithToggle extends React.Component {
  //   state = {
  //     toggleStatus: false,
  //   }
  //   constructor() {
  //     super()
  //     this.toggle = this.toggle.bind(this)
  //   }
  //   toggle() {
  //     this.setState({
  //       toggleStatus: !this.state.toggleStatus
  //     })
  //   }
  //   render() {
  //     return (
  //       <PassedComponent
  //         {...this.props}
  //         toggle={this.toggle}
  //         toggleStatus={this.state.toggleStatus}
  //       />
  //     )
  //   }
  // }
  
export default withToggle