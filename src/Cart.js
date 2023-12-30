import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "High-performance laptop",
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    description: "Latest model smartphone",
    image: "https://via.placeholder.com/100x100",
  },
];

const ProductCard = ({ product, onAdd }) => (
  <Card raised>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body1">${product.price.toFixed(2)}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" onClick={() => onAdd(product)}>
        Add to Cart
      </Button>
    </CardActions>
  </Card>
)

const ShoppingCartOverview = ({ cartItems }) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Shopping Cart
    </Typography>
    <Divider />
    <List>
      {cartItems.map((item, index) => (
        <ListItem key={index} divider>
          <ListItemText
            primary={item.name}
            secondary={`Quantity: ${item.quantity}`}
          />
          <Typography variant="body4">
            ${(item.price * item.quantity).toFixed(2)}
          </Typography>
        </ListItem>
      ))}
    </List>
    <Typography variant="h6">
      Total: $
      {cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)}
    </Typography>
  </Paper>
);

const ProductListingPage = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(
        (item) => item.id === productToAdd.id
      );
      if (productExists) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} onAdd={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <ShoppingCartOverview cartItems={cart} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductListingPage;