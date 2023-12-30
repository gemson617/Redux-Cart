import { createSlice } from '@reduxjs/toolkit'


  const savedCartItems = localStorage.getItem('myCart');
  // localStorage.removeItem('myCart');

const initialState = {

  cartItems: localStorage.getItem("myCart") ? JSON.parse(savedCartItems) : [],
  isClicked: false, // New state added
  alert : false, // New state added

}

export const addToCartSlice = createSlice({
  name: 'myCart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      var toAdd = action.payload;
      
      var isExist = state.cartItems.find(item=> item.id === toAdd.id);

      if (toAdd && toAdd.id) {

            if(isExist){

            state.cartItems = state.cartItems.map(item=> item.id === toAdd.id ? {...item, quantity:item.quantity + 1} : item );
            const serializedState = JSON.stringify(state.cartItems);
            localStorage.setItem('myCart',serializedState)

            }else{

              state.cartItems.push({...toAdd,quantity:1});
              const serializedState = JSON.stringify(state.cartItems);
              localStorage.setItem('myCart',serializedState)

            }
          }else {
            console.log('Invalid payload or missing ID property.');
          }
    },

    cartIncrement: (state,action) =>{
      var toAdd = action.payload;

      state.cartItems = state.cartItems.map(item=> item.id === toAdd ? {...item, quantity:item.quantity + 1} : item );

      const serializedState = JSON.stringify(state.cartItems);
      localStorage.setItem('myCart',serializedState)
    
      state.alert = !state.alert;

      console.log('success');
    },

    cartDecrement: (state,action) =>{
      var toRemove = action.payload;



      state.cartItems = state.cartItems.map(item=> item.id === toRemove ? {...item, quantity:item.quantity - 1} : item );

      // state.cartItems = state.cartItems.map(item=> item.id === toRemove && item.quantity < 1 ? console.log('less than 1')  : ' ' );


      const serializedState = JSON.stringify(state.cartItems);
      localStorage.setItem('myCart',serializedState);

      state.alert = !state.alert;

      // Return the updated state
      return state;

      console.log('success');
    },



    //remove from cart


   removeFromCart: (state,action) =>{
      var toRemove = action.payload;


      let result = window.confirm("Do you want to remove this product from cart?");
      if (result === true) {
        // Code to execute if the user clicks OK
        state.cartItems = state.cartItems.filter(items => items.id !== toRemove);
      }


      
      const serializedState = JSON.stringify(state.cartItems);
      localStorage.setItem('myCart',serializedState);


      return state;
   
    },







    setClicked: (state) =>{
      state.isClicked = !state.isClicked
      },

      alertToggle:(state) => {
        state.alert = !state.alert;
      }
  },


})

// Action creators are generated for each case reducer function
export const { addToCart, setClicked, cartIncrement, cartDecrement, alertToggle, removeFromCart} = addToCartSlice.actions

export default addToCartSlice.reducer