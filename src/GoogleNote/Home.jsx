import React from 'react';
import GoogleNoteMake from './GNote';
import ViewNote from './NoteView';

const Home = () => {
    const [ data, setData ] = React.useState([])
    function GetDataFromGNote(obj){
        setData ((oldData) => {
            return [ ...oldData, obj ]
        })
    }
   // console.log(data);
    return (
        <div className="google-note-section">
            <GoogleNoteMake  funcPass={GetDataFromGNote} />
            {data.map(( value, index)  => {
                return (
                <ViewNote key={index} 
                title={ value.title } 
                message={ value.message }
                />
                );
            })
            
            }
        </div>
    )
}

export default React.memo(Home)
