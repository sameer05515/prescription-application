import React from 'react'
import withToggle from './ToggleHOCFunctional'

const ViewEditToggleExample = ({ toggle, toggleStatus, title, onChangeHandler, postToggleCallbackHandler }) => (
  <div>
    { toggleStatus 
      ? <input type="text" value={title} onChange={(e)=>onChangeHandler(e)}/>
      : <p>{ title }</p>
    }
    <button onClick={()=>toggle(postToggleCallbackHandler)}>
      { toggleStatus ? 'Cancel' : 'Edit' }
    </button>
  </div>
)

export default withToggle(ViewEditToggleExample)