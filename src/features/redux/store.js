import {configureStore} from '@reduxjs/toolkit';
import notes from './slices/notes';


const store = configureStore({
    reducer: {
        notes
    },
    devTools : true

})

export default store