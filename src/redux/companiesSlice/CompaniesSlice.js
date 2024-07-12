import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api'; 


export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async () => {
    const response = await axiosInstance.get('/companies'); 
     return response.data;
  }
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default companiesSlice.reducer;
