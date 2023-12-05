import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiAreaCard({props}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdVTZpX9VTk9ZsiytZxseRvpuMXrUr9shQg&usqp=CAU"
          alt="Suga BTS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Suga 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Min Yoon-gi, known professionally by his stage names Suga and Agust D, is a South Korean rapper, songwriter and record producer. Under Big Hit Entertainment, he debuted as a member of the South Korean boy band BTS in 2013. Wikipedia

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}