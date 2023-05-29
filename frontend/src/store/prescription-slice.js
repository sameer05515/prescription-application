import {createSlice} from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const prescSclice=createSlice({
    name: 'prescription',
    initialState: {items:[]},
    reducers:{
        addItem(state, action){
            const item= action.payload;
            item.id=uniqid();
            state.items.push(item);
            console.log(state.items)
        },
        editItem(state, action){
            //const item= action.payload;
        },
        deleteItem(state, action){
            // const item= action.payload;
        }
    }
});

export const prescActions= prescSclice.actions;

export default prescSclice;