import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let INITIALSTATE={
    albums:[

    ],
    textValue:'',
    Ids:0
}

// FETCHING objects from API

export const getInitialStateAsync = createAsyncThunk("album/getInitialState",
   ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/albums")
   }
)


// ADDING object to API

export const addAlbumAsync = createAsyncThunk("album/addAlbum", async (payload) =>{   
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
    return  response.json();
})


// UPDATING object from API

export const updateAlbumAsync = createAsyncThunk("album/updateAlbum", async (payload) =>{
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
    return response.json();
})

// DELETING object from API

export const deleteAlbumAsync = createAsyncThunk("album/deleteAlbum", async (payload) =>{
    
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
            state.albums = [...action.payload.data]
        })
        .addCase(addAlbumAsync.fulfilled, (state, action)=>{
            state.albums.push( action.payload);
        })
        .addCase(updateAlbumAsync.fulfilled, (state, action) => {
            const { title, id } = action.payload;
            state.albums = state.albums.map((album) => (
                album.id === id ? {title :title} : album
            ));
        })
        .addCase(deleteAlbumAsync.fulfilled, (state, action) =>{
            state.albums = state.albums.filter((album, key) => 
                album.id!==action.payload
            )
        })
        
    }
})

export const albumReducer = AlbumSlice.reducer;
export const actions = AlbumSlice.actions;

export const albumSelector = (state)=>state.albumReducer;
