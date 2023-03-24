import { Typography,Button } from '@mui/material'
import React, { useState} from 'react'

const Statebasic = () => {
    var [fname,setfname]=useState('')

    const ChangeName =() => {
        setfname("tiya")
    }
    return (
        <div>
            <Typography mt={4}>welcome {fname}</Typography>
            <br></br>
            <Button variant='contained' onClick={ChangeName}>change</Button>
        </div>
    )
}

export default Statebasic