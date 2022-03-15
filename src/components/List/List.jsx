import React,{useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from "./styles"
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({places}) => {
  const classes = useStyles()
  

  return (
    <div className={classes.container}>
      <Typography variant ="h3">Restaurants, Hotels and Attractions around you</Typography>
      {/* <FormControl className={classes.FormControl}>
        <InputLabel >Type: </InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="Restaurant">Restaurants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Attractions</MenuItem>
             
           </Select>

      </FormControl>

      <FormControl className={classes.FormControl}>
        <InputLabel >Ratings: </InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value="poor">0.0 - 2.0</MenuItem>
          <MenuItem value="fair">2.0 - 3.5</MenuItem>
          <MenuItem value="good">3.5 - 5.0</MenuItem>
             
           </Select>

      </FormControl> */}

      <Grid container spacing = {4} className={classes.list }>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid> 
        ))}
      
      
      </Grid>
    </div>
  )
}

export default List