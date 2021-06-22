import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Shop', 'Tesla Account'],
};

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
});

export const selectCars = (start) => start.car.cars;

export default carsSlice.reducer;
