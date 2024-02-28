const User = require('../Models/UserModel')

module.exports ={
    //function to create save data
    createUserRemark: async(req, res) => {
        console.log(req.body)
        try {
            const body = await User.create(req.body)
            res.status(200).json("Remark created successfully")
            
        } catch (error) {
            res.status(500).json("failed to create the Remark")
            
        }

    },
    //function to get All data
    getAllRemarks:async(req,res)=>{
        const allRemark = await User.find()

        try {
            res.status(200).json(allRemark)
            
        } catch (error) {
            res.status(500).json({message:'Error failed to get the Remarks'})
            
        }
    },
   // function to get Single Remark data using id
    getSingleRemark:async(req,res)=> {
        console.log(req.params.id)
        try {
            const SingleRemark = await User.findById(req.params.id)

            res.status(200).json(SingleRemark);
            
        } catch (error) {
            res.status(500).json({message:'Error give id is not correct'})
            
        }
        
    },
    //function to update data using id
    UpdateRemark:async(req,res)=>{
        console.log(req.params.id)
        console.log(req.body)
        try {
            const SingleRemark = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});

            if(!SingleRemark){
                res.status(500).json({message:'Data not found'});

            }
            res.status(200).json({message:'Succcess',data: SingleRemark});

           
            
        } catch (error) {
            res.status(500).json({message:' Not Succcess'});
            
        }
    }



}