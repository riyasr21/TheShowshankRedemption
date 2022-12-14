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

app.get("/favourites/:email", (req, res) => {
  const email = req.params.email
  let s1 = email;
  s1 = s1.replace('@','');
  s1=s1.replaceAll('.','');
  const que = "SELECT * FROM " + s1 ;
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
  s1=s1.replaceAll('.','');
  que1="Create table " + s1 + " (Favourite varchar(255) primary key, title varchar(255), release_year varchar(255), runtime int)";
  
 
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

app.get("/fav/:email/:id",(req,res) => 
{
 const id = req.params.id
 const email = req.params.email
 let s1 = email;
 s1 = s1.replace('@','');
 s1=s1.replaceAll('.','');
 const name= "resultview"+ s1 + id;
//  name=name.replace("'","");
 var que="";
 que="create view " + name +" as select title,runtime,release_year from TitlesN where id= ? union select title,runtime,release_year from TitlesP where id= ? union select title,runtime,release_year from TitlesH where id= ?";
 db.query(que, [id,id,id],(err, data) => {
  if (err) {
    return res.json(err);
  }
  return res.json(data);
});
});
app.get("/favt/:email",(req,res) =>
{
 const email = req.params.email;
 let s1 = email;
 s1 = s1.replace('@','');
 s1=s1.replaceAll('.','');
 var que="";
 que="create trigger " + s1 + "_t Before Insert on " + s1 + " for each row begin declare got_title varchar(255); declare got_runtime int; declare got_release_year varchar(255); select title,runtime,release_year from TitlesN where id = NEW.Favourite union select title,runtime,release_year from TitlesP where id = NEW.Favourite union select title,runtime,release_year from TitlesH where id = NEW.Favourite into got_title, got_runtime, got_release_year; SET NEW.title = got_title, NEW.runtime = got_runtime, NEW.release_year = got_release_year; END;"
 db.query(que, [],(err, data) => {
  if (err) {
    return res.json(err);
  }
  return res.json(data);
});
}
);
app.get("/favs/:email/:id",(req,res) => 
{
 const id = req.params.id
 const email = req.params.email
 let s1 = email;
 s1 = s1.replace('@','');
 s1=s1.replaceAll('.','');
 const name= "resultview"+ s1 + id;
//  name=name.replace("'","");
 var que="";
 que="select * from " + name;
 db.query(que, [id,id,id],(err, data) => {
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
  que = "SELECT distinct title,creditsH.name, release_year, runtime FROM titlesH join creditsH on titlesH.id=creditsH.id where creditsH.name = ?  LIMIT 5";
  } 
  else if (platform == 'Prime') {
  que = "SELECT distinct title,creditsP.name, release_year, runtime FROM titlesP join creditsP on titlesP.id=creditsP.id where creditsP.name = ? limit 5";
  }
  else if(platform=='Netflix')
  {
  que = "select distinct title,creditsN.name , release_year, runtime from titlesN join creditsN on titlesN.id=creditsN.id where creditsN.name = ? limit 5";
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

app.post("/fav/:email/:id", (req, res) => {
  const movieId = req.params.id;
  const email = req.params.email;
  let s1 = email;
  s1 = s1.replace('@','');
  s1=s1.replaceAll('.','');
  
  const query = "INSERT INTO " + s1 + "(`Favourite`) VALUES (?)";
  db.query(query, [movieId], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Fav has been added");
  });

})

app.delete("/delete/fav/:email/:id", (req, res) => {
  const movieId = req.params.id;
  const email = req.params.email;
  let s1 = email;
  s1 = s1.replace('@','');
  s1=s1.replaceAll('.','');
  const query = "DELETE FROM " + s1 + " WHERE Favourite = ?";

  db.query(query, [movieId], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("This fav has been deleted");
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
