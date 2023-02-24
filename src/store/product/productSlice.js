import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
	products: [],
	error: '',
};

export const productRequestAsynk = createAsyncThunk('fetch/product', (category) => {
	return fetch(`${API_URI}${POSTFIX}?category=${category}`)
		.then(req => req.json())
		.catch(error => ({ error }))
});

const productSlice = createSlice(
	{
		name: 'product',
		initialState,
		extraReducers: builder => {
			builder
				.addCase(productRequestAsynk.pending, state => {
					state.error = '';
				})
				.addCase(productRequestAsynk.fulfilled, (state, action) => {
					state.error = '';
					state.products = action.payload;
				})
				.addCase(productRequestAsynk.rejected, (state, action) => {
					state.error = action.payload.error;
				})
		}
	}
);

export default productSlice.reducer;