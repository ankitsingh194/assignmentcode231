import React, { useState } from 'react'
import './index.css'
import { getdata } from '../component/api'



const Indexpage = () => {
    const [dataid , Setdataid] = useState('');
    const [data , setdata] = useState([])
    const key = dataid

   

   
    const handlesubmit = (e) =>{
        e.preventDefault()
        getdata({key , setdata})


    }

  return (
    <div>
        <div>
            <h2 className='title'>Fetch Config</h2>
            
          <form onSubmit={handlesubmit}>
            <label>Config To Load (configId) :</label>
            <input className='wrapper-h' type='text' name='dataid' value={dataid} placeholder='id'  onChange={(e)=> Setdataid(e.target.value)} />

            <div>
            <button type='submit'>Submit</button>
           
            </div>



           

            
            </form>
            <div style={{marginTop:'30px'}}>
                {data}
            </div>
            
        </div>
    </div>
  )
}

export default Indexpage;