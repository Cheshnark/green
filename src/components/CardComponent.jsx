import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 const CardComponent = (blog) => {
  return (
    <Card sx={{ maxWidth: "75%", margin:"1rem auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog.blog.url}
          alt="green iguana"
        />
        <CardContent>
          <h2>{blog.blog.title}</h2>
          <Typography variant="body2" color="text.secondary">
            {blog.blog.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;