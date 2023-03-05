const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes
app.use("/api/v1", routes);

//database connection
const port = process.env.PORT || 6000;
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
