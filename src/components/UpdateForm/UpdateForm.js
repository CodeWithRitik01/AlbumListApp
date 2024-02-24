import { useDispatch, useSelector } from "react-redux";
import { actions, albumSelector, updateAlbumAsync } from "../../redux/reducers/albumListReducer";
import "./updateForm.css";

function UpdateForm(){
    const {textValue, Ids, albums} = useSelector(albumSelector);
    const dispatch = useDispatch();

   

    const handleUpdateSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateAlbumAsync({textValue, Ids}))
    }
    
    return(
        <>
           <div className="outUpdate">
             <h1>Update Album</h1>
             <form className="updateForm" onSubmit={handleUpdateSubmit}>
                <label>Update Value</label>
                <input  type="text" placeholder={textValue} onChange={(e)=>dispatch(actions.setText(e.target.value))}></input>
                <button type="submit" >Submit</button>
             </form>

             <ul>
             {albums.map((album, key) =>(

               <li>{key+1}.{album.title}</li>
             ))}
             </ul>
           </div>
        </>
    )
}

export default UpdateForm;