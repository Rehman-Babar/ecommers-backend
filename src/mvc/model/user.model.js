    import mongoose,{Schema} from "mongoose";

    const userSchema = new Schema({
        productName:String,
        productPrice:Number,
        currencyCode:String,
        numberOfSale:Number,
        Rating:Number,
        isFreeShipping:Boolean,
        // description:String,
        createdOn:{type:Date, default:Date.now}
    });

    export  const UserModels = mongoose.model('UserModels', userSchema);