import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:"hellow"
}

const Slice = createSlice({
    name: "inputSlice",
    initialState,
    reducers: {
      setValue:(state,action,e)=>{
         state.value =action.payload

      }
    }
})

export const { setValue } = Slice.actions;
export default Slice.reducer;

