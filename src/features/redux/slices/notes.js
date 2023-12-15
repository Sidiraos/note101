import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	notes: null,
	loading: false,
	error: null,
};

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		getNotesRequest: (state) => {
			state.loading = true;
		},
		getNotesSuccess: (state, action) => {
			// console.log(action.payload);
			state.loading = false;
			state.notes = action.payload;
		},
		getNotesFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			console.log('erreur' , action.payload);
		},
		addNote: (state, action) => {
			state.notes.push(action.payload);
		},
		deleteNote: (state, action) => {
			state.notes = state.notes.filter(
				(note) => note.id !== action.payload
			);
		},
		editNote: (state, action) => {
			const index = state.notes.findIndex(
				(note) => note.id === action.payload.id
			);
			state.notes[index] = action.payload;
		},
	},
});

// middleware
export const fetchNotesData = () => {
	return (dispatch) => {
		dispatch(getNotesRequest());
		fetch('/data/notes.json')
			.then((res) => res.json())
			.then((data) => dispatch(getNotesSuccess(data.notes)))
			.catch((err) => dispatch(getNotesFailure(err.message)));
	};
};

export const {
	getNotesRequest,
	getNotesSuccess,
	getNotesFailure,
	addNote,
	deleteNote,
	editNote,
} = notesSlice.actions;
export default notesSlice.reducer;
