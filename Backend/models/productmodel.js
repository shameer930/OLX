const mongoose = require('mongoose');

// Create a schema for your listin
const dataSchema = new mongoose.Schema({
    id: { type: String, default: "" },
    Category: { type: String, default: "" },
    price: { type: String, default: "" },
    location: { type: String, default: "" },
    time: { type: String, default: "" },
    modelinfo: { type: String, default: "" },
    Make: { type: String, default: "" },
    Year: { type: String, default: "" },
    Origin: { type: String, default: "" },
    condition: { type: String, default: "" },
    Registration_city: { type: String, default: "" },
    Engine_capacity: { type: String, default: "" },
    Model: { type: String, default: "" },
    Ignite_type: { type: String, default: "" },
    Engine_type: { type: String, default: "" },
    Type: { type: String, default: "" },
    KM_driven: { type: String, default: "" },
    Fuel: { type: String, default: "" },
    Car_documents: { type: String, default: "" },
    Transmission: { type: String, default: "" },
    bedrooms: { type: String, default: "" },
    areaunit: { type: String, default: "" },
    bathroom: { type: String, default: "" },
    furnished: { type: String, default: "" },
    area: { type: String, default: "" },
    brand: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    image1: { type: String, default: "" },
    image2: { type: String, default: "" },
    image3: { type: String, default: "" },
    image4: { type: String, default: "" },
    image5: { type: String, default: "" },
    Adid: { type: Number, default: "" },
    idname: { type: String, default: "" },
    membership: { type: String, default: "" }
});

// Create a model from the schema
const Data = mongoose.model('Data', dataSchema);

module.exports = Data
// const mongoose = require('mongoose');

// // Create a schema for your listing
// const dataSchema = new mongoose.Schema({
//     id:{type:String,default:""},
//     price: { type: String, default: "" },
//     location: { type: String, default: "" },
//     time: { type: String, default: "" },
//     modelinfo: { type: String, default: "" },
//     Make: { type: String, default: "" },
//     Year: { type: String, default: "" },
//     Origin: { type: String, default: "" },
//     condition: { type: String, default: "" },
//     Registration_city: { type: String, default: "" },
//     Engine_capacity: { type: String, default: "" },
//     Model: { type: String, default: "" },
//     Ignite_type: { type: String, default: "" },
//     Engine_type: { type: String, default: "" },
//     Type: { type: String, default: "" },
//     KM_driven: { type: String, default: "" },
//     Fuel: { type: String, default: "" },
//     Car_documents: { type: String, default: "" },
//     Transmission: { type: String, default: "" },
//     bedrooms: { type: String, default: "" },
//     areaunit: { type: String, default: "" },
//     bathroom: { type: String, default: "" },
//     furnished: { type: String, default: "" },
//     area: { type: String, default: "" },
//     brand: { type: String, default: "" },
//     description: { type: String, default: "" },
//     image: { type: String, default: "" },
//     image1: { type: String, default: "" },
//     image2: { type: String, default: "" },
//     image3: { type: String, default: "" },
//     image4: { type: String, default: "" },
//     image5: { type: String, default: "" },
//     Adid: { type: Number, default: "" },
//     idname: { type: String, default: "" },
//     membership: { type: String, default: "" }
// });

// // Create a model from the schema
// const Data = mongoose.model('Data', dataSchema);

// module.exports = Data;
