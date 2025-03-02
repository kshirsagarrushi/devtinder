const express = require("express");
const app = express();
const cors=require('cors');
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const { errorHandler } = require("./middlewares/errorHandler");
const dotenv = require("dotenv");
// const {adminAuth} = require("./src/middlewares/auth");
// const {errorHandler} = require("./src/middlewares/errorHandler");

//it's not compulsory to write this below line you can use it directly in the route.
// app.use("/admin", adminAuth);
app.use(cors({
  origin:"http://localhost:5173",
  methods:['GET','POST','PUT','DELETE'],
}))
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("MongodDB connected successfully");
})
.catch((err)=>{
  console.log("error in connecting to MongoDB",err);
})


app.use('/api/auth',authRoutes);
app.use('/',errorHandler);

app.listen(8080, () => {
  console.log("server is running on port 3000..");
});




// app.get("/about", (req, res) => {
//   res.send("welcome to about page");
// });
// app.post("/signin", (req, res) => {
//   console.log(
//     "req",
//     req.body,
//     "req.query",
//     req.query,
//     "req.params",
//     req.params,
//     "req.headers",
//     req.headers
//   );
//   res.send("welcome to signin page");
// });
// //dyanamic route
// app.get("/user/:id", (req, res) => {
//   console.log("request params", req.params.id);
// });
// //query params
// app.get("/user?userId=123", (req, res) => {
//   console.log("request query", req.query.userId);
// });

// //below route will give error of Cannot set headers after they are sent to the client because we have already sending response and after doing it we are calling next function
// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("first response");
//     // res.send("welcome to first route handler");
//     next();
//   },

//   (req, res, next) => {
//     console.log("second response");
//     next();
//     res.send("welcome to second route handler");
//   },
//   (req, res) => {
//     res.send("welcom to third route handler");
//   }
// );

// //get all data of admin but before that authenticate the user

// app.get(
//     "/admin/getAllData",
// //     (req, res, next) => {
// //     const token = "xyz";
// //     const isAdminAuthroized = token === "xyz";
// //     if (isAdminAuthroized) {
// //         next();
// //     } else {
// //         res.send("unauthorized user");
// //     }
// // },
// (req, res, next) => {
//     res.send("all data sent");
// }
// );

// //middleware for all /admin routes
// app.delete('/admin/deleteData',adminAuth,(req,res)=>{
//     res.send("data deleted successFully");
// })
// //check error handler
// app.get("/randomroute",(req,res)=>{
//     throw new Error("something went wrong! try again");
// })
// //error handling middleware
// app.use('/',errorHandler);

