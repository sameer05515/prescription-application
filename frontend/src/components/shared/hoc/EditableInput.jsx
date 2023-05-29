import React, { useState } from 'react'
import withToggle from './ToggleHOCFunctional'

function EditableInput(
    {
        toggle,
        toggleStatus,
        title = 'Title not provided',
        postValueSave,
        postToggleCallbackHandler
    }
) {

    const [editedText, setEditedText] = useState(title);

    const onChangeHandler = (event) => {
        setEditedText(event.target.value);
        console.log(`editedText : ${editedText}`);
    }

    const onLabelClick = () => {
        toggle((toggleStatus) => {
            console.log(`Edit mode should be open now: toggleStatus : ${toggleStatus}`);
        });
    };

    const onSave = (postValueSave) => {
        postValueSave(editedText);
        toggle(postToggleCallbackHandler);
    }


    return (
        <>
            {toggleStatus
                ? <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => onChangeHandler(e)} />
                    <button onClick={() => onSave(postValueSave)}>
                        Edit
                    </button>
                    <button onClick={() => toggle(postToggleCallbackHandler)}>
                        Cancel
                    </button>
                </>
                : <p style={{ borderStyle: 'ridge' }} onClick={onLabelClick}>{title}</p>
            }
        </>
    )
}

export default withToggle(EditableInput)