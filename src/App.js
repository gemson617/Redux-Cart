import "./style.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';

import { useSelector, useDispatch } from 'react-redux'
import {addToCart,setClicked } from './states/addToCartSlice'
import MyCart from './MyCart'


import { 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography, 
  styled, 
  Grid, 
  Paper, 
  Box, 
  TextField, 
  Autocomplete 
} from '@mui/material';

import ProductListingPage from "./Cart";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "High-performance laptop",
    image: "https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Premium+Smartphone",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    description: "Latest model smartphone",
    image: "https://via.placeholder.com/300x200/3498DB/FFFFFF?text=Flagship+Smartphone",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: 1299,
    description: "High-performance gaming laptop with dedicated graphics",
    image: "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Gaming+Laptop",
  },
  {
    id: 4,
    name: "Flagship Smartphone",
    price: 899,
    description: "Flagship-grade smartphone with advanced camera features",
    image: "https://via.placeholder.com/300x200/3498DB/FFFFFF?text=Flagship+Smartphone",
  },
  {
    id: 5,
    name: "Convertible Laptop",
    price: 1099,
    description: "Convertible laptop with touchscreen and 360-degree hinge",
    image: "https://via.placeholder.com/300x200/2ECC71/FFFFFF?text=Convertible+Laptop",
  },
  {
    id: 6,
    name: "Premium Smartphone",
    price: 749,
    description: "Premium smartphone with sleek design and powerful specs",
    image: "https://via.placeholder.com/100x70/9B59B6/FFFFFF?text=Premium+Smartphone",
  },
  {
    id: 7,
    name: "Business Laptop",
    price: 1499,
    description: "Business-focused laptop with enhanced security features",
    image: "https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Business+Laptop",
  },
  {
    id: 8,
    name: "Budget Smartphone",
    price: 299,
    description: "Budget-friendly smartphone with decent specifications",
    image: "https://via.placeholder.com/300x200/E74C3C/FFFFFF?text=Budget+Smartphone",
  },
  {
    id: 9,
    name: "Ultra-thin Laptop",
    price: 1599,
    description: "Ultra-thin and lightweight laptop for portability",
    image: "https://via.placeholder.com/300x200/3498DB/FFFFFF?text=Ultra-thin+Laptop",
  },
  {
    id: 10,
    name: "Rugged Smartphone",
    price: 399,
    description: "Rugged smartphone built for durability and outdoor use",
    image: "https://via.placeholder.com/300x200/2ECC71/FFFFFF?text=Rugged+Smartphone",
  },
];  


const ProductCard = ({product}) => {
        
      const dispatch = useDispatch();
      const myCart = useSelector((state) => state.myCart.cartItems)

      const handleAddToCart = () =>{
      // console.log(product)

        dispatch(addToCart(product))
      
      };
    return (
        <Card sx={{ maxWidth: 545,maxHeight: 545,justifyContent:'center' }}  className="transition-transform ease-in-out duration-5000 hover:scale-105">
          
          <CardMedia
            component="img"
            alt="green iguana"
            image={product.image}
          />
        
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            Price : ₹{product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product.description}
            </Typography>
          </CardContent>
        
          <CardActions sx={{ justifyContent: 'end', padding: '0px'  }} className=" bg-slate-400">
  
            <IconButton aria-label="Shopping Cart">
              <AddShoppingCartIcon fontSize="large" className="p-1 text-black"
               onClick={handleAddToCart}/>
            </IconButton>
            
          </CardActions>
          
      </Card>
      )
    }



      
const check = 0;

function App() {
    const [products] = useState(initialProducts)
    const myCart = useSelector((state) => state.myCart.cartItems)
    const isClicked = useSelector((state) => state.myCart.isClicked); // Accessing isClicked state
    // console.log(isClicked +' isclicked')
    const dispatch = useDispatch();

      const handleClick = () =>{
        dispatch(setClicked());
      };

    // console.log(myCart)
  
  return (
<div className="px-10 pt-10 bg-gray-300 lg:px-32">
     
     <div className="flex items-center justify-between sm:flex-wrap">
  <p className="pb-4 text-2xl md:max-xl:text-3xl xl:max-2xl:text-4xl">
    All Products
  </p>
  

  <IconButton aria-label="Shopping Cart" >
      <Badge badgeContent={myCart.length} color="info">
         <ShoppingCartIcon fontSize="large" className="text-black" onClick={handleClick}/>
      </Badge>
    </IconButton>
</div>


    
<Grid container rowSpacing={{ xs: 2, sm: 2} } columnSpacing={{ xs: 1, sm: 2}} className="">
    {products.map((product)=>(
        <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
           <ProductCard product={product}/>
          
        </Grid>
    ))
    }
   
</Grid>



<Grid container spacing={2} rowSpacing={2} className="p-2 m-2">
  <Grid item xs={6} md={4}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=4</Item>
  </Grid>
  
</Grid>

    
    </div>
  );
}

export default App;
