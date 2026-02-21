# 🎥 Real-Time Video Communication Platform

A full-stack real-time video conferencing platform built using WebRTC and Socket.io.  
This application allows users to join meetings, communicate via live video/audio, chat in real-time, and share screens — similar to Zoom or Google Meet.

---

## 🚀 Live Demo

🔗 Frontend:https://real-time-video-communication-platform-1.onrender.com
🔗 Backend API:https://videocommunicationplatform-backend.onrender.com

---

## 📌 Features

- 🎥 Live Video Calling (WebRTC)
- 💬 Real-Time Chat (Socket.io)
- 🔇 Mute / Unmute Audio
- 🖥 Screen Sharing
- 📞 End Call Functionality
- 👥 Multi-user Room Support
- 🔐 User Authentication
- 🌐 Deployed on Render

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Material UI
- WebRTC
- Socket.io Client

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB (Mongoose)

### Deployment
- Render
- MongoDB Atlas

---

## 🧠 How It Works (Architecture Overview)

1. Users authenticate and join a meeting room.
2. Socket.io establishes real-time signaling between participants.
3. WebRTC creates peer-to-peer connections for video/audio streaming.
4. Media streams are exchanged directly between users.
5. Chat messages are broadcast using WebSockets.

---

## ⚙️ Installation & Setup (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Real-Time-Video-Communication-Platform.git
cd Real-Time-Video-Communication-Platform
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

- Backend deployed on Render
- Frontend deployed on Render
- Database hosted on MongoDB Atlas

---

## 📚 Key Concepts Implemented

- WebRTC Peer-to-Peer Communication
- Real-Time Signaling using Socket.io
- REST API with Express
- Environment Variables for Production
- Full-Stack Deployment
- Authentication & Authorization

---

## 🔮 Future Improvements

- Meeting Recording
- Raise Hand Feature
- Host Controls
- AI Meeting Summary
- Network Quality Indicator
- Background Blur

---

## 👩‍💻 Author

Gunjan Pandey  
Full Stack Developer  

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub!
