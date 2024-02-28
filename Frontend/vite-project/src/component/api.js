import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3000/api/configurations'

//function to get data 
export const getdata = async({key , setdata}) => { 
    const id = key 
    console.log('id',id)
    
    try {
        const response = await axios.get(`/getSingle/${id}`)
        console.log('data',response.data.Remark)
        setdata(response.data.Remark)
        return response
    } catch (error) {
        console.log('no data')
        
    }
}
// function to update database
export const update = async({ setdata , formdata}) =>{
    const data3 = formdata.Remark
    
    try {
        const Remark = [
                [data3]
            ]
        
        const response = await axios.put(`/Update/${formdata.id}`,{
            Remark,
            

        })
        setdata(response.data.message)
        return response.data.message
        
    } catch (error) {
        console.log('Error will fetching data')
        
    }
}


   

