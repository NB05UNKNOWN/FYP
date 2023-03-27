const bcrypt = require('bcryptjs');
const User = require('../models/usermodel');

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: 'No user found' });
  }
  return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: 'User already exist! Log in instated' });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: 'Couldnt find the user' });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Incorrect message' });
  }
  return res.status(200).json({ message: 'Login sucessfull' });
};
module.exports = { getAllUser, signup, login };

// //get userDetail
// //post: http://localhost:8080/login
// async function create_userDetail(req, res) {
//   // if (!req.body) return res.status(400).json('Post HTTP Data not Provided');
//   let { email, password } = req.body;

//   try {
//     const check = await Collection.findOne({ email: email });

//     if (check) {
//       res.json('exist');
//     } else {
//       res.json('not exist');
//     }
//   } catch (e) {
//     req.json('not existed');
//   }

//   // const create = await new model.userDetail({
//   //   email,
//   //   password,
//   // });

//   // create.save(function (err) {
//   //   if (!err) return res.json(create);
//   //   return res.status(400).json({ message: `Erro while creating user ${err}` });
//   // });
// }

// //get: http://localhost:8080/api/userDetail
// async function get_userDetail(req, res) {
//   let data = await model.userDetail.find({});
//   return res.json(data);
// }

// module.exports = {
//   create_userDetail,
//   get_userDetail,
// };
