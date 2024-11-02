// const mongoose = require('mongoose');
// const app = require('./app');
// const config = require('./config/config.js');
// const logger = require('./config/logger.js');

// let server;



// const startServer = async () => {
//   try {
//     await ConnectDb();
//     server = app.listen(config.port, () => {
//       logger.info(`Listening to port ${config.port}`);
//     });
//   } catch (error) {
//     logger.error(error);
//     process.exit(1);
//   }
// };

// startServer();
// const exitHandler = () => {
//   if (server) {
//     server.close(() => {
//       logger.info('Server closed');
//       process.exit(1);
//     });
//   } else {
//     process.exit(1);
//   }
// };

// const unexpectedErrorHandler = (error) => {
//   logger.error(error);
//   exitHandler();
// };

// process.on('uncaughtException', unexpectedErrorHandler);
// process.on('unhandledRejection', unexpectedErrorHandler);

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM received');
//   if (server) {
//     server.close();
//   }
// });


const express = require('express');
const dotenv = require('dotenv');
const path  =require('path');

dotenv.config();

const app = express();

app.use(express.json());  


const connectDB =require('./config/db.js');
connectDB();

// Serve images
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Routes
const ProductRoutes = require('./routes/v1/product.route'); 

app.use('/api/v1/', ProductRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
