import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	category: [],
	error: '',
	activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk('category/fetch', () => {
	return fetch(`${API_URI}${POSTFIX}/category`)
		.then(req => req.json())
		.catch(error => {
			console.log(error);
		});
});

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeCategory(state, action) {
			state.activeCategory = action.payload.indexCategory;
		}
	},
	extraReducers: {
		[categoryRequestAsync.pending.type]: (state) => {
			state.error = '';
		},
		[categoryRequestAsync.fulfilled.type]: (state, action) => {
			state.error = '';
			state.category = action.payload;
		},
		[categoryRequestAsync.rejected.type]: (state, action) => {
			state.error = action.payload.error;
		}
	}
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;