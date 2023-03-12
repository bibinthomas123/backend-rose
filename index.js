const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.headers, req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
//routes
app.use("/api/v1", routes);


//database connection
const port = process.env.PORT || 3000;
mongoose
  .connect(
    "mongodb+srv://admin:admin@blogdata.tkze99t.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
  )
  .then(console.log("database connected"))
  .catch((error) => console.log(error.message));
