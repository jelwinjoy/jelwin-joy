import { Typography,Button } from '@mui/material'
import React,{useState} from 'react'

const Statetask = () => {
    var[pagename,setPagename] = useState()


    const changeName1 =() => {
        setPagename("Homepage")
    }
    const changeName2 =() => {
        setPagename("Gallerypage")
    }
    const changeName3 =() => {
        setPagename("contactpage")
    }
  return (
    <div>
      <br></br>
      <Button variant='contained'onClick={changeName1}>Home Page</Button>
      <Button variant='contained'onClick={changeName2}>Gallery Page</Button>
      <Button variant='contained'onClick={changeName3}>Contact Page</Button>
      <Typography>welcome to{pagename}</Typography>
    </div>
  )
}

export default Statetask
