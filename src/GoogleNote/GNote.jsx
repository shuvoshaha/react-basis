import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const GNote = () => {
    const [ value, setValue ] = useState({
        title: '',
        message: ''
    });
    //Get data from input field
    onChangeHandler((e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValue({
            [name] : value,
        })
    })

    
    return (
        <div className="google-note">
            <form onSubmit={ submitHandler }>
                <input
                    name="note-field"
                    type="text"
                    className="note-title"
                    onChange={onChangeHandler} />

                <textarea
                    name=""
                    cols="30"
                    rows="10">
                </textarea>

                <Button
                    variant="contained"
                    color="secondary"
                    className="submit-btn"
                    type="submit"
                >
                    <AddIcon className="btn-add" />
                </Button>

            </form>
        </div>
    )
}

export default GNote
