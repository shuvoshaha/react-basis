import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const GNote = (props) => {
    const [ value, setValue ] = useState({
        title: '',
        message: '',
    });
    //Get data from input field
   const onChangeHandler = (e) =>{
       e.preventDefault();
       const { name, value } = e.target;
       setValue ((data) => {
           return {
               ...data,
               [name] : value,
           }
       })
   }
    //Submit data
    const submitHandler = ((e) => {
        e.preventDefault();
        props.funcPass(value);
        //console.log(value);
    })

    
    return (
       
        <div className="google-note">
            <form onSubmit={submitHandler} >
                <input
                    name="title"
                    type="text"
                    className="note-title"
                    onChange={onChangeHandler} />

                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    onChange={ onChangeHandler }
                    >
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
