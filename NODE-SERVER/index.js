const express = require("express");
const cors = require ('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DB= 'mongodb://127.0.0.1:27017/test';
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log("db connected")
}

const userSchema = new mongoose.Schema({
    username: String,
    password:String
  });

  const User = mongoose.model('User', userSchema);

const server = express();
const port = 3080;

server.use(cors());
server.use(bodyParser.json());


server.post("/",async (req, res) => {
    let user = new User();
    user.username = req.body.mail;
    user.password = req.body.password;
    const doc = await user.save();
    console.log(doc);
    res.json(doc);
});

server.get('/', async (req, res) => {
const docs= await User.find({});
res.json(docs);
})


server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})