const login=(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    User.findAll({where:{ email}}).then(user=>{
        if(user.length>0){
            if(user[0].password===password){
                res.status(200).json({success:true,message:"user Loged In"})
            }else{
                return res.status(400).json({success:false,message:'Wrong Password'})
            }
        }else{
            return res.status(404).json({success:false,message:'User not exists'})
        }
    }).catch(err=>{
        res.status(500).json({message:err,success:false})
    })
}
