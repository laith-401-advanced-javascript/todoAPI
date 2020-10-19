const User = require("../model/user-model");

exports.listUsers = async (req, res) => {
  const results = await User.get();
  res.status(200).send({ data: results });
};

exports.getUser = async (req, res) => {
  const results = await User.getById(req.params.userId);
  res.status(200).send({ data: results });
};

exports.createUser = async (req, res) => {
  try {
    const results = await User.create(req.body);
    res.status(200).send({ data: results });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const results = await User.delete(req.params.userId);
  res.status(200).send({ data: results });
};


exports.updateUser = async (req, res) => {
  const results = await User.update(req.params.userId , req.body);
  res.status(200).send({ data: results });
};

exports.singup = async (req, res, next) => {
  const username = req.body.username;

  let isUserExist = await User.get(username);
  if (isUserExist) { // to check if the user is already exist and signup
    return res.send("user exist");
  }

  User.create(req.body).then(async(user) => {
    const token = await User.generateToken(user);
    res.status(200).json({ token });

  })
    .catch((err) => {
      console.log('Wrong!!');
      res.status(403).send(err.message);
    });
};

exports.signin = (req, res, next) => {
  if(req.token){
    res.cookie("token", req.token);
    res.cookie("userId", req.user._id);
    res.send("use is loggined");
  } else {
    res.send("Invalid credentials");
  }
};

exports.signout = (req, res) => {
  res.cookie("token", null);
  res.cookie("userId", null);
  res.redirect("/");
};

exports.getSecret = (req, res) => {
  res.status(200).send(req.user);
};
