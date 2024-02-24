import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlbumAsync, albumSelector } from "../../redux/reducers/albumListReducer";
import "./addForm.css";

function AddForm(){
   const [text, setText] = useState('');
   const [userid, setUserid] = useState('');
   const dispatch = useDispatch();
   const {albums} = useSelector(albumSelector);

   const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(text);
    dispatch(addAlbumAsync(text));
    setText('');
    setUserid('');
   }
    return(
        <>
          <div className="outAddForm">
            <div className="formClass">
            <h1>Add Album</h1>
              <form className="realForm" onSubmit={handleSubmit}>
                <label>Album Name</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                <label>userId</label>
                <input type="text" value={userid} onChange={(e) =>setUserid(e.target.value)}/>
                
                <button type="submit">submit</button>
              </form>
            </div>

            
             <ul>
             {albums.map((album, key) =>(

               <li>{key+1}.{album.title}</li>
             ))}
             </ul>
            
            
          </div>
        </>
    )
}

export default AddForm;