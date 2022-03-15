import React from 'react'
import useStyles from "./styles"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import {Card, CardMedia, Typography, CardContent,Chip, CardHeader,Box,Button,CardActions} from '@material-ui/core'
 
const PlaceDetails= ({place})=> {

  const classes=useStyles()
  return (
    
    <div>
      <Card elevation={30}>
          <CardMedia style ={{ height:300}}  
          component="img"
          images = {place.photo ? place?.photo?.images?.small?.url : "No image found"}
          alt={place.name} />
          <CardHeader title ={place?.name} />

        <CardContent>
          <Typography gutterBottom  variant="body2">
            {place.description}
          </Typography>
          <Box display ="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom  variant="s ubtitle1">{place.price}</Typography>
          </Box>
          {place?.cuisine?.map(({name},i)=>(
            <Chip key={name} size="small" label={name} className= {classes.chip} />
          ))
          }
          {place?.address &&(
            <Typography gutterButton variant="subtitle2" color="textsecondary" className={classes.subtitle}>
              <LocationOnIcon/>  {place?.address}
            </Typography> 
          )
          }
             {place?.address &&(
            <Typography gutterb   utton variant="subtitle2" color="textsecondary" className={classes.subtitle}>
              <PhoneIcon/>  {place?.phone}
            </Typography> 
          )
          }
        </CardContent> 

        <CardActions>
          <Button size="small" color="primary" onClick={()=>window.open(place?.web_url,'_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={()=>window.open(place?.website,'_blank')}>
            Website
          </Button>
        </CardActions>
      </Card>  
     
    </div>
  )
 
}

export default PlaceDetails