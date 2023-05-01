import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LocationState {
  drivers: any;
};

const initialState: LocationState = {
  drivers: {},
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<any>) => {
      const currentDrivers = JSON.parse(JSON.stringify(state.drivers));
      currentDrivers[action.payload.driverId] = action.payload;
      state.drivers = currentDrivers;
    },
  },
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;
