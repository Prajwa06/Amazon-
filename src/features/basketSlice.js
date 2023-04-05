import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items:[],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket:(state,action)=>{
        state.items=[...state.items, action.payload];
    },
    removeFromBasket:(state,action)=>{
      // the next iterate through items array and seaarch for the id passed as payload and return the 
      // index of that particuler item
        const index=state.items.findIndex(basketItem =>basketItem.id=== action.payload.id);

        let newBasket=[...state.items];

        if(index>=0){
          // item found
          newBasket.splice(index,1);
        }
        else{
          // item does not exist
          
        }
        state.items=newBasket;
    }
  },
})


export const { addToBasket, removeFromBasket } = basketSlice.actions;


export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=>total+item.price, 0);
export default basketSlice.reducer;
