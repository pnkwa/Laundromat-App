# Laundromat App

A full-stack web application that simulates a laundromat service system.

This project demonstrates how a modern web application can be built using a **React frontend** and a **Node.js backend with real-time communication**.
The system includes a client interface for interacting with the laundromat service and a server that manages washing timers and notifications.

---

## Overview

The **Laundromat App** represents a simple laundromat workflow where users can start washing cycles and receive updates about the remaining washing time.

The system uses **WebSocket communication** to provide real-time updates and integrates with external notification services.

This repository contains both the frontend and backend services.

---

## Architecture

```
React Client
      │
      │ WebSocket (Socket.IO)
      ▼
Node.js Server (Express)
      │
      ▼
Notification Service (LINE API)
```

The frontend provides the user interface, while the backend manages washing timers, real-time updates, and notifications.

---

## Repository Structure

```
Laundromat-App
│
├── luandromat-client
│   ├── src
│   ├── public
│   └── package.json
│
├── luandromat-server
│   ├── src
│   │   └── server.ts
│   └── package.json
│
└── README.md
```

### Client

The **luandromat-client** directory contains the React frontend application responsible for the user interface.

Main responsibilities:

* Starting washing timers
* Displaying washing status
* Receiving real-time updates from the server

Tech stack:

* React
* JavaScript
* CSS
* WebSocket client (Socket.IO)

---

### Server

The **luandromat-server** directory contains the backend service.

Main responsibilities:

* Managing washing timers
* Broadcasting timer updates
* Sending notifications via LINE API

Tech stack:

* Node.js
* Express
* Socket.IO
* TypeScript

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/pnkwa/Laundromat-App.git
cd Laundromat-App
```

---

## Run the Server

```
cd luandromat-server
npm install
npm run dev
```

Server will run at:

```
http://localhost:3002
```

---

## Run the Client

Open another terminal:

```
cd luandromat-client
npm install
npm start
```

Client will run at:

```
http://localhost:3000
```

---

## Features

* Start washing machine timer
* Real-time countdown updates
* WebSocket communication
* Notification when washing is nearly complete
* Simple laundromat workflow simulation

---

## Learning Goals

This project was created to practice:

* Building full-stack applications
* React component architecture
* Real-time communication with WebSockets
* Node.js backend development
* Integrating external APIs

---

## Future Improvements

Possible improvements:

* Multiple washing machines support
* Machine status dashboard
* Authentication system
* Database integration
* Mobile-friendly UI

---

## Author

Developed by **pnkwa**

---

## License

MIT
