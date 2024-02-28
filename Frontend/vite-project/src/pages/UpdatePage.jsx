import React, { useEffect, useState } from 'react'
import { update } from '../component/api'

const UpdatePage = () => {
    const [data , setdata] = useState([])
    const [formdata , setfromdata] = useState({
        id:'',
        Remark:'',
    })
   // const [id , setid ] = useState('')

    
    console.log("hiiiiii",formdata.Remark)

    const handleInput = (e) =>{
        setfromdata({...formdata, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        update({ setdata , formdata})
    }

 
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <div> 
            <label>Config To Update (configId) :</label>
            <input type='text' placeholder='' name='id' value={formdata.id} onChange={handleInput} />
        </div>
        <div style={{marginTop:'20px'}}>
            <label >Remark</label>
            <input type='text' style={{padding:'20px'}} placeholder='' name='Remark' value={formdata.Remark} onChange={handleInput} />
        </div>
        <button type='submit'>Submit</button>
        </form>

        <div>
            <h2>{data}</h2>
        </div>
    </div>
  )
}

export default UpdatePage