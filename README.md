# User System MERN Stack

## How to start working with this template
    1) click on the 'Use this template' button on the 'backend-template' branch
    2) name your new repo and create repo, you now have a copy!
    3) clone your repo into a directory of your choice  
        use the git clone 'github.com/yourUserName/yourRepoName.git
    4) go into the directory of your cloned repo and run the command
        npm i/install
    5) create a .env file and enter in the following keys
        PORT='any port number that isnt taken'
        MONGO='Your mongoDB URI'
### Your backend is complete. Now you are ready to get started working with React!

#### This repo is a learning tool for thoes learning react and need a user system boilerplate
<p>&nbsp<p><p>&nbsp<p><p>&nbsp<p><p>&nbsp<p><p>&nbsp<p><p>&nbsp<p>


Nmp - Node Package Manager

    a. it is the commonly used 'app store' for node applications, made for and by JS developers

    b. it is also a command line utility used to download and install packages (from the web of node devs). any developer can upload packages they've created

    c. code from other devs can be utilized in any NPM project for free and comes in the form of 'packages'

    d. when you install any package it is added to your project dependency list.

    e. when the command npm i (install) is used, all of the projects dependecies (as well as their dependecies, this is recersive is some sense) will be installed and stored in a node_modules folder.


Commands to start a new NPM project in order;

nmp init
        //creates a package.json 
        //which contains all of the METADATA related to your project
        //metadata - is the dna information about your project 
        // metadata is data about data
git init

git add -A vs. git add .

    -A adds all files in all directories of your repo
    . adds the files CURRENT DIRECTORY and you must specify the file name if you want just one file to be added to files that will be in the commit


git status //on branch master
git branch  //* master
git commit //create a inital commit on the master branch

code app.js //our route handling and use of express will be done within our app.js file

 // add script to 'package.json' --->  'start' : 'nodemon app.js' //this will be a command that we can input into the command line to start the server 

 // add code to app.js file;
    1. define the express variable as a const
    2. create an instance of express called 'app'
    3. add a port to listen to "app.listen('portnum');"
    4. add an express method such as app.get() which will require a path and a request and response parameter in a call back function
    5. add a use method if you want to use a callback function when a given route is used

npm i express mongoose nodemon dotenv bcrypt jsonwebtoken morgan 

    express is essential to this project and is the foundation of this API, it handles incoming request and is the base for how responses to the client are made.

    mongoose uses mongodb which is a cloud server data base hosting service. it is simple and eay for me to use when first learning to create my own server

    nodemon is helpful in development and only need to be a dev dependency since its only purpose is to auto restart the server when changes are made in the working directory

    .env files are used in servers so that there is information the public user can not reach/have easy access to. this is where i will be storing things like usernames and passwords for my server database

    bcrypt will be used for password hashing

    jsonwebtoken is used to create JWTs on the backend that will then be store by the client and safely hold personal data, like their user database document _id

    morgan is optional but I find it helpful as it will log all request coming into the server and can be helpful for debuging and knowing that the server is properly recieving incoming request

 // add code to app.js;

    1.mongoose.connect('mongodb+srv:"  PERSONAL LINK " ');
    2. NEXT add a callback function to determin what should happen when the database connects ex. 'log "data base connected" '

mkdir routes //making a folder that will contain all files that each handle a specific route

code user.js //this will have all the code to handle all user related route requests

code home.js //this will give intructions to the server on how to display and setup the homepage

//for both /route files you will need to create an instance of express and an instance of express.Router() saved as the variable router
//this router variable must be exported and then the require method must be used in app.js

//to make it possible for users to create an account, a schema must be set up to determine how a users data will be stored in the database

mkdir models //then inside this directory

code User.js //this file will contain how a users data will be structured in MongoDB, schema just means the structure of data in a particular context

Once the schema is created you can add a POST method route handler inside of /routes/user.js this will handle user registration
For user registration you will need to have backend validation and password encryption for safe DB storage. I will be creating my own backend validation and using bcrypt for password hashing/encryption


