


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hamn'); 
   console.log("DB connected");
  }
  const userDataSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mail: String,
    password: String,
    address: String
  });
  const User = mongoose.model('User', userDataSchema);

server.use(cors());
server.use(bodyParser.json());

server.post('/demo', async (req, res) => 
{
  let user = new User();
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.mail = req.body.mail;
  user.password = req.body.password;
  user.address = req.body.address;
  const doc = await user.save();


  console.log(doc);
  res.json(doc);
});
server.listen(8080, () => {
  console.log("hello from server");
});

