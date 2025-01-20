import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './models/User.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import ws from 'ws';

dotenv.config({ path: './api/.env' }); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4002;
const MONGO_URL = process.env.MONGO_URL;
const jwtSecret = process.env.JWT_SECRET;
const clientURL = process.env.CLIENT_URL;
const bcryptSalt = bcrypt.genSaltSync(10);

// MongoDB Connection
mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the app if unable to connect
  });

// Middleware
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: clientURL, // Allows requests from client URL
}));
app.use(cookieParser()); // Parses cookies in request headers

// Test Route
app.get('/test', (req, res) => {
  res.json('Test OK');
});

app.get('/profile', (req,res)=>{
    const token = req.cookies?.token;
    if(token){
        jwt.verify(token, jwtSecret, {}, (err, userData)=> {
            if(err) throw err;
            res.json(userData)
        });
    }else{
        res.status(401).json("no token")
    }
    
});


// Login Router
app.post('/login', async(req,res) => {
    const {username, password} = req.body;
    const foundUser = await UserModel.findOne({username});
    if(foundUser){
        const passOk = bcrypt.compareSync(password, foundUser.password);
        if(passOk){
            jwt.sign({userId: foundUser._id, username}, jwtSecret, {}, (err,token)=>{
                res.cookie('token',token, {sameSite:'none', secure:true}).json({
                    id: foundUser._id,
                })
            })
        }
    }
})

// Register Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create User in DB
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt)
    const createdUser = await UserModel.create({ 
        username: username, 
        password: hashedPassword,
    });

    // Generate JWT Token
    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) {
        console.error('JWT Sign Error:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Set token in cookie and respond
      res
        .cookie('token', token, {sameSite:'none', secure:true})
        .status(201)
        .json({ id: createdUser._id, username: createdUser.username });
    });
  } catch (err) {
    console.error('User Registration Error:', err.message);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const wss = new ws.WebSocketServer({server});

wss.on('connection', (connection) => {
    console.log('connected');
});
