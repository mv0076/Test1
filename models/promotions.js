const mongoose = require('mongoose')

const promoschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        minlength:10,
        required:true
    }
}
 ,{
     timestamps:true
})

const Promo = mongoose.model('Promo',promoschema)

module.exports = Promo;
