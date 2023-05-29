import React from 'react'
import withToggle from './ToggleHOC'

const CollapseExpandExample = ({ toggle, toggleStatus, list }) => (
  <div>
    <p>This is my shopping list</p>
    <button onClick={toggle}>
      { toggleStatus ? 'Collapse' : 'Expand' }
    </button>
    { toggleStatus && (
        <div>
          { list.map(item => (
              <p key={item.id}>{ item.name }</p>
            ))
          }
        </div>
      )
    }
  </div>
)

export default withToggle(CollapseExpandExample)