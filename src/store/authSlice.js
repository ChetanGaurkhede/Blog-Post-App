import { createSlice } from "@reduxjs/toolkit";

const intailState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
  name: 'auth',
  intailState,
  reducers:{
    ligin: (state, action) =>{
        action.payload= true;
        state.status = false;
        state.userData = action.payload.data;
    }
  }

})


export {login, }
export default authSlice.reducer;