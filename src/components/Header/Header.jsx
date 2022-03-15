import React,{useEffect,useState} from 'react'
import  {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'



const Header = ({places,setPlaces})=> {
  
 console.log(places)
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const searchData = places.filter(item => item?.name?.toLowerCase().includes(searchInput))
    setPlaces(searchData)
  }, [searchInput])


  const classes = useStyles()
  return (
      <div>
      <AppBar position="static">
        <Toolbar className ={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisory
          </Typography>
          
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore New Places
            </Typography>
        
              <div className={classes.search}>
                <div className ={ classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder='Search a city...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                  classes={{root: classes.inputRoot , input:classes.inputInput}}/> 
              
              </div>

            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar> 
      </div>
    
  )
}

export default Header