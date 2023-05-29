import React, { useState } from 'react'

const withToggle = (PassedComponent) => ({ initialToggleStatus, ...rest }) =>{
  // const { initialToggleStatus, ...rest } = props;
  const [toggleStatus, setToggleStatus]= useState(initialToggleStatus);

  const toggle= (postToggle)=>{
    setToggleStatus(!toggleStatus);
    postToggle(toggleStatus);
  }

  return (
    <PassedComponent
      {...rest}
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