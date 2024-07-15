# Real-Time Stock/Crypto Price Dashboard

This project is a mini-website to collect and display real-time price data for stocks and cryptocurrencies. The backend polls real-time data from an external API and stores it in a MongoDB database, while the frontend fetches this data and displays it in a dynamic table.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Debugging](#debugging)
- [License](#license)

## Features

- Poll real-time data every few seconds for 5 stocks or cryptocurrencies from an external API.
- Store the data in a MongoDB database.
- Fetch and display the most recent 20 entries for a particular stock or cryptocurrency.
- Dynamic table updates with real-time data.
- Modal/popup to change the stock or cryptocurrency.

## Technologies

- **Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose, node-cron, dotenv
- **Frontend**: Next.js, React, TypeScript, Redux Toolkit, redux-persist, Axios, Tailwind CSS

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tamendra/crypto-project.git
   cd crypto-project

2. **Install dependencies for both frontend and backend:**

# Install backend dependencies
cd stock-price-backend-service
npm install

3. **Set up environment variables:**

# Install frontend dependencies
cd ../stock-price-frontend
npm install

PORT=3001
MONGO_URI=mongodb://localhost:27017/stockPriceDB

## Usage

1. **Start the backend server:**

  cd stock-price-backend-service
npm run dev

2. **Start the frontend server:**
cd ../stock-price-frontend
npm run dev


3. **Open browser and navigate to:**

http://localhost:3000


