import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationsState {
  value: string[];
}

const initialState: ReservationsState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    // Ultimately when we click on the card we want to remove it.
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation } = reservationsSlice.actions;
export const { removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
