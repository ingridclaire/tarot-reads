import express from "express";
import cors from "cors";

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Tarot Reads API!!!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
