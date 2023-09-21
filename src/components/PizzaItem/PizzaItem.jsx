// import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PizzaCard({pizza}) {
  return (
    <Card className="pizzaCard" sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {pizza.description}
        </Typography>
        <Typography variant="body2">
          {pizza.price}
          {/* <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Add/Remove</Button>
      </CardActions>
    </Card>
  );
}