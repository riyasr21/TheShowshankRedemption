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
