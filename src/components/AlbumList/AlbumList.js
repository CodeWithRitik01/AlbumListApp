import {  useDispatch, useSelector } from "react-redux";
import { actions, getInitialStateAsync, deleteAlbumAsync } from "../../redux/reducers/albumListReducer";
import { albumSelector } from "../../redux/reducers/albumListReducer";
import { useEffect } from "react";
import "./albumList.css"
import { NavLink } from "react-router-dom";

function AlbumList(){
    let {albums} = useSelector(albumSelector);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getInitialStateAsync());
    },[]);

    const handleClick = (content, id) =>{
        dispatch(actions.setText(content))
        dispatch(actions.setIds(id));
    }

    const handleDeleteClick = (id) =>{
       dispatch(deleteAlbumAsync(id));
    }
    return(
        <>
        <ul>
            {albums.map((album, key)=>(
                <li key={key}>
                    <h5>{key+1}</h5>
                    <div className="albumContainer">
                    <span>{album.title}</span>
                    
                    <img className="dltImg" onClick={() => handleDeleteClick(album.id)} src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"></img>
                    <NavLink to="updateAlbum">
                    <img onClick={() => handleClick(album.title, album.id)} src="https://cdn-icons-png.flaticon.com/128/1828/1828270.png"></img>
                    </NavLink>
                    <span>User id - {album.userId}</span>


                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}

export default AlbumList;