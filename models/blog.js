const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

//we make our schema which defines the structure
const blogSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, { timestamps: true });


//then we create a model based on that schema and we define the name of this model
const Blog = mongoose.model('Blog', blogSchema);

//export the model so that we can use it elsewhere in the project
module.exports = Blog;


