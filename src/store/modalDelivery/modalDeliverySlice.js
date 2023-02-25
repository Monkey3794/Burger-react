import { createSlice } from "@reduxjs/toolkit";


const modallSlice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false
	},
	reducers: {
		openModal: state => {
			state.isOpen = true;
		},
		closeModal: state => {
			state.isOpen = false;
		}
	}
});

export const { openModal, closeModal } = modallSlice.actions;
export default modallSlice.reducer;