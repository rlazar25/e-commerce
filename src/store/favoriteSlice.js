import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    allFavorite: [],
    favoriteLoader: false,
    totalFavorite: 0
  },
  reducers: {
    favoriteStateAction: (state, action) => {
      let copyFavorite = [...state.allFavorite];
      let findIndex = null;

      copyFavorite.find((item, index) => {
        if (item.id === action.payload.id) {
          return (findIndex = index);
        }
      });

      if (findIndex === null) {
        copyFavorite.push({...action.payload, isFavorite: true});
        state.totalFavorite++;
      } else{
        copyFavorite.splice(findIndex, 1);
        state.totalFavorite--;
      }

      state.allFavorite = copyFavorite;
    },
  },
});

export const { favoriteStateAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;
