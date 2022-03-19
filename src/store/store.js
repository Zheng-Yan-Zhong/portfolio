import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../reducer/theme'

export default configureStore({
    reducer: {
        theme: themeReducer
    }
})