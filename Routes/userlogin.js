
var router = require("express").Router();
const sql = require("../database/db.js");
// Create 
router.post("/resgiter",(req,res)=>{
    const {userName, password} = req.body

    let query = `insert into users(userName,password) values('${userName}','${password}')`;
    sql.query(query, (err, result) => {
        if (err) {
          console.log("error: ", err);
        

        }
    
        console.log("tutorials: ", result);
        res.status(200).send({data:result})
      });


});

// Retrieve all Tutorials
router.get("/", async(req,res)=>{
    let query = "SELECT * FROM users";
    sql.query(query, (err, result) => {
        if (err) {
          console.log("error: ", err);
        //   result(null, err);

        }
    
        console.log("tutorials: ", result);
        res.status(200).send({data:result})
      });
});

router.post("/login", async(req,res)=>{
  const {userName, password} = req.body
  let query =`SELECT * FROM users where userName='${userName}' and password='${password}'`;
  sql.query(query, (err, result) => {
      if (err) {
        console.log("error: ", err);
      //   result(null, err);

      }
  
      console.log("tutorials: ", result);
      res.status(200).send({data:result})
    });
});


module.exports = router;