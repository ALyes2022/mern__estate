import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req, res, next) => {

  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });


  try {
    await newUser.save();
    res.status(201).json("User created sucessfully");

  } catch (error) {
    next(error)

  }
}
export const signin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const validUser = await User.findOne({ username });
    if (!validUser) return next(errorHandler(404, 'User Not Found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Incorrect Password'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...otherValuesWithoutPassword } = validUser._doc; //destructuring the password from the response object because we don't want to return hashed password in the response
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(otherValuesWithoutPassword);

  } catch (error) {
    next(error)
  }
}

