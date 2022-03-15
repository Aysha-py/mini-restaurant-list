import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react'
import{paper, typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from "./styles"

const Map=()=> {
  const classes =useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates = {lat:0, lng:0}
  
  return ( 
    <div className={classes.mapContainer}>
      <GoogleMapReact

        bootstrapURLKeys={{key:'AIzaSyAkwPS_T9TPUUvZPHSByPBFhQ2G3FvPGS0'}}
        defaultCenter = {coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}

      ></GoogleMapReact> 
      
    </div>
  )
}

export default Map