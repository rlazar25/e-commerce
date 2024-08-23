import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    allFavorite: [],
    favoriteLoader: false,
    totalFavorite: 0
  },
  reducers: {
    addToFavorite: (state, action) => {
      let copyFavorite = [...state.allFavorite];
      let findIndex = null;

      copyFavorite.find((item, index) => {
        if (item.id === action.payload.id) {
          return (findIndex = index);
        }
      });

      if (findIndex === null) {
        copyFavorite.push(action.payload);
        state.totalFavorite++;
      }

      state.allFavorite = copyFavorite;
      console.log(state.allFavorite);
    },
  },
});

export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
