import React from 'react'
import withToggle from './ToggleHOC'

const ViewEditToggleExample = ({ toggle, toggleStatus, title, onChangeHandler }) => (
  <div>
    { toggleStatus 
      ? <input type="text" value={title} onChange={(e)=>onChangeHandler(e)}/>
      : <p>{ title }</p>
    }
    <button onClick={toggle}>
      { toggleStatus ? 'Cancel' : 'Edit' }
    </button>
  </div>
)

export default withToggle(ViewEditToggleExample)