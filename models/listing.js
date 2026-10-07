const mongoose = require("mongoose");
const { count } = require("node:console");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    } ,
    description: String,
    image: {
      type:String,
      default:"https://media.istockphoto.com/id/1490668215/photo/modern-luxury-villa-with-private-pool.jpg?s=1024x1024&w=is&k=20&c=_LlZkfGs4sMp1KsY4zsDy6o2V1lQpT3zjUcL3tYMAJk=",
      set: (v) => v === "" ? "https://media.istockphoto.com/id/1490668215/photo/modern-luxury-villa-with-private-pool.jpg?s=1024x1024&w=is&k=20&c=_LlZkfGs4sMp1KsY4zsDy6o2V1lQpT3zjUcL3tYMAJk=" : v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[ {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ]
   })

const Listing = mongoose.model("Listing", listingSchema);
module.exports =Listing;