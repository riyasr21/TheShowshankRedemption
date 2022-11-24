import express from "express";
import mysql from "mysql";
import cors from "cors";

// Making the express server
const app = express();

//Allowing localhost to connect
app.use(cors());

//Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mern_db",
});

app.use(express.json());

//Request to the backend using the express server
app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});

app.get("/books", (req, res) => {
  const que = "SELECT * FROM titlesN";
  db.query(que, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/shows/:name/:email/:password",(req,res) =>{
var que="";
que = "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";

  const values = [
    req.params.name,
    req.params.email,
    req.params.password,
  ];

  db.query(que, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
  

});
app.get("/user/:email",(req,res)=>
{
  var que1="";
  const email = req.params.email;
  let s1 = email;
  s1 = s1.replace('@','');
  s1=s1.replace('.','');
  que1="Create table " + s1 + " (Favourite varchar(255))";
  
 
  console.log(s1);
  db.query(que1, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/shows/:email/:password", (req, res) => {
  var que="";
  const values = [
    req.params.email,
    req.params.password,
  ];
  db.query("SELECT `name` from user where `email`= ? and `password` = ? ",[values[0],values[1]],
  (err,result) => {
    if (err) {
      return res.json(err);
    }
    if(result.length>0)
    {
      res.send(result);
    }
    else{
      res.send({message: "Wrong username/password"});
    }
  }
  )
}
);

app.get("/books/:type/:genre/:platform", (req, res) => {
  // const type = req.params.type
  // const genre = req.params.genre
  const platform = req.params.platform
  const values = [
    req.params.type,
    req.params.genre,
    
  ];
  var que="";
  if(platform=='Hotstar')
  {
  que = "SELECT * FROM titlesH where type = ?  and genres1= ? or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ? LIMIT 3";
  } 
  else if (platform == 'Prime') {
  que = "SELECT * FROM titlesP where type = ? and genres1= ?  or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ? limit 3";
  }
  else if(platform=='Netflix')
  {
  que = "select * from titlesN where type = ? and genres1= ? or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ? limit 3";
  }
  db.query(que, [values[0], values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1]],(err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/books/:type/:genre/:platform/:year", (req, res) => {
  // const type = req.params.type
  // const genre = req.params.genre
  const platform = req.params.platform
  const values = [
    req.params.type,
    req.params.genre,
    req.params.year,
    
  ];

  var que="";
  if(platform=='Hotstar')
  {
  que = "SELECT * FROM titlesH where type = ? and release_year > ? and genres1= ? or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ?  LIMIT 100";
  } 
  else if (platform == 'Prime') {
  que = "SELECT * FROM titlesP where type = ? and release_year > ?  and genres1= ?  or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ? limit 100";
  }
  else if(platform=='Netflix')
  {
  que = "select * from titlesN where type = ? and release_year > ?  and genres1= ? or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ?  limit 100";
  }
  db.query(que, [values[0],values[2],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1]],(err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});


app.get("/books/:type/:genre/:platform", (req, res) => {
  // const type = req.params.type
  // const genre = req.params.genre
  const platform = req.params.platform
  const values = [
    req.params.type,
    req.params.genre,
    
    
  ];

  var que="";
  if(platform=='Hotstar')
  {
  que = "SELECT * FROM titlesH where type = ? and genres1= ? or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ?  LIMIT 10";
  } 
  else if (platform == 'Prime') {
  que = "SELECT * FROM titlesP where type = ? and genres1= ?  or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ? limit 10";
  }
  else if(platform=='Netflix')
  {
  que = "select * from titlesN where type = ? and genres1= ? or genres2= ? or genres3= ? or genres4= ? or genres5= ? or genres6= ? or genres7= ? or genres8= ? or genres9= ? or genres10= ?  limit 10";
  }
  db.query(que, [values[0],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1],values[1]],(err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/shows/:type/:platform/:actor", (req, res) => {
  // const type = req.params.type
  // const genre = req.params.genre
  const platform = req.params.platform
  const values = [
    req.params.type,
    req.params.actor,
    
  ];

  var que="";
  if(platform=='Hotstar')
  {
  que = "SELECT distinct title,creditsH.name FROM titlesH join creditsH on titlesH.id=creditsH.id where creditsH.name = ?  LIMIT 5";
  } 
  else if (platform == 'Prime') {
  que = "SELECT distinct title,creditsP.name FROM titlesP join creditsP on titlesP.id=creditsP.id where creditsP.name = ? limit 5";
  }
  else if(platform=='Netflix')
  {
  que = "select distinct title,creditsN.name from titlesN join creditsN on titlesN.id=creditsN.id where creditsN.name = ? limit 5";
  }
  db.query(que, [values[1],values[0]],(err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});


app.post("/books", (req, res) => {
  const que =
    "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(que, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been added");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE idbooks = ?";

  db.query(query, [bookId], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been deleted");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE idbooks = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
