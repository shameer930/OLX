const datamodel = require('./models/productmodel');
const All_data = require('./models/data');
// Function to insert data into the database
async function insertData() {
    try {
      await datamodel.insertMany(All_data);
      console.log('Data inserted into the database successfully');
    } catch (error) {
      console.error('Error inserting data into the database:', error);
  }
}
module.exports=insertData