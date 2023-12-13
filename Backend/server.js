const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose model definition (replace 'YourModel' and the schema accordingly)
const datamodel = mongoose.model('Data', {
  _id: mongoose.Schema.Types.ObjectId,
  // Other fields in your schema...
});

// Example route with Express.js
app.get('/user/data/:id', async (req, res) => {
  try {
    const _id = req.params.id;

    // Server-side validation to ensure _id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
    }

    // Query the database using Mongoose
    const data = await datamodel.findOne({ _id });

    // Check if data was found
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }

    // Respond with the data
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
