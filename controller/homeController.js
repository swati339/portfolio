import UserModel from "../model/userModel.js";


const homeController = async(req, res)=>{
    try{
   
        res.render("index")
    }catch(error){
        console.log(error.message)
    }


 
}

//user contact controller
 
const contactUserController = async(req, res)=> {
    try{
        const data =  await   UserModel({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message, 
         })
         if(data){
          await data.save()
          console.log("User saved successfully")  
         }
res.render('index')
    } catch (error){
       console.log(error.message) 
    }
}

export {homeController, contactUserController}