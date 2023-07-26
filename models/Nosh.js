import {Schema, model} from mongoose;
// this would be considered the post model
//FIELD LIST: postContent, postMedia, location, truck, author, createdAt, likes, comments
const noshSchema = new Schema ({
    content: {
        type: String,
        maxLength: 200,
    },
    media: {
        data: Buffer,
        contentType: String,
    //have to use Multer on the data entry https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
    },
    location: {
        type:String
    },
    truck: {
        type: Schema.Types.ObjectId,
        ref: "FoodTruck"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type:Date,
        require:true
    },
    likes: {
        type: Schema.Types.ObjectId,
        ref: "Like"
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

const Nosh = model("Nosh", noshSchema);
module.exports = Nosh