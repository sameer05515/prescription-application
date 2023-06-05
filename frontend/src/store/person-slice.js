import {createSlice} from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const personSclice=createSlice({
    name: 'person',
    initialState: {items:[
    ]},
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

export const personActions= personSclice.actions;

export default personSclice;