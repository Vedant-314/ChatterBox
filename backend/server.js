const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const socketServer = require('./socketServer')
const authRoutes = require('./routes/authRoutes');
const friendsInvitationRoutes = require('./routes/friendsInvitationRoutes')

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/friend-invitation', friendsInvitationRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose.connect(process.env.MONGO_URI).then(() =>{
    server.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
    }); 
})

.catch(err =>{
    console.log('Connection Failed');
    console.log(err);
})
