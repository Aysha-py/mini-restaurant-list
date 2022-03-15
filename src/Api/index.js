import axios from 'axios';

const URL ="https://travel-advisor.p.rapidapi.com/restaurants/list"

var options = {

  params: {
    location_id: '293919',
   
  
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'f6e5d97f48msh0061ec0f8bcec65p19f169jsn15557ae0375f'
  }
};


export const getPlacesData = async()=>{      //call this function in the app.js
    try{
        const {data:{data}} = await axios.get (URL,options)
        return(data)
        
    }
    catch{

    }

    
} 
export default getPlacesData