import { Typography,Button } from '@mui/material'
import React,{useState} from 'react'

const Counter=()=>{
    var[num,setNum]=useState(0)

    var increament=()=>{
        setNum(num+1)
    }
    var decreament=()=>{
        setNum(num-1)
    }
  return (
    <div>
      <Typography>{num}</Typography>
    <Button onClick={increament}>Increament</Button>
    <Button onClick={decreament}>Decreament</Button>
    </div>
  )
}

export default Counter
