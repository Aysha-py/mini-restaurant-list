import React,{useEffect,useState} from 'react'
import Header from './components/Header/Header'
import {CssBaseline,Grid} from '@material-ui/core'
import Map from './components/Map/Map'
import List from './components/List/List'
import {getPlacesData} from './Api';


function App() { 

  const [places, setPlaces]= useState([])



  useEffect(()=>{
    getPlacesData()
      .then((data)=>{
        setPlaces(data)
        
      console.log(data)
      })
     
  },[])

  return (
    <>
      <div className="App">
        <Header places={places} setPlaces={setPlaces}/>
        <CssBaseline />
        
          <Grid container spacing={3}>
            <Grid item xs ={12} md={5} >
              <item><List places={places}/></item>
            </Grid>

            <Grid item xs ={12} md={7} >
              <item><Map
              
              /></item>
            </Grid>
          </Grid>
      </div>

    </>
  );
}

export default App;
