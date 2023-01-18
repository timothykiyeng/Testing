import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHistory = createAsyncThunk("history/fetchHistory", () => {
  return fetch("/medical_histories")
    .then((response) => response.json())
    .then((data) => data);
});

const MedicalHistory = createSlice({
  name: 'history',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {

  },
  extraReducers: {
    [fetchHistory.pending](state) {
      state.status = 'loading';
    },
    [fetchHistory.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    }
  }
})

export default MedicalHistory.reducer