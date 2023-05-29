import {createSlice} from '@reduxjs/toolkit';

const systemItems=[
    {
        id:1,
        name:'Servlets'
    }
];

const systemSlice= createSlice({
    name: 'system',
    initialState: {items:systemItems},
    reducers:{

    }
});


export const systemActions= prescSclice.actions;

export default systemSlice;