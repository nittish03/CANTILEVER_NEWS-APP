const express = require("express");
const app = express();
const cors = require ('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(cors());
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

const port = 3080;

app.use(bodyParser.json());


app.post("/",async (req, res) => {
    let user = new User();
    user.username = req.body.mail;
    user.password = req.body.password;
    const doc = await user.save();
    console.log(doc);
    res.json(doc);
});

app.get('/', async (req, res) => {
const docs= await User.find({});
res.json(docs);
})


app.listen(port , () => {
    console.log(`server is running on port ${port}`);
})