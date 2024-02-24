import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let INITIALSTATE={
    albums:[

    ],
    textValue:'',
    Ids:0
}

export const getInitialStateAsync = createAsyncThunk("album/getInitialState",
   ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/albums")
   }
)


export const addAlbumAsync = createAsyncThunk("album/addAlbum", async (payload) =>{
    console.log(payload, "ye hai")
    const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userId:1,
            id:100,
            title:payload,
           
        })
    });
    console.log(response,"response")
    return  response.json();
})



export const updateAlbumAsync = createAsyncThunk("album/updateAlbum", async (payload) =>{
    console.log(payload, "ye hai")
    const {textValue, Ids} = payload;
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${Ids}`, {
        method: 'PUT',
        body: JSON.stringify({
            title:textValue
        }),
        headers:{
            'Content-type': 'application/json',
        }
    })
    console.log(response.json);
    return response.json();
})

export const deleteAlbumAsync = createAsyncThunk("album/deleteAlbum", async (payload) =>{
    
    console.log(payload);
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${payload}`,{
        method: 'DELETE',
    })

    return payload;
})

const AlbumSlice = createSlice({
    name:'album',
    initialState:INITIALSTATE,
    reducers:{
       setText:(state, action)=>{
          state.textValue = action.payload;
       },
       setIds:(state, action)=>{
         state.Ids = action.payload;
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsync.fulfilled, (state, action)=>{
            console.log("loaded");
            state.albums = [...action.payload.data]
        })
        .addCase(addAlbumAsync.fulfilled, (state, action)=>{
            state.albums.push( action.payload);
        })
        .addCase(updateAlbumAsync.fulfilled, (state, action) => {
            const { title, id } = action.payload;
            console.log(title, "ye dusra hai")
            state.albums = state.albums.map((album) => (
                album.id === id ? {title :title} : album
            ));
        })
        .addCase(deleteAlbumAsync.fulfilled, (state, action) =>{
            console.log(action.payload, "ye dusra")
            state.albums = state.albums.filter((album, key) => 
                album.id!==action.payload
            )
        })
        
    }
})

export const albumReducer = AlbumSlice.reducer;
export const actions = AlbumSlice.actions;

export const albumSelector = (state)=>state.albumReducer;
