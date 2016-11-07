const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const resourceSchema = new Schema({
     name:         { type: String, required: true },
     description:  { type: String },
     imgLink:      { type: String },
     price:        { type: Number, required:true },
     warranty:      { type: Boolean, required: false}

})



module.exports = {
   /*
    * NOTE: you would ideally change the export-value and the model-name
    */
  Resource: createModel('Resource', resourceSchema)
}
