import { UserModels } from "../model/user.model.js";
import mongoose from "mongoose";
export const publishProduct = async function(req, res){
let body = req.body;
if (!body.productName
        ||!body.productPrice||
        !body.currencyCode ||
        !body.numberOfSale ||
        !body.Rating 
        ) {
    res.status(400).send({message:'Required field missing'})
    return;
} // first if end 

let result = await UserModels.create({

    productName: body.productName,
    productPrice: body.productPrice,
    currencyCode: body.currencyCode,
    numberOfSale: body.numberOfSale,
    Rating: body.Rating,
    isFreeShipping: body.isFreeShipping,
    
}) .catch(e => {
    console.log("error in db: ", e);
    res.status(500).send({ message: "db error in saving product" });
})

console.log("result: ", result);
res.send({ message: "product is added in database" });
}



export const AllProduct =async function (req, res){
let result =  await UserModels.find({}).exec().catch(e =>{
    console.log('error in database line 40',e);
})
res.send({message:'success',
data: result})
}

export const deleteProduct = async function(req , res ){
    let _id =req.params.id;
    try{ await UserModels.findByIdAndDelete(_id)
    res.send(
        {message:'deleted'}
    )} catch(err){
        console.log('data base error', err);
        res.status(500).send({message: 'data base error '})
    }
}



export const editAllProduct = async function (req, res){
let result = await UserModels.findOne({_id: req.params.id})
.exec()
.catch((e)=>{
    console.log('error in getting product', e);
    res.status(500).send({ message: "error in getting all products" });

    return;
})
if (result) {
    res.send({message:'resulst',
data:result})
}

}

export const  confirmmpleteEdit = async function (req, res){
    let _id =req.params.id;
    let body = req.body;
    await UserModels.findByIdAndUpdate(_id, body).then((res)=>{
        console.log('update successfull', res);
        
    }) .catch((e)=>{
        console.log('data base error ', e);
    })
}