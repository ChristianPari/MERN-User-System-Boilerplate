require('dotenv/config');

//PACKAGES
const 
express = require('express'),
app = express(),

//ROUTERS
const 
userRouter = require('./api/routes/userRouter');
//MIDDLEWARES

//ENV CONTANTS
const 
PORT = process.env.PORT || 3000, //Port number for server to listen on, defined in enviorment file
URI = process.env.MONGO; // URI that gives read/write access to database, this need to be stored in an env so that the public can not read/write your database without going through your API     

//MongoDB Utility Function Used To Connect To DB
const mongoConnect = require('./database/mongo-connect');

/* Set order for middleware usage. 
   It is best practice to have all middlewares that run on all routes and all paths to go before specific routes. 
   This is because typically the specific routes will rely on one or more of the middlewares that run on all routes.
*/

//homepage route
app.use('/user', userRouter);


//Connect to Data-Base
mongoConnect(URI)
//Start server listening on port
app.listen(PORT);