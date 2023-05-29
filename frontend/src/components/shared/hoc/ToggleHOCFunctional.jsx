import React, { useState } from 'react'

const withToggle = (PassedComponent) => ({ initialToggleStatus, ...rest }) => {
  // const { initialToggleStatus, ...rest } = props;
  const [toggleStatus, setToggleStatus] = useState(initialToggleStatus);

  const toggle = (postToggle) => {
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


export default withToggle