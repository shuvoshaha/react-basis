import React from 'react';
import GoogleNoteMake from './GNote';
import ViewNote from './NoteView';

const Home = () => {
    const [data, setData] = React.useState([]);
    
    const GetDataFromGNote = (obj) => {
        setData((oldData) => {
            return [...oldData, obj]
        })
    }
    const deleteItem = (id) =>{
        setData ((oldData) => 
        oldData.filter((val, index) =>{
                return index !== id;

        })
        )
    }
    
    return (
        <div className="google-note-section">
            <GoogleNoteMake funcPass={GetDataFromGNote} />
            <div className="g-note-section">
                <div className="container">
                    <div className="g-note-view">
                        {data.map((value, index) => {
                            return (
                                <ViewNote key={index}
                                    id={ index }
                                    title={value.title}
                                    message={value.message}
                                    deleteItem = { deleteItem }
                                />
                            );
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Home)
