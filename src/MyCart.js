import {React,useEffect} from 'react'
import "./style.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';

import { useSelector, useDispatch } from 'react-redux'
import {addToCart,setClicked, cartIncrement, cartDecrement, alertToggle, removeFromCart } from './states/addToCartSlice'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  Autocomplete,
  ListItemAvatar,
  Alert,
  ButtonGroup,
  Button,

} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';


import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import ProductListingPage from "./Cart";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'end',
  // color: theme.palette.text.secondary,
}));

export default function MyCart() {
    const myCart = useSelector((state) => state.myCart.cartItems)
    const alert = useSelector((state) => state.myCart.alert)
    const isClicked = useSelector((state) => state.myCart.isClicked); // Accessing isClicked state
  
   
    const dispatch = useDispatch();
console.log(alert)

      const handleClick = () =>{
        dispatch(setClicked());
      };

        // useEffect
      // var timeout = setTimeout(() => {
      //     dispatch(alertToggle());
      // }, 2000);

      // clearTimeout(timeout);


      if(alert){
        setTimeout(() => {
          dispatch(alertToggle());
        }, 2000);
    }
   

      

      const handleIncrement = (id) =>{
        // alert(id)
        dispatch(cartIncrement(id))
      };

      const handleRemove = (id) =>{
        // console.log(id)
        dispatch(removeFromCart(id))
      };




      return (
        
          <div className="px-10 pt-10">

                <div className="flex items-center justify-between sm:flex-wrap ">
                <Typography variant="h2" gutterBottom>
                       </Typography>
                    

                    <IconButton aria-label="Shopping Cart" >
                        <Badge badgeContent={myCart.length} color="info">
                          <ShoppingCartIcon fontSize="large" className="text-black" onClick={handleClick}/>
                        </Badge>
                      </IconButton>
                </div>
  

        {alert &&  <Alert severity="success">Cart updated Succesfully</Alert>}

          
                {/* <Paper elevation={24} sx={{ p:2 }}>
                      <Typography variant="h4" gutterBottom>
                        Your Cart
                      </Typography>
                      <Divider />
                        {myCart.map((item, index) => (
                          <div>

              <Grid container spacing={2} rowSpacing={2} className="p-2 m-2"  direction="row" justifyContent="space-around" alignItems="center">                
                                <Grid item  xs={12} sm={6} md={3}>
                                      <Avatar
                                        alt={item.name}
                                        src={item.image}
                                        sx={{
                                          width: { xs: 340, sm: 250, md:200 },
                                          height: { xs: 300, sm: 220, md:170 },
                                          borderRadius: '5px',
                                          overflow: 'hidden',
                                          margin: 1,
                                          marginRight: 2,
                                        }}
                                      />
                                </Grid>
                                
                                <Grid item sm={6} md={3}  align="center">
                                      <ListItemText
                                        primary={item.name}
                                        secondary={`Quantity: ${item.quantity}`} />
                                </Grid>

                  <Grid item xs={6}  sm={6} md={3} align="right">

                              <Button><AddIcon/></Button>
                              <span>12</span>
                              <Button><RemoveIcon/></Button>
                  </Grid>
                  
                  <Grid item xs={12}  sm={6} md={3}>
                      <div>

                          <Typography variant="body1" align="right">
                               ${(item.price * item.quantity).toFixed(2)}
                          </Typography>
                          
                      </div>
                  </Grid>
                
              </Grid>


              <Divider />


              </div>


                        ))}

    
                      <Typography variant="h6" justifyContent="center" align='end'>
                        Total: $
                        {myCart
                          .reduce((total, item) => total + item.price * item.quantity, 0)
                          .toFixed(2)}
                      </Typography>
                  </Paper> */}



{/* //kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}





<div className=''>
<Typography variant="h4" gutterBottom>
                        Your Cart
                      </Typography>
          <Paper elevation={24} sx={{ p:2 }} className='mt-4 mb-20' >

                     
{/* md:grid-cols-12  lg:grid-cols-6 xl:grid-cols-3 */}

<div className='grid content-center lg:grid-cols-3 lg:grid-flow-row '>
<div className='row-span-2 md:col-span-2 container_scroll'>

                      {myCart.map((item, index) => (
<div className=''>
                        <div className="grid content-center grid-flow-row sm:grid-cols-2 justify-items-center md:grid-cols-3 sm:place-content-end">
                            
                            <div className='content-center'>
                                    <Avatar
                                        alt={item.name}
                                        src={item.image}
                                        sx={{
                                          width: { xs: 340, sm: 170, md:170 },
                                          height: { xs: 300, sm: 130, md:130 },
                                          borderRadius: '5px',
                                          overflow: 'hidden',
                                          margin: 1,
                                          marginRight: 2,
                                        }}
                                      />
                                
                            </div>

                                        <div className='grid content-center grid-flow-row grid-cols-2 mb-2 sm:grid-flow-col md:grid-flow-row md:grid-cols-2 md:justify-self-start justify-self-center'>
                                              
                                                  <ListItemText  align=""
                                                  primary={item.name}
                                                  secondary={`Quantity: ${item.quantity}`} />

                                              <div className='grid content-center grid-flow-row mt-4 justify-items-left' >
                                                  <div>
                                                      <Button onClick={() => dispatch(cartDecrement(item.id))}><RemoveIcon/></Button>  
                                                          <span  className='md:mx-0'>{item.quantity}</span>
                                                      <Button onClick={() => handleIncrement(item.id)} ><AddIcon/></Button>
                                                  </div>
                                              </div>
                                        </div>


                            

                            <div className='flex items-center justify-between md:gap-x-4 sm:flex-wrap gap-x-52 sm:gap-x-20'>
                                  
                                  <Typography variant="body1" align="right">
                                    $ {(item.price * item.quantity).toFixed(2)}
                                  </Typography>

                                  <button><DeleteIcon color="secondary" fontSize="small"  onClick={() => handleRemove(item.id)} /></button>

                            </div>






              </div>
                    <Divider />

              </div>
                        ))}

                       {/* end of 1st grid box */}
                        </div>  
                        
                        {/* 2nd grid box  */}
                      <div>  
                      <Divider />

                      <Typography variant="h4" gutterBottom style={{margin:'15px'}}>
                        Order Summary
                      </Typography>                        
                      <div class='grid grid-cols-1 m-3 gap-4'>
                          <div class='flex bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 py-4 justify-between'>
                              <div class='flex items-center justify-center w-full md:w-1/3'>ITEMS - {myCart.length}</div>
                                  <div class='flex items-center justify-center w-full md:w-1/3'>$
                                      {myCart
                                        .reduce((total, item) => total + item.price * item.quantity, 0)
                                        .toFixed(2)}
                                  </div>
                              </div>
                          <div class='bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 p-4'>SHIPPING <br></br>
                              <input
                                type="text"
                                id="shippingAddress"
                                placeholder="Enter your shipping address"
                                value=''
                              />
                          </div>
                          <div class='flex bg-gray-100 rounded-lg shadow-md hover:bg-gray-50 p-4 justify-between'>
                          <div class='flex items-center justify-center w-full md:w-1/3'>TOTAL COST    </div>
                                  <div class='flex items-center justify-center w-full md:w-1/3'>$
                                      {myCart
                                        .reduce((total, item) => total + item.price * item.quantity, 0)
                                        .toFixed(2)}
                                  </div>
                          </div>
                          <button className='p-2 bg-teal-300 rounded-md hover:bg-teal-400 text-slate-950 hover:shadow-xl'>Checkout</button>
                                        
                        </div>

                      </div>

                              
          </div>


    <div className='my-2 mr-5'>
                      <Typography variant="h6" justifyContent="center" align='end'>
                        Total: $
                        {myCart
                          .reduce((total, item) => total + item.price * item.quantity, 0)
                          .toFixed(2)}
                      </Typography>
                      </div>

                  </Paper>

                  </div>

                 








              
          </div>
    
  )
}
