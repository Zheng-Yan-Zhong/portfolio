import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: { bgc: "white", color: "grey"}
    },
    reducers: {
        darkMode: (state) => {
            state.value = { bgc: "#383736", color: 'lightgrey'}
        },
        lightMode: (state) => {
            state.value = { bgc: "white", color: "grey"}
        }
    }
})

export default themeSlice.reducer
export const { darkMode, lightMode } = themeSlice.actions