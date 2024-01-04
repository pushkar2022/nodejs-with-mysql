
var router = require("express").Router();
const sql = require("../database/db.js");

router.post("/add",(req,res)=>{
    const {name,clas,roll} = req.body

    let query = `insert into student(name,class,roll) values('${name}','${clas}','${roll}')`;
    sql.query(query, (err, result) => {
        if (err) {
          console.log("error: ", err);
        //   result(null, err);

        }
    
        console.log("tutorials: ", result);
        res.status(200).send({data:result})
      });


});

// Retrieve all Tutorials
router.get("/", async(req,res)=>{
    let query = "SELECT * FROM student";
    sql.query(query, (err, result) => {
        if (err) {
          console.log("error: ", err);
        //   result(null, err);

        }
    
        console.log("tutorials: ", result);
        res.status(200).send({data:result})
      });
});

router.put("/:Id", async(req,res)=>{
    const {Id}=req.params
  const {name,clas,role} = req.body
  let query =`update student SET name='${name}',class ='${clas}', roll ='${role}' where id = '${Id}'`;
  sql.query(query, (err, result) => {
      if (err) {
        console.log("error: ", err);
      //   result(null, err);

      }
  
      console.log("tutorials: ", result);
      res.status(200).send({data:result})
    });
});

router.delete("/:Id", async(req,res)=>{
    const {Id}=req.params;
    let query =`delete from student where id='${Id}'`;
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