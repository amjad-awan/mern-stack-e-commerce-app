const express =require("express");
const colors =require("colors") ;
const dotenv= require("dotenv") ;
const morgan =require("morgan") ;
const connectDB =require("./config/db.js") ;
const authRoute =require("./routes/authRoute.js") ;
const categoryRoutes= require("./routes/categoryRoutes.js") ;
const productRoutes =require( "./routes/productRoutes.js");
const bodyparser =require("body-parser");
const cors= require("cors") ;
const path= require("path") ;
// import { fileURLToPath } from "url";

const app = express();

//config env

dotenv.config();

//config databse
connectDB();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const PORT = process.env.PORT || 5000;

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);



// static files 
app.use(express.static(path.join(__dirname, "./client/build")));

// rest api
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

app.get("/", (req, res) => {
  res.send({
    message:"this is e-commerce website"
  });
});

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`.yellow);
});
