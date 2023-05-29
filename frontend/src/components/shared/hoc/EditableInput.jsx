import React, { useState } from 'react'
import ToggleHOCFunctional from './ToggleHOCFunctional'

function EditableInput(
    {
        toggle,
        toggleStatus,
        title = 'Title not provided',
        postValueSave=()=>{console.warn('Post save handler not provided.')},
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

    const onSave = () => {
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
                    <button onClick={() => onSave()}>
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

export default ToggleHOCFunctional(EditableInput)