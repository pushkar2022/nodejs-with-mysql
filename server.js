const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 


app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});



app.use('/auth', require('./Routes/userlogin.js'));
app.use('/user', require('./Routes/student.js'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
