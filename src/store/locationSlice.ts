import {createSlice} from'@reduxjs/toolkit'

const initialState = {
  searchPosition: ''
}


const locationsSlice = createSlice({
  name: 'locationsSlice',
  initialState,
  reducers: {
    setSearchPosition(state, action) {
      state.searchPosition = action.payload
    }
  }
})

export const locationsReducer = locationsSlice.reducer;
export const locationsActions = locationsSlice.actions