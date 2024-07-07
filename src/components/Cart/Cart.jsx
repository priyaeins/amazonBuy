import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const product = state && state.product;

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <>
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: 4, 
          mb: 4, 
          p: 2, 
          bgcolor: '#f9f9f9', 
          borderRadius: 2 
        }}
      >
        <Typography variant="h4" align='center'>Your Cart</Typography>
        {product ? (
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center' }}>
                <img 
                  src={product.img} 
                  alt={product.name} 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                />
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography>{product.detail}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>${product.price}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="body1">Your cart is empty</Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
