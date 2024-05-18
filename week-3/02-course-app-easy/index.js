const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post('/admin/signup', (req, res) => {
 
  // logic to sign up admin
  const check = ADMINS.find(iterator => iterator.username === req.body.username);
  if(check){
    res.status(403).json({ message : "Admin already exists"});
  }
  else{
    ADMINS.push(req.body);
    res.json({message : "Admin created successfully"});
  }
});

let adminAuthenticate = (req,res,next) => {
  const {username, password} = req.headers;
  let admin = ADMINS.find(i => i.username === username && i.password === password);
  if(admin){
    next();
  }
  else{
    res.status(403).json({message : "Admin authentication failed"});
  }
}


app.post('/admin/login', adminAuthenticate, (req, res) => {
  // logic to log in admin
  res.json({message : "Logged in successfully"});
});

app.post('/admin/courses', adminAuthenticate, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({message : "Course created successfully", courseId : course.id});
});

app.put('/admin/courses/:courseId', adminAuthenticate, (req, res) => {
  // logic to edit a course
  let courseId = parseInt(req.params.courseId);
  let course = COURSES.find(c => c.id === courseId);
  if(course){
    Object.assign(course,req.body);
    res.json({message : "Course updated successfully"});
  }
  else{
    res.status(404).json({message : "Course not found"});
  }

});

app.get('/admin/courses', adminAuthenticate, (req, res) => {
  // logic to get all courses
  res.json({courses : COURSES});

  


});

// User routes



let userAuthenticate = (req,res,next) => {
  const {username, password} = req.headers;
  let user = USERS.find(i => i.username === username && i.password === password);
  if(user){
    req.user = user; 
    next();
  }
  else{
    res.status(403).json({message : "User authentication failed"});
  }
}

app.post('/users/signup', (req, res) => {
  // logic to sign up user
  let userGet = USERS.find(i => i.username === req.body.username )
  if(userGet){
    res.status(403).json({message : "User already dexists"});
  }
  else{
    let user = {
      username : req.body.username,
      password : req.body.password,
      purchasedCourses : []  
    }
    USERS.push(user);
    res.json({message : "User created successfully"});
  }
});

app.post('/users/login', userAuthenticate, (req, res) => {
  // logic to log in user
  res.json({message : "Logged in successfully"});
});

app.get('/users/courses', userAuthenticate,(req, res) => {
  // logic to list all courses
  res.json({courses : COURSES.filter(c => c.published)});
  

});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
  let courseId = parseInt(req.params.courseId);
  let course = COURSES.find(c => c.id === courseId);
  
  if(course){
    req.user.purchasedCourses.push(course);
    res.json({message : "Course purchased successfully"});
  }


});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
  res.json({purchasedCourses : req.user.purchasedCourses});
  

});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
