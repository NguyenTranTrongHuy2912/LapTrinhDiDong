import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

interface CounterState {
    value: number;
    step: number;
}

const initialState: CounterState = {
    value: 0,
    step: 1,
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.value += state.step },
        decrement: (state) => { state.value -= state.step },
        reset: (state) => { state.value = 0 },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
    }
})

export default CounterSlice.reducer;
export const { increment, decrement, reset, incrementByAmount, setStep } = CounterSlice.actions;

export const selectCounterValue = (state: RootState) => state.counter.value;
export const selectCounterStep = (state: RootState) => state.counter.step;

const styles = StyleSheet.create({})