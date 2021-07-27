const mongoose = require('mongoose');

function database() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.URL_DATABASE, options);
  
  const { connection } = mongoose;
  
  connection.once('open', () => console.log('Connection established successfully'));
  connection.on('error', (error) => console.log('Something went wrong!'));

  return connection;
}

module.exports = database;