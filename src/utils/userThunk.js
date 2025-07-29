import { createAsyncThunk } from "@reduxjs/toolkit";
// wants to import the named utility function from the redux toolkit 


export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok){
        throw new Error('failed to fetch users')
    }
    return res.json();

})


//  we need to import it in userSlice.ts